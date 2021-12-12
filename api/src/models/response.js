export class Response {
    constructor(success=true, data=null, message=null) {
        this.success = success;
        this.data = data;
        this.message = message;
    }
};