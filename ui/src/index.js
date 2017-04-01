import Resource from "./Resource";
import ViewportDatasource from "./viewportDatasource.js";
const io = require("socket.io-client");
const agGrid = require('../node_modules/ag-grid-enterprise/dist/ag-grid-enterprise');

agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_for_Production_100Devs31_May_2017__MTQ5NjE4NTIwMDAwMA==f1526f49562664fe54c29d303330c88b");

const ourFiles = [];

const socket = io.connect();

socket.on('connect', function () {
    console.log('socket connection')
});

socket.on('fileDeleted', data => {
    console.log(data);
    const index = ourFiles.findIndex(file => data.id === file.id);
    if (index !== -1) {
        ourFiles.splice(index, 1);
        displayFiles();
    }
});

socket.on('error', function (data) {
    console.log(data || 'error');
});

socket.on('connect_failed', function (data) {
    console.log(data || 'connect_failed');
});

socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', {my: 'data'});
});

const filesEndpoint = 'http://localhost:3000/api/files';

function displayFiles() {
    const debugEl = document.querySelector('.debugger');
    debugEl.innerText = ourFiles.map(file => `[${file.id} ${file.name}]`).toString();
}

document.addEventListener("DOMContentLoaded", () => {

    fetch(filesEndpoint).then(response => response.json()).then(files => {
        ourFiles.push.apply(ourFiles, files);
        console.log(ourFiles)
        displayFiles();
    });

    let i = 0;
    const deleteEl = document.querySelector('#deleteFile');
    deleteEl.addEventListener('click', () => deleteFile(i++));

    function deleteFile(id) {
        fetch(`${filesEndpoint}/${id}`, {
            method: 'DELETE',
        })
    }
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