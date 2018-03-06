'use strict';

const stackExchange = require('./stack_exchange');
const helper = require('../helpers/utils');
const util = require('util');

module.exports = class Me extends stackExchange {
    constructor(version) {
        super();
        this.version = version.toString();
    }

    me(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_answers(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_ANSWERS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_badges(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_BADGES');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_comments(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_COMMENTS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_comments_to(toid, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_COMMENTS_TO');
        let formated_url = util.format(url, toid);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_favorites(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_FAVORITES');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_mentioned(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_MENTIONED');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_network_activity(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_NETWORK_ACTIVITY');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_notifications(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_NOTIFICATIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_unread_notifications(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_UNREAD_NOTIFICATIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_posts(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_POSTS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }
    
    me_privileges(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_PRIVILEGES');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_questions(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_QUESTIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_featured_questions(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_FEATURED_QUESTIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_no_answer_questions(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_NO_ANSWER_QUESTIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_unaccepted_questions(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_ACCEPTED_QUESTIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_unanswered_questions(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_ANSWERED_QUESTIONS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_reputation(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_REPUTATION');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_reputation_history(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_REPUTATION_HISTORY');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_full_reputation_history(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_FULL_REPUTATION_HISTORY');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_suggested_edits(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_SUGGESTED_EDITS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_tags(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_TAGS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_tags_top_answers(tags, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_TAGS_TOP_ANSWERS');
        let formated_url = util.format(url, tags);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_tags_top_questions(tags, options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_TAGS_TOP_QUESTIONS');
        let formated_url = util.format(url, tags);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_timeline(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_TIMELINE');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_top_answer_tags(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_TOP_ANSWER_TAGS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_top_question_tags(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_TOP_QUESTION_TAGS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }
    
    me_top_tags(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_TOP_TAGS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_inbox(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_INBOX');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_unread_inbox(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_UNREAD_INBOX');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_associated_users(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_ASSOCIATED_USERS');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

    me_merge_history(options = {}, callback) {
        let url = helper.getEndpoint(this.version, options, 'ME_MERGE_HISTORY');
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            });
        });
    }

};
