'use strict'

const querystring = require("querystring");
const httpRequest = require("request");
const zlib = require("zlib");
const util = require("util");

module.exports = class Question {
    constructor() {
        this.URL = "https://api.stackexchange.com/2.2/"
    }

    questions(options= {} ,callback) {
        let url = this.URL + "questions?" + this.get_query(options, "questions");
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
        let url = this.URL + util.format("questions/%s?", ids)  + this.get_query(options, "questions_by_ids");
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