import axios from 'axios';

export class AccountService {
    _host=null;

    constructor(host) {
        this._host=host;
    }

    async getBalanceByCardNumber(cardNumber) {
        console.log('=>', this._host);
        return await axios.post(`${this._host}/accounts/balance`, {
            "cn": String(cardNumber)
        });
    }
}