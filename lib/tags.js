'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class Tags extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    tags(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TAGS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    tags_by_name(name, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TAGS_BY_NAME');
        let formated_url = util.format(url, name);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    require_tags(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'REQUIRE_TAGS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    tag_synonyms(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TAG_SYNONYMS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    faqs_by_tags(tag, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'FAQS_BY_TAGS');
        let formated_url = util.format(url, tag);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    related_tags(tag, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'RELATED_TAGS');
        let formated_url = util.format(url, tag);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    synonyms_by_tags(tag, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'SYNONYMS_BY_TAGS');
        let formated_url = util.format(url, tag);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    top_answerers_on_tags(tag, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TOP_ANSWERS_ON_TAGS');
        let formated_url = util.format(url, tag, options.period);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    top_askers_on_tags(tag, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TOP_ASKERS_ON_TAGS');
        let formated_url = util.format(url, tag, options.period);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    wikis_by_tags(tag, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'WIKIS_BY_TAGS');
        let formated_url = util.format(url, tag);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    moderator_only_tags(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'MODERATORS_ONLY_TAGS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }
};
