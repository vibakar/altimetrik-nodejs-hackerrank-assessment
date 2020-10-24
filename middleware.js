const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');

module.exports = function (req, res, next) {
    let keys = fs.readFileSync(VALID_KEYS_PATH, 'utf-8');
    let keysArr = keys.split('\n');
    if(req.headers['x-api-key'] && keysArr.indexOf(req.headers['x-api-key']) >= 0) {
        next();
    } else {
        res.status(401).send({message: 'unauthorized'});
    }
};
