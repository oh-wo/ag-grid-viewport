export default class ViewportDatasource {
    constructor(resource) {
        this.resource = resource;
        this.connectionId = this.resource.connect(this.eventListener.bind(this));
    }

    /**
     * gets called by the grid, tells us what rows the grid is displaying, so time for us to tell the server to give us the rows for that displayed range
     * @param firstRow
     * @param lastRow
     */
    setViewportRange(firstRow, lastRow) {
        console.log('setViewportRange: ' + firstRow + ' to ' + lastRow);
        this.resource.setViewportRange(this.connectionId, firstRow, lastRow);

        this.resource.fetch(firstRow, lastRow).then(response => {
            const map = {};
            response.data.forEach((row, index) => map[index] = row);
            this.params.setRowData(map);
        })
    }

    /**
     * Gets called by the grid, provides us with the callbacks we need
     * @param params
     */
    init(params) {
        this.params = params;
        this.resource.fetch(0).then(response => {
            params.setRowCount(response.metadata.total);
        })
    }

    /**
     * Gets called by grid, when grid is destroyed or this datasource is swapped out for another one
     */
    destroy() {
        this.resource.disconnect(this.connectionId);
    }

    /**
     * manages events back from the server
     * @param event
     */
    eventListener(event) {
        switch (event.eventType) {
            case 'rowCountChanged':
                this.onRowCountChanged(event);
                break;
            case 'rowData':
                this.onRowData(event);
                break;
            case 'dataUpdated':
                this.onDataUpdated(event);
                break;
        }
    }

    /**
     * Process rowData event
     * @param event
     */
    onRowData(event) {
        const rowDataFromServer = event.rowDataMap;
        this.params.setRowData(rowDataFromServer);
    }

    /**
     * Process dataUpdated event
     * @param event
     */
    onDataUpdated(event) {
        event.changes.forEach(change => {
            const rowNode = this.params.getRow(change.rowIndex);
            // if the rowNode is missing, it means the grid is not displaying that row.
            // if the data is missing, it means the rowNode is there, but that data has not
            // loaded into it yet, so to early to set delta changes.
            if (!rowNode || !rowNode.data) {
                return;
            }
            // rowNode.data[change.columnId] = change.newValue;
            // this is a trick, it gets the row to refresh
            rowNode.setDataValue(change.columnId, change.newValue);
        });
    }

    /**
     * Process rowCount event
     * @param event
     */
    onRowCountChanged(event) {
        const rowCountFromServer = event.rowCount;
        // this will get the grid to make set the height of the row container, so we can scroll vertically properly
        this.params.setRowCount(rowCountFromServer);
    }
}