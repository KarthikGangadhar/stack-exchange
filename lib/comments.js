'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class Comments extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    comments(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'COMMENTS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    comments_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'COMMENTS_BY_IDS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    delete_comment(ids, options = {}, callback) {
        options['site'] = options['site'] || 'stackoverflow';
        let url = helper.getEndpoint(this.version, {}, 'DELETE_COMMENT');
        let formated_url = util.format(url, ids);
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    edit_comment(ids, options = {}, callback) {
        options['site'] = options['site'] || 'stackoverflow';
        let url = helper.getEndpoint(this.version, {}, 'EDIT_COMMENT');
        let formated_url = util.format(url, ids);
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    create_comment_flag(ids, options = {}, callback) {
        options['site'] = options['site'] || 'stackoverflow';
        let url = helper.getEndpoint(this.version, {}, 'CREATE_COMMENT_FLAG');
        let formated_url = util.format(url, ids);
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    comment_flag_options(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'COMMENTS_FLAG_OPTIONS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    upvote_comment(ids, options = {}, callback) {
        options['site'] = options['site'] || 'stackoverflow';
        let url = helper.getEndpoint(this.version, {}, 'UPVOTE_COMMENT');
        let formated_url = util.format(url, ids);
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    undo_upvote_comment(ids, options = {}, callback) {
        options['site'] = options['site'] || 'stackoverflow';
        let url = helper.getEndpoint(this.version, {}, 'UNDO_UPVOTE_COMMENT');
        let formated_url = util.format(url, ids);
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

};
