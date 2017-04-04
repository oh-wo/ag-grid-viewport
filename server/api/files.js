const express = require('express');
const filesApi = express();
const filesService = require('../services/filesService');

filesApi.get('/', (req, res) => {
    // Parse parameters.
    const start = parseInt(req.query.start);
    const stop = parseInt(req.query.stop);
    // Get the data.
    const files = filesService.get(start, stop);
    // Send the response.
    res.send(files);
});


filesApi.delete('/:id', (req, res) => {
    const fileId = req.params.id;
    const success = filesService.delete(fileId);
    console.log('delete file with id', fileId, ' was ', success ? 'successful' : 'unsuccessful');
    return res.status(success ? 200 : 404).send();
});

module.exports = filesApi;