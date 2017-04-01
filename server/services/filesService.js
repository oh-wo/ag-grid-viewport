

class FilesService {
    constructor() {
        this._files = [
            {id: 1, name: 'File 1'},
            {id: 2, name: 'File 2'},
            {id: 3, name: 'File 3'},
        ];
    }

    get(pageOffset, pageSize) {
        return this._files;
    }

    delete(id) {
        const index = this._files.findIndex(item => item.id === id);

        console.log(id, typeof id, 'index', index, 'files', this._files)

        if (index === -1) {
            return false;
        } else {
            this._files.splice(index, 1);
            return true;
        }
    }
}

// Risk of instantiating twice.
module.exports = new FilesService();