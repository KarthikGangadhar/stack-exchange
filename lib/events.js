'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');

module.exports = class Events extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    events(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options , 'EVENTS');        
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

};
