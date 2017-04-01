const express = require('express');
const filesApi = express();
const filesService = require('../services/filesService');

filesApi.get('/', (req, res) => {
    const files = filesService.get();
    res.send(files);
});


filesApi.delete('/:id', (req, res) => {
    const fileId = parseInt(req.params.id);
    const success = filesService.delete(fileId);
    console.log('delete file with id', fileId, ' was ', success ? 'successful' : 'unsuccessful');
    return res.status(success ? 200 : 404).send();
});

module.exports = filesApi;