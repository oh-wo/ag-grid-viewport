const socket = require('socket.io');

class Socket {

    constructor(server) {
        this.io = socket(server);
        this.connections = [];
        console.log('new io')


        this.io.on('connection', socket => {
            // TODO Handle more than one connection (add to an array of socket connections etc).
            this.connections.push({socket});
            console.log('connection');
            socket.emit('news', {hello: 'world'});
            socket.on('viewportRange', data => {
                this.start = data.firstRow;
                this.stop = data.lastRow;
            });
        });

        global.socket = this;
        return this.io;
    }

    send(type, data) {
        this.connections.forEach(connection => connection.socket.emit(type, data))
    }
}


module.exports = Socket;