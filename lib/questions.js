'use strict'

const querystring = require("querystring");
const httpRequest = require("request");
const stackExchange = require("./stack_exchange");
const zlib = require("zlib");
const util = require("util");

module.exports = class Question extends stackExchange {
    constructor() {
        super()
    }

    questions(options= {} ,callback) {
        let url = this.base_url + this.questions_url + this.get_query(options, "questions");
        httpRequest.get(url, {
            encoding: null
        }, (err, resp, body) => {
            if (resp.headers['content-encoding'] == 'gzip') {
                zlib.gunzip(body, function (err, dezipped) {
                    callback(dezipped.toString());
                });
            } else {
                callback(body);
            }

        });
    }

    questions_by_ids(options= {}, ids, callback) {
        let url = this.base_url + util.format(this.questions_by_id_url, ids)  + this.get_query(options, "questions_by_ids");
        httpRequest.get(url, {
            encoding: null
        }, (err, resp, body) => {
            if (resp.headers['content-encoding'] == 'gzip') {
                zlib.gunzip(body, function (err, dezipped) {
                    callback(dezipped.toString());
                });
            } else {
                callback(body);
            }

        });
    }

    get_query(options, method = "") {
        if (method == "questions") {
            options["order"]  = options["order"] || "desc",
            options["sort"]   = options["sort"]  || "activity",
            options["site"]   = options["site"]  || "stackoverflow"
        } else if (method == "questions_by_ids") {
            options["order"]  = options["order"] || "desc",
            options["sort"]   = options["sort"]  || "activity",
            options["site"]   = options["site"]  || "stackoverflow"
        }
        return querystring.stringify(options);;
    }

}