'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class Info extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    revisions(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'REVISIONS');
        let formatted_url = util.format(url, ids);
        helper.getResponse(formatted_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

};