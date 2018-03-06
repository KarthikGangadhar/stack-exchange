'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');

module.exports = class Privileges extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    privilages(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'PRIVILEGES');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

};
