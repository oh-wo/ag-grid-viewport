const socket = global.socket;

class FilesService {
    constructor() {
        this._files = require('./db.json');
    }

    get(start = 0, stop = 100) {
        console.log(`Getting rows for start: ${start}, stop: ${stop}`);

        return {
            data: this._files.slice(start, stop),
            metadata: {
                total: this._files.length,
                start,
                stop
            }
        };
    }

    delete(id) {
        const index = this._files.findIndex(item => item.id === id);

        if (index === -1) {
            return false;
        } else {
            this._files.splice(index, 1);
            this._notifyRelevant(id, index);
            return true;
        }
    }

    _notifyRelevant(id, index) {
        socket.send('fileDeleted', {rowCount: this._files.length});
    }
}

// Risk of instantiating twice.
module.exports = new FilesService();