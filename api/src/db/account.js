import { ConsoleLogger } from '../services/log';

class Account {

    _data=[];
    _logger = new ConsoleLogger();

    constructor(/** ILogger */logger) {
        if (logger) {
            this._logger = logger;
        }
        try {
           this. _data = require('../store/data.json');
        } catch (e) {
            this._logger.error('An error occurred retrieving data from the data file.');
        }
    }

    getAccountByCardNumber(accountNumber) {
        let profile = this._data.find(d => {
            return a.account.cardNumber === accountNumber;
        });

        if (!profile) {
            return null;
        }

        return profile.account;
    }
}