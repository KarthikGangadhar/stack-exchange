'use strict'

const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");
const util = require("util");

module.exports = class Users extends stackExchange {
    constructor() {
        super()
    }

    users(options = {}, callback) {
        let url = helper.getEndpoint(options, "USERS");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    users_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(options, "USERS_BY_IDS");
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    answers_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(options, "ANSWERS_ON_USERS");
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    badges_on_users(ids, options = {}, callback) {
        let url = helper.getEndpoint(options, "BADGES_ON_USERS");
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }    
    // delete_comment(ids, options = {}, callback) {
    //     options["site"] = options["site"] || "stackoverflow";
    //     let url = helper.getEndpoint({}, "DELETE_COMMENT");
    //     let formated_url = util.format(url, ids);
    //     helper.postResponse(formated_url, options).then((response) => {
    //         callback(response);
    //     }).catch((err) => {
    //         callback({
    //             'error': err
    //         })
    //     })
    // }

    // edit_comment(ids, options = {}, callback) {
    //     options["site"] = options["site"] || "stackoverflow";
    //     let url = helper.getEndpoint({}, "EDIT_COMMENT");
    //     let formated_url = util.format(url, ids);
    //     helper.postResponse(formated_url, options).then((response) => {
    //         callback(response);
    //     }).catch((err) => {
    //         callback({
    //             'error': err
    //         })
    //     })
    // }

    // create_comment_flag(ids, options = {}, callback) {
    //     options["site"] = options["site"] || "stackoverflow";
    //     let url = helper.getEndpoint({}, "CREATE_COMMENT_FLAG");
    //     let formated_url = util.format(url, ids);
    //     helper.postResponse(formated_url, options).then((response) => {
    //         callback(response);
    //     }).catch((err) => {
    //         callback({
    //             'error': err
    //         })
    //     })
    // }

    // comment_flag_options(ids, options = {}, callback) {
    //     let url = helper.getEndpoint(options, "COMMENTS_FLAG_OPTIONS");
    //     let formated_url = util.format(url, ids);
    //     helper.getResponse(formated_url).then((response) => {
    //         callback(response);
    //     }).catch((err) => {
    //         callback({
    //             'error': err
    //         })
    //     })
    // }

    // upvote_comment(ids, options = {}, callback) {
    //     options["site"] = options["site"] || "stackoverflow";
    //     let url = helper.getEndpoint({}, "UPVOTE_COMMENT");
    //     let formated_url = util.format(url, ids);
    //     helper.postResponse(formated_url, options).then((response) => {
    //         callback(response);
    //     }).catch((err) => {
    //         callback({
    //             'error': err
    //         })
    //     })
    // }

    // undo_upvote_comment(ids, options = {}, callback) {
    //     options["site"] = options["site"] || "stackoverflow";
    //     let url = helper.getEndpoint({}, "UNDO_UPVOTE_COMMENT");
    //     let formated_url = util.format(url, ids);
    //     helper.postResponse(formated_url, options).then((response) => {
    //         callback(response);
    //     }).catch((err) => {
    //         callback({
    //             'error': err
    //         })
    //     })
    // }

}