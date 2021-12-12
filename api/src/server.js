import express from 'express';

const app = express();

var port = process.env.PORT || 8080;;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ 
        name: process.env.npm_package_name || process.env.ApplicationName || 'unknown',
        version:  process.env.npm_package_version || process.env.ApplicationVersion || 'unknown',
    });
});

app.use('/api', router);

app.listen(port);