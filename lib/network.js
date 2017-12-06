'use strict'

const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");
const util = require("util");

module.exports = class Network extends stackExchange {
    constructor() {
        super()
    }

    invalidate_access_tokens( options = {}, callback) {
        let access_token = options["access_token"] || ""
        let url = helper.getEndpoint(options, "INVALIDATE_ACCESS_TOKENS");
        let formated_url = util.format(url, access_token);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    invalidate_access_tokens(access_token, options = {}, callback) {
        let url = helper.getEndpoint({}, "INVALIDATE_ACCESS_TOKENS");
        let formated_url = util.format(url, access_token);
        helper.getResponse(formated_url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

}