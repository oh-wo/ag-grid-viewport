const socket = require('socket.io');

class Socket {

    constructor(server) {
        this.io = socket(server);
        console.log('new io')


        this.io.on('connection', socket => {
            console.log('connection');
            socket.emit('news', {hello: 'world'});
            socket.on('my other event', data => {
                console.log(data);
            });
        });

        return this.io;
    }
}


module.exports = Socket;