const express = require('express');
const http = require('http');
const url = require('url');
const cors = require('cors');
const path = require('path');
const Socket = require('./socket');

const app = express();
const server = http.Server(app);

const io = new Socket(server);

const helmet = require('helmet');

app.use(helmet({
    'default-src': ["*"],
    reportOnly: false,
    setAllHeaders: false,
    safari5: false
}));

app.use(cors());

use('/api/files');

app.use('/', express.static(path.join('../dist/index.html')));

const port = process.env.PORT || 3000;
server.listen(port, () => {
    const host = server.address().address;
    console.log('Web server listening on http://%s:%s', host, port);
});

/**
 * Each endpoint must have a file whose name exactly matches its path.
 *
 * @param path {String} endpoint starting with a slash.
 */
function use(path) {
    app.use(path, require(`.${path}`));
}