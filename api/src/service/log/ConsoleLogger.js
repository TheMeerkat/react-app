export class ConsoleLogger {
    constructor(options={}) {
    }

    _log(type, message) {
        let timestamp = (new Date(Date.now())).toLocaleTimeString();
        type = type.toUpperCase();
        console.log(`${timestamp} ${type}: ${message}`);
    }

    info(message) {
        this._log('info', message);
    }

    error(message) {
        this._log('error', message);
    }

    debug(message) {
        this._log('debug', message);
    }
}