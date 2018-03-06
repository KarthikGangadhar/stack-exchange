'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class Answers extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    answers(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ANSWERS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    answers_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ANSWERS_BY_IDS');
        let format_url = util.format(url, ids);
        helper.getResponse(format_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    accept_answer(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, {}, 'ACCEPT_ANSWER');
        let formated_url = util.format(url, ids);
        options['site'] = options['site'] || 'stackoverflow';
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    undo_accept_answer(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, {}, 'UNDO_ACCEPT_ANSWER');
        let formated_url = util.format(url, ids);
        options['site'] = options['site'] || 'stackoverflow';
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    comments_on_answers(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'COMMENTS_ON_ANSWERS');
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
