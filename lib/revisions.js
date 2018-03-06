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
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

};
