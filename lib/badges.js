'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class Badges extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    badges(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'BADGES');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    badge_by_tags(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'BADGES_BY_TAGS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }
    
    badge_recipients(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'BADGES_RECIPIENTS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    badge_recipients_by_id(id, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'BADGES_RECIPIENTS_BY_ID');
        let formated_url = util.format(url, id);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    badges_by_id(id, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'BADGES_BY_ID');
        let formated_url = util.format(url, id);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    badges_by_name(name, options = {}, callback) {
        options['inname'] = name || '';
        let url = helper.getEndpoint(this.version, options, 'BADGES_BY_NAME');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

};
