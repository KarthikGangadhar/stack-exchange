'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class SuggestedEdits extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    suggested_edits(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'SUGGESTED_EDITS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    suggested_edits_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'SUGGESTED_EDITS_BY_IDS');
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
