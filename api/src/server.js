import express from 'express';
import { AccountService } from './service/providers/index.js';
import { Response } from './models/index.js';
import { ConsoleLogger } from './service/log/index.js';

const app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
var logger = new ConsoleLogger();
var accountServiceProvider = new AccountService(logger);

app.use(express.json());

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
    let cardNumber = req.body ? req.body.cn : null;
    let errorMessage = null;

    if (!cardNumber) {
        errorMessage='No account number provided.';
    }
    else if (cardNumber.length !== 16) {
        errorMessage='Invalid account number provided.';
    };

    if (errorMessage !== null) {
        res.status(500).json(new Response(false, null, errorMessage));
        return;
    }

    // Assuming authenticated/authorized to view this information

    let account = accountServiceProvider.getAccountByCardNumber(cardNumber);

    if (!account) {
        logger.error(`Account retrieval error for account ${cardNumber}`);
        account = { balance: 0.00 };
    }
    
    res.json(new Response(true, account.balance));
});

app.use('/api', router);

app.listen(port);