'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class Network extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    invalidate_access_tokens(options = {}, callback) {
        let access_token = options['access_token'] || '';
        let url = helper.getEndpoint(this.version, options, 'INVALIDATE_ACCESS_TOKENS');
        let formated_url = util.format(url, access_token);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    read_access_tokens(options = {}, callback) {
        let access_token = options['access_token'] || '';
        let url = helper.getEndpoint(this.version, options, 'READ_ACCESS_TOKENS');
        let formated_url = util.format(url, access_token);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    application_de_authenticate(options = {}, callback) {
        let access_token = options['access_token'] || '';
        let url = helper.getEndpoint(this.version, options, 'APPLICATION_DE_AUTHENTICATE');
        let formated_url = util.format(url, access_token);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    errors(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ERRORS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    simulate_errors(id, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'SIMULATE_ERRORS');
        let formated_url = util.format(url, id);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    create_filter(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'CREATE_FILTER');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    read_filter(filter, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'READ_FILTER');
        let formated_url = util.format(url, filter);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    inbox(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'INDOX');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    inbox_unread(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'INDOX_UNREAD');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    notifications(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'NOTIFICATIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    unread_notifications(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'UNREAD_NOTIFICATIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    sites(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'SITES');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }
};
