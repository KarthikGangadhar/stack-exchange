'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class Posts extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    posts(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'POSTS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    posts_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'POSTS_BY_IDS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    comments_on_posts(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'COMMENTS_ON_POSTS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    create_comment(ids, options = {}, callback) {
        options['site'] = options['site'] || 'stackoverflow';
        let url = helper.getEndpoint(this.version, {}, 'CREATE_COMMENT');
        let formated_url = util.format(url, ids);
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    render_comment(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, {}, 'RENDER_COMMENT');
        options['site'] = options['site'] || 'stackoverflow';
        let formated_url = util.format(url, ids);
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    revisions_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'REVISIONS_BY_IDS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    posts_on_suggested_edits(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'POSTS_ON_SUGGESTED_EDITS');
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
