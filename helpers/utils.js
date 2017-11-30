'use strict'

const httpRequest = require("request");
const zlib = require("zlib");
const promise = require("bluebird");

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

module.exports = {
    getResponse: GetResponse,
};
