const io = require("socket.io-client");

export default class Resource {
    constructor() {
        this.endpoint = 'http://localhost:3000/api/files';
    }

    fetch(start, stop) {
        this.lastStart = start;
        this.lastStop = stop;
        const filesEndpoint = `${this.endpoint}?start=${start}&stop=${stop}`;
        return fetch(filesEndpoint).then(response => response.json());
    }

    init() {
        console.log('init', arguments)
    }

    setViewportRange(connectionId, firstRow, lastRow) {
        this.socket.emit('viewportRange', {firstRow, lastRow});
    }

    connect(listener) {
        this.socket = io.connect();

        this.socket.on('connect', function () {
            console.log('socket connection')
        });

        this.socket.on('fileDeleted', data => {
            this.fetch(this.lastStart, this.lastStop).then(serverResponse => {
                listener({
                    eventType: 'rowData',
                    serverResponse
                })
            })
        });

        this.socket.on('error', function (data) {
            console.log(data || 'error');
        });

        this.socket.on('connect_failed', function (data) {
            console.log(data || 'connect_failed');
        });
    }

    disconnect() {

    }

    deleteFile(id) {
        return fetch(`${this.endpoint}/${id}`, {
            method: 'DELETE',
        })
    }
}
