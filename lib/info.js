'use strict'

const querystring = require("querystring");
const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");
const promise = require("bluebird");

module.exports = class Info extends stackExchange {
    constructor() {
        super()
    }

    info(options= {} ,callback) {
        let url = this.base_url + this.info_url + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    get_query(options, method = "") {
        options["site"]   = options["site"]  || "stackoverflow"
        return querystring.stringify(options);;
    }

}