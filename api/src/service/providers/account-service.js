import { Account as AccountProvider } from '../../db/index.js';
import { ConsoleLogger } from '../log/index.js';

export class AccountService {
    _logger = new ConsoleLogger();
    constructor(/** ILogger */ logger) {
        if (logger) {
            this._logger = logger;
        }
    }

    getAllAccounts() {
        return AccountProvider.all();
    }

    getAccountByCardNumber(accountNumber) {
        let profile = AccountProvider.all().find(user => {
            return user.account.cardNumber === accountNumber;
        });

        if (!profile) {
            return null;
        }

        return profile.account;
    }
}