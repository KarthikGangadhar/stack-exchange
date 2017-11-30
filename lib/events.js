'use strict'

const querystring = require("querystring");
const stackExchange = require("./stack_exchange");
const promise  = require("bluebird");
const helper = require("../helpers/utils");  

module.exports = class Events extends stackExchange {
    constructor() {
        super()
    }

    events(options= {} ,callback) {
        let url = this.base_url + this.events_url + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    get_query(options, method = "") {
        options["filter"] = "default",
        options["site"]   = options["site"]  || "stackoverflow"
        return querystring.stringify(options);;
    }

}