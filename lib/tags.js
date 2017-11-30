'use strict'

const querystring = require("querystring");
const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");

module.exports = class Tags extends stackExchange {
    constructor() {
        super()
    }

    tags(options = {}, callback) {
        let url = this.base_url + this.tags_url + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    get_query(options, method = "") {
        options["order"] = options["order"] || "desc"
        options["sort"] = options["sort"] || "popular"
        options["site"] = options["site"] || "stackoverflow"
        return querystring.stringify(options);;
    }

}