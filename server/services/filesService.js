const socket = global.socket;
const uuidV4 = require('uuid/v4');

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

    create() {
        const randomInt = () => Math.round(Math.random() * 50);
        const id =  uuidV4();
        const newFile = {
            id,
            fileType: "Nucleotide Sequence",
            name: `File ${id}`,
            sequenceCount: randomInt(),
            sequenceLength: randomInt(),
            size: `${randomInt()} MB`,
            uploadedAt: Date.now()
        };
        this._files.unshift(newFile);
        this._notifyRelevant('fileAdded');
        return newFile;
    }

    delete(id) {
        const index = this._files.findIndex(item => item.id === id);

        if (index === -1) {
            return false;
        } else {
            this._files.splice(index, 1);
            this._notifyRelevant('fileDeleted', id, index);
            return true;
        }
    }

    _notifyRelevant(type, id, index) {
        socket.send(type, {rowCount: this._files.length});
    }
}

// Risk of instantiating twice.
module.exports = new FilesService();