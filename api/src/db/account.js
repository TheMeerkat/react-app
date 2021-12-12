import { ConsoleLogger } from '../service/log/index.js';
import fs from 'fs';

class Account {

    _data=[];
    _logger = new ConsoleLogger();

    constructor(/** ILogger */logger) {
        if (logger) {
            this._logger = logger;
        }
        try {
            let rawdata = fs.readFileSync(new URL('../../store/data.json', import.meta.url));
            this._data = JSON.parse(rawdata);
        } catch (e) {
            this._logger.error(`An error occurred retrieving data from the data file. ${e.message}`);
        }
    }
};

Account.all = () => {
    return (new Account())._data;
};

export default Account;