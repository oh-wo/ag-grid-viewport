const express = require('express');
const http = require('http');
const url = require('url');
const cors = require('cors');
const path = require('path');
const Socket = require('./socket');
const helmet = require('helmet');
const app = express();
const server = http.Server(app);
const io = new Socket(server);

// Allow loading scripts from unsafe locations.
// TODO Fix security hole if we start to care about that.
app.use(helmet({
    'default-src': ["*"],
    reportOnly: false,
    setAllHeaders: false,
    safari5: false
}));

// Allow cross origin requests.
app.use(cors());

// Define the api.
use('/api/files');

// Static file paths.
const dir = path.join(__dirname, '../dist');
const index = path.join(dir, 'index.html');

// Serve any requests for files inside ui build.
app.use(express.static(dir));

// Serve up index.html for requests to our site.
app.get('/', (req, res) => {
    // Don't send html to something that only accepts json for example.
    if (req.accepts('html') && res.status(404)) {
        return res.sendFile();
    }
});

// Start the app.
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