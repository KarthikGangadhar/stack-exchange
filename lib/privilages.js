'use strict'

const querystring = require("querystring");
const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");

module.exports = class Privileges extends stackExchange {
    constructor() {
        super()
    }

    privilages(options = {}, callback) {
        let url = this.base_url + this.privileges_url + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    get_query(options, method = "") {
        options["site"] = options["site"] || "stackoverflow"
        return querystring.stringify(options);;
    }

}