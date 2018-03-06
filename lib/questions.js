'use strict';

const stackExchange = require('./stack_exchange');
const util = require('util');
const helper = require('../helpers/utils');

module.exports = class Question extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    questions(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'QUESTIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    questions_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'QUESTIONS_BY_ID');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    answers_on_questions(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ANSWERS_ON_QUESTIONS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    linked_questions(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'LIKED_QUESTIONS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    related_questions(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'RELATED_QUESTIONS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    questions_timeline(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'QUESTIONS_TIMELINE');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    featured_questions(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'FEATURED_QUESTIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    no_answer_questions(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'NO_ANSWER_QUESTIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    unanswered_questions(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'UNANSWERED_QUESTIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    unanswered_questions_my_tags(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'UNANSWERED_QUESTIONS_BY_MY_TAGS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    render_answer(id, body, callback) {
        let url = helper.getEndpoint(this.version, {}, 'RENDER_ANSWER');
        let formated_url = util.format(url, id);
        helper.postResponse(formated_url, body).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    question_flag_options(id, options, callback) {
        let url = helper.getEndpoint(this.version, options, 'QUESTION_FLAG_OPTIONS');
        let formated_url = util.format(url, id);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    question_close_options(id, options, callback) {
        let url = helper.getEndpoint(this.version, options, 'QUESTION_CLOSE_OPTIONS');
        let formated_url = util.format(url, id);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    comments_on_questions(id, options, callback) {
        let url = helper.getEndpoint(this.version, options, 'COMMENTS_ON_QUESTIONS');
        let formated_url = util.format(url, id);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

};
