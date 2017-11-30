'use strict'

const querystring = require("querystring");
const stackExchange = require("./stack_exchange");
const util = require("util");
const helper = require("../helpers/utils");

module.exports = class Question extends stackExchange {
    constructor() {
        super()
    }

    questions(options = {}, callback) {
        let url = this.base_url + this.questions_url + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    questions_by_ids(ids, options = {}, callback) {
        let url = this.base_url + util.format(this.questions_by_id_url, ids) + this.get_query(options, "questions_by_ids");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    get_query(options, method = "") {
        if (method == "questions") {
            options["order"] = options["order"] || "desc",
                options["sort"] = options["sort"] || "activity",
                options["site"] = options["site"] || "stackoverflow"
        } else if (method == "questions_by_ids") {
            options["order"] = options["order"] || "desc",
                options["sort"] = options["sort"] || "activity",
                options["site"] = options["site"] || "stackoverflow"
        }
        return querystring.stringify(options);;
    }

}