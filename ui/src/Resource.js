export default class Resource {

    constructor() {
        this.pageLimit = 5;
        this.folderID = '43f3133c-0d3b-4429-a0ce-b7f530ae7a05';
        this.xAuthToken = '75b86e41afabc81eb65888d415405a70e53a871df2f61c044ba5b25f3dfb56179aeb791f6041f8ce8163ee450a125a0512cdd710955e5c7e1a86f9f7efd4c96cc7c39d9100926e29f543b7573bcf46091dd6f7a995a3df3c47980de30c8e4ce2a11a6a5412f5930fb0ce92de5d23f5ce0b3f0ed2108d80b481881753b136c3a6';

        this.fetch(0);
    }

    fetch(pageOffset) {
        const headers = {'x-auth-token': this.xAuthToken};
        return fetch(`http://localhost:3000/api/files?folderID=${this.folderID}&pageLimit=${this.pageLimit}&pageOffset=${pageOffset}`, {headers})
    }

    init() {
        console.log('init',arguments)
    }


    setViewportRange(){

    }
    connect() {

    }

    disconnect(){

    }
}
