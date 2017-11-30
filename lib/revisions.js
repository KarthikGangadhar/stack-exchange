'use strict'

const querystring = require("querystring");
const stackExchange = require("./stack_exchange");
const util = require("util");
const helper = require("../helpers/utils");


module.exports = class Info extends stackExchange {
    constructor() {
        super()
    }

    revisions(ids, options = {}, callback) {
        let url = this.base_url + util.format(this.revisions_url, ids) + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            return reject({
                'error': err.message
            })
        })
    }

    get_query(options, method = "") {
        options["site"] = options["site"] || "stackoverflow"
        return querystring.stringify(options);;
    }

}