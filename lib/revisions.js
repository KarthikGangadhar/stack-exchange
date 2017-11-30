'use strict'

const querystring = require("querystring");
const httpRequest = require("request");
const stackExchange = require("./stack_exchange");
const zlib = require("zlib");
const util = require("util");


module.exports = class Info extends stackExchange {
    constructor() {
        super()
    }

    revisions(ids, options= {} ,callback) {
        let url = this.base_url + util.format(this.revisions_url, ids) + this.get_query(options, "questions");
        httpRequest.get(url, {
            encoding: null
        }, (err, resp, body) => {
            if (resp.headers['content-encoding'] == 'gzip') {
                zlib.gunzip(body, function (err, dezipped) {
                    callback(dezipped.toString());
                });
            } else {
                callback(body.toString());
            }

        });
    }

    get_query(options, method = "") {
        options["site"]   = options["site"]  || "stackoverflow"
        return querystring.stringify(options);;
    }

}