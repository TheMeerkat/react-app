import express from 'express';
import { AccountService } from './service/providers/index.js';
import { Response } from './models/index.js';

const app = express();

var port = process.env.PORT || 8080;

var router = express.Router();

var accountServiceProvider = new AccountService();

router.get('/', function(req, res) {
    res.json({ 
        name: process.env.npm_package_name || process.env.ApplicationName || 'unknown',
        version:  process.env.npm_package_version || process.env.ApplicationVersion || 'unknown',
    });
});

// If time create controller
router.get('/accounts', function(req, res) {
    res.json(new Response(true, accountServiceProvider.getAllAccounts()));
});

router.get('/accounts/balance', function(req, res) {
    let cardNumber = req.body.cn;
    let errorMessage = null;

    if (!cardNumber) {
        errorMessage='No account number provided.';
    }
    else if (cardNumber.length < 16 ||!/[^a-zA-Z]/.test(cardNumber)) {
        errorMessage='Invalid account number provided.';
    };

    if (errorMessage === null) {
        res.json(new Response(false, null, errorMessage));
        return;
    }

    res.json(new Response(true, accountServiceProvider.getAccountByCardNumber(cardNumber)));
});

app.use('/api', router);

app.listen(port);