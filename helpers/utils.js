'use strict'

const httpRequest = require("request");
const zlib = require("zlib");
const querystring = require("querystring");
const promise = require("bluebird");
const defaults = require("../config/defaults");
const _ = require("lodash");

var GetResponse = (url) => {
    return new Promise(function (resolve, reject) {
        httpRequest.get(url, {
            encoding: null
        }, (err, resp, body) => {
            if (err) {
                reject(err)
            } else {
                if (resp.headers['content-encoding'] == 'gzip') {
                    zlib.gunzip(body, function (err, dezipped) {
                        resolve(dezipped.toString());
                    });
                } else {
                    resolve(body.toString());
                }
            }

        });
    })
};

var PostResponse = (url, body) => {
    return new Promise(function (resolve, reject) {
        httpRequest.post(url, {
            form: body,
            encoding: null
        }, (err, resp, body) => {
            if (err) {
                reject(err)
            } else {
                if (resp.headers['content-encoding'] == 'gzip') {
                    zlib.gunzip(body, function (err, dezipped) {
                        resolve(dezipped.toString());
                    });
                } else {
                    resolve(body.toString());
                }
            }

        });
    })
};

var GetEndpoint = (options, calltype) => {
    let url = defaults.endpoints.BASE_URL
    _.defaults(options, defaults[calltype])
    return url + defaults.endpoints[calltype] + querystring.stringify(options);
}

module.exports = {
    getResponse: GetResponse,
    getEndpoint: GetEndpoint,
    postResponse: PostResponse
};