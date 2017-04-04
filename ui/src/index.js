import Resource from "./Resource";
import ViewportDatasource from "./viewportDatasource.js";
const agGrid = require('../node_modules/ag-grid-enterprise/dist/ag-grid-enterprise');

agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_for_Production_100Devs31_May_2017__MTQ5NjE4NTIwMDAwMA==f1526f49562664fe54c29d303330c88b");

const resource = new Resource();

let selectAll = false;
let deselected = {};
const gui = document.createElement('input');
class SelectionHeaderComponent {
    init(agParams) {
        // TODO Create wrapper element with input and span as children.
        this.gui = gui;
        this.gui.setAttribute('type', 'checkbox');

        if (selectAll) {
            this.gui.setAttribute('checked', 'checked');
        } else {
            this.gui.removeAttribute('checked');
        }

        this.gui.addEventListener('change', () => {
            console.log('toggle select all');
            selectAll = !selectAll;
            if (!selectAll) {
                gridOptions.api.deselectAll();
                deselected = {};
            }
            gridOptions.api.refreshView();
        })
    }

    getGui() {
        return this.gui;
    }
}

const columnDefs = [
    {
        headerName: "Select",
        field: "selected",
        cellRenderer: params => {
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');

            const loading = !!params.data;
            if (loading) {
                // Show rows as selected if select all is checked and the row hasn't been deselected.
                if (selectAll) {
                    const select = !deselected[params.data.id];
                    console.log(`rendering as ${select} to mock select all`)
                    params.node.setSelected(select);
                }
            } else {
                checkbox.setAttribute('disabled', 'disabled');
            }

            // Render checkbox as selected if needed.
            if (params.node.isSelected()) {
                console.log('setting checked because is selected');
                checkbox.setAttribute('checked', 'checked');
            }

            checkbox.addEventListener('click', e => {
                console.log('checkbox change', e.target.checked)
                params.node.setSelected(e.target.checked);
                if (selectAll) {
                    if (!checkbox.checked) {
                        deselected[params.data.id] = true;
                    } else {
                        delete deselected[params.data.id];
                    }
                }

                const selectedRows = gridOptions.api.getSelectedRows();

                // When all rows are deselected.
                if (Object.keys(deselected).length === params.api.rowModel.lastRow) {
                    console.log('all rows are deselected');
                    selectAll = false;
                    // Render changes.
                    gui.checked = selectAll;
                    gridOptions.api.refreshGroupRows();
                    // Reset the map.
                    deselected = {};
                }
                const selectedCount = selectedRows.length;
                // All rows are now selected.
                if (selectedCount === params.api.rowModel.lastRow) {
                    console.log('all rows are selected');
                    selectAll = true;
                    // Render changes.
                    gui.checked = selectAll;
                    gridOptions.api.refreshGroupRows();
                }
            });

            return checkbox;
        },
        headerComponent: SelectionHeaderComponent
    },
    {
        headerName: "Delete",
        field: "id",
        cellRenderer: params => {
            // TODO Is there a better option than attaching to `window`?
            window.deleteFile = id => resource.deleteFile(id);

            const id = params.data && params.data.id;
            const disabled = (typeof id !== 'undefined') ? '' : 'disabled';

            return `<button ${disabled} onclick="window.deleteFile(${id})"></button>`;
        }
    },
    {"headerName": "Name", "field": "name"},
    {"headerName": "File type", "field": "documentType"},
    {"headerName": "Description", "field": "description"},
    {"headerName": "Length", "field": "sequenceLength"},
    {"headerName": "No. Sequences", "field": "sequenceCount"},
    {"headerName": "Size", "field": "size"},
    {"headerName": "Uploaded", "field": "uploadedAt"}];

// let the grid know which columns and what data to use
const gridOptions = {
    enableRangeSelection: true,
    enableColResize: true,
    columnDefs,
    rowHeight: 40,
    rowSelection: 'multiple',
    rowModelType: 'viewport',
    // Prevent row clicks from interfering with checkbox selection.
    suppressRowClickSelection: true,
    // implement this so that we can do selection
    getRowNodeId: row => {
        return row.id;
    },
    onRowClicked: e => {
        // e.event.preventDefault()
        e.event.stopImmediatePropagation();
        console.log('click')
    },
    onSelectionChanged: () => {
        const selectedRows = gridOptions.api.getSelectedRows();

        console.log('deselected', deselected)
    }
};

// wait for the document to be loaded, otherwise ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", () => {

    // lookup the container we want the Grid to use
    const eGridDiv = document.querySelector('#myGrid');
    eGridDiv.innerHTML = '';

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);

    const viewportDatasource = new ViewportDatasource(resource);
    gridOptions.api.setViewportDatasource(viewportDatasource);
});