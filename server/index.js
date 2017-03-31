const express = require('express');
const http = require('http');
const url = require('url');
const cors = require('cors');
const path = require('path');
const socket = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socket(server, {path: 'socket'});

const helmet = require('helmet');

app.use(helmet({
    'default-src': ["*"],
    reportOnly: false,
    setAllHeaders: false,
    safari5: false
}));


app.use(cors());


app.use('/api/files', (req, res) => {
    res.send(200);
});

server.listen(process.env.PORT || 3000);


io.on('connection', socket => {
    console.log('connection');
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', data => {
        console.log(data);
    });
});
