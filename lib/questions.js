'use strict'

const stackExchange = require("./stack_exchange");
const util = require("util");
const helper = require("../helpers/utils");

module.exports = class Question extends stackExchange {
    constructor() {
        super()
    }

    questions(options = {}, callback) {
        let url = helper.getEndpoint(options, "QUESTIONS");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    questions_by_ids(ids, options = {}, callback) {
        let url = helper.getEndpoint(options, "QUESTIONS_BY_ID");
        let formated_url = util.format(url, ids);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

}