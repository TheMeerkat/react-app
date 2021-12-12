export class ConsoleLogger {
    constructor(options={}) {
        console.log('Constructing Logger');
    }

    _log(type, message) {
        console.log(`${Date.now} ${this._log.caller.toUpperCase} ${message}`);
    }

    info(message) {
        this._log(message);
    }

    error(message) {
        this._log(message);
    }

    debug(message) {
        this._log(message);
    }
}