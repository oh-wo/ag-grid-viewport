const socket = require('socket.io');

class Socket {

    constructor(server) {
        this.io = socket(server);
        console.log('new io')


        this.io.on('connection', socket => {
            // TODO Handle more than one connection (add to an array of socket connections etc).
            this.socket = socket;
            console.log('connection');
            socket.emit('news', {hello: 'world'});
            socket.on('my other event', data => {
                console.log(data);
            });
        });

        global.socket = this;
        return this.io;
    }

    send(type, data) {
        this.socket.emit(type, data)
    }
}


module.exports = Socket;