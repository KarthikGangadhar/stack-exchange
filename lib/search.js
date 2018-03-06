'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');

module.exports = class Search extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    search(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'SEARCH');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    advanced_search( options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ADVANCED_SEARCH');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    similar( options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'SIMILAR');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }   

    excerpt_search( options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'EXCERPT_SEARCH');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }   
 
};
