'use strict'

const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");
const util = require("util");

module.exports = class Answers extends stackExchange {
    constructor() {
        super()
    }

    answers(options = {}, callback) {
        let url = helper.getEndpoint(options, "ANSWERS");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    answers_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(options, "ANSWERS_BY_IDS");
        let format_url = util.format(url, ids);
        helper.getResponse(format_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    accept_answer(ids, options = {}, callback) {
        let url = helper.getEndpoint({}, "ACCEPT_ANSWER");
        let formated_url = util.format(url, ids);
        options["site"] = options["site"] || "stackoverflow";
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    undo_accept_answer(ids, options = {}, callback) {
        let url = helper.getEndpoint({}, "UNDO_ACCEPT_ANSWER");
        let formated_url = util.format(url, ids);
        options["site"] = options["site"] || "stackoverflow";
        helper.postResponse(formated_url, options).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }
}