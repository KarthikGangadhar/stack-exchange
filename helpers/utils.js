'use strict'

const httpRequest = require("request");
const zlib = require("zlib");
const querystring = require("querystring");
const promise = require("bluebird");
const defaults = require("../config/defaults");
const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;

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

var GetEndpoint = (version, options, calltype) => {
    let url = defaults.endpoints.BASE_URL + version;
    Defaults(options, defaults[calltype])
    return url + defaults.endpoints[calltype] + querystring.stringify(options);
}

var Defaults = (object, ...sources) => {
    object = Object(object);
    sources.forEach((source) => {
        if (source != null) {
            source = Object(source)
            for (const key in source) {
                const value = object[key]
                if (value === undefined ||
                    (Eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
                    object[key] = source[key]
                }
            }
        }
    })
    return object;
}

var Eq = (value, other) => {
    return value === other || (value !== value && other !== other)
  }

module.exports = {
    getResponse: GetResponse,
    getEndpoint: GetEndpoint,
    postResponse: PostResponse
};