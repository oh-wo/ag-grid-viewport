import Resource from "./Resource";
import ViewportDatasource from "./viewportDatasource.js";
const agGrid = require('../node_modules/ag-grid-enterprise/dist/ag-grid-enterprise');

agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_for_Production_100Devs31_May_2017__MTQ5NjE4NTIwMDAwMA==f1526f49562664fe54c29d303330c88b");

const resource = new Resource();

let selectAll = true;
let deselected = {};

const columnDefs = [
    {
        headerName: "Select",
        field: "selected",
        cellRenderer: params => {
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            // -- All selection processing happens here --.
            if (params.data) {
                const select = selectAll ? !deselected[params.data.id] : false;
                params.node.setSelected(select);
            } else {
                checkbox.setAttribute('disabled', 'disabled');
            }

            if (params.node.selected) {
                checkbox.setAttribute('checked', 'checked');
            }

            checkbox.addEventListener('click', () => {
                params.node.setSelected(checkbox.checked);
                if (selectAll) {
                    if (!checkbox.checked) {
                        deselected[params.data.id] = true;
                    } else {
                        delete deselected[params.data.id];
                    }
                }
                console.log('deselected', deselected)
            });

            return checkbox;
        },
        headerComponent: class SelectAllComponent {
            init(agParams) {
                // TODO Create wrapper element with input and span as children.
                this.gui = document.createElement('input');
                this.gui.setAttribute('type', 'checkbox');
                if (selectAll) {
                    this.gui.setAttribute('checked', 'checked');
                }
                this.gui.addEventListener('change', () => {
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
    // implement this so that we can do selection
    getRowNodeId: row => {
        return row.id;
    },
    onSelectionChanged: () => {
        const selectedRows = gridOptions.api.getSelectedRows();
        // console.log('selectedRows:', selectedRows)
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