'use strict'

const querystring = require("querystring");
const stackExchange = require("./stack_exchange");
const promise = require("bluebird");
const helper = require("../helpers/utils");

module.exports = class Badges extends stackExchange {
    constructor() {
        super()
    }

    badges(options= {} ,callback) {
        let url = this.base_url + this.info_url + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            return promise.reject({
                'error': err.message
            })
        })
    }

    get_query(options, method = "") {
        options["site"]   = options["site"]  || "stackoverflow"
        return querystring.stringify(options);;
    }

}