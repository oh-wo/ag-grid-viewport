import Resource from "./Resource";
import ViewportDatasource from "./viewportDatasource.js";
const io = require("socket.io-client");
const enterprise = require("ag-grid-enterprise");


enterprise.LicenseManager.setLicenseKey("Biomatters_Site_5Devs_13_July_2017__MTQ5OTkwMDQwMDAwMA==cb6db07dbc59dc58f93583a20cb54200");
const agGrid = require('ag-grid')

const socket = io.connect('http://localhost:3000', {path: 'socket'});
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', {my: 'data'});
});


// specify the columns
const columnDefs = [
    {"headerName": "Select all", "field": "id"},
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
    rowSelection: 'multiple',
    rowModelType: 'viewport',
    // implement this so that we can do selection
    getRowNodeId: row => {
        return row.id;
    }
};
//
// wait for the document to be loaded, otherwise ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", () => {

    // lookup the container we want the Grid to use
    const eGridDiv = document.querySelector('#myGrid');
    eGridDiv.innerHTML = '';

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);

    const resource = new Resource();

    const viewportDatasource = new ViewportDatasource(resource);
    gridOptions.api.setViewportDatasource(viewportDatasource);
});