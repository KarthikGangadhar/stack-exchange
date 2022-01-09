'use strict';

const httpRequest = require('../helpers/request_helper');
const zlib = require('zlib');
const querystring = require('querystring');
const defaults = require('../config/defaults');
const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;

const GetResponse = (url) => {
    return new Promise((resolve, reject) => {
        httpRequest.get(url, {
            encoding: null
        }, (err, resp, body) => {
            if (err) {
                reject(err);
            } else {
                if (resp.headers['content-encoding'] === 'gzip') {
                    zlib.gunzip(body, (err, dezipped) => {
                        resolve(dezipped.toString());
                    });
                } else {
                    resolve(body.toString());
                }
            }

        });
    });
};

const PostResponse = (url, body) => {
    return new Promise((resolve, reject) => {
        httpRequest.post(url, {
            form: body,
            encoding: null
        }, (err, resp, body) => {
            if (err) {
                reject(err);
            } else {
                if (resp.headers['content-encoding'] === 'gzip') {
                    zlib.gunzip(body, (err, dezipped) => {
                        resolve(dezipped.toString());
                    });
                } else {
                    resolve(body.toString());
                }
            }

        });
    });
};

const Eq = (value, other) => {
    return value === other || (value !== value && other !== other);
};

const Defaults = (object, ...sources) => {
    object = Object(object);
    sources.forEach((source) => {
        if (source !== null) {
            source = Object(source);
            for (let key in source) {
                let value = object[key];
                if (value === undefined ||
                    (Eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
                    object[key] = source[key];
                }
            }
        }
    });
    return object;
};

const GetEndpoint = (version, options, callType) => {
    let url = `${defaults.endpoints.BASE_URL}${version}`;
    Defaults(options, defaults[callType]);
    return `${url}${defaults.endpoints[callType]}${querystring.stringify(options)}`;
};

module.exports = {
    getResponse: GetResponse,
    getEndpoint: GetEndpoint,
    postResponse: PostResponse
};