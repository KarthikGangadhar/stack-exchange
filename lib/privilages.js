'use strict'

const querystring = require("querystring");
const httpRequest = require("request");
const stackExchange = require("./stack_exchange");
const zlib = require("zlib");

module.exports = class Privileges extends stackExchange {
    constructor() {
        super()
    }

    privilages(options= {} ,callback) {
        let url = this.base_url + this.privileges_url + this.get_query(options, "questions");
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
        options["site"]   = options["site"]  || "stackoverflow"
        return querystring.stringify(options);;
    }

}