'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class Users extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    users(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'USERS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    users_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'USERS_BY_IDS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    answers_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ANSWERS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    badges_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'BADGES_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    comments_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'COMMENTS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    comments_by_users_to_user(user_id, to_id, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'COMMENTS_BY_USERS_TO_USER');
        let formated_url = util.format(url, user_id, to_id);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    favorites_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'FAVORITES_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    mentions_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'MENTIONS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    users_network_activity(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'USERES_NETWORK_ACTIVITY');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    user_unread_notifications(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'USER_UNREAD_NOTIFICATIONS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    user_notifications(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'USER_NOTIFICATIONS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }
    posts_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'POSTS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    privileges_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'PRIVILEGES_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    questions_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'QUESTIONS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    featured_questions_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'FEATURED_QUESTIONS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    no_answer_questions_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'NO_ANSWER_QUESTIONS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    unaccepted_questions_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'UNACCEPTED_QUESTIONS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    unanswered_questions_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'UNANSWERED_QUESTIONS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    reputation_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'REPUTATION_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    reputation_history(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'REPUTATION_HISTORY');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    full_reputation_history(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'FULL_REPUTATION_HISTORY');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    suggested_edits_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'SUGGESTED_EDITS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    tags_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TAGS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    top_user_answers_in_tags(ids, tags, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TOP_USER_ANSWERS_IN_TAGS');
        let formated_url = util.format(url, ids, tags);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    top_user_questions_in_tags(ids, tags, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TOP_USER_QUESTIONS_IN_TAGS');
        let formated_url = util.format(url, ids, tags);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    timeline_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TIMELINE_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    top_answer_tags_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TOP_ANSWER_TAGS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    top_question_tags_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TOP_QUESTION_TAGS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    top_tags_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'TOP_TAGS_ON_USERS');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    moderators(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'MODERATORS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    elected_moderators(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ELECTED_MODERATORS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    user_inbox(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'USER_INBOX');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    user_unread_inbox(ids, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'USER_UNREAD_INBOX');
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    associated_users(id, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ASSOCIATED_USERS');
        let formated_url = util.format(url, id);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    merge_history(id, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'MERGE_HISTORY');
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
