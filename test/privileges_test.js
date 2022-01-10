'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const config = require('./config/config.json');
const assert = require('assert');
const version = {
    version: '2.2'
};

const stack_privileges = stack_exchange(version).privileges;
let options = {
    'site': config.site,
    'access_token': config.access_token,
    'key': config.key
};

// Holder of all tests
const _app = {};
_app.tests = {
    'unit': {}
};

// 1. Assert that the privileges method is returning a object
_app.tests.unit['stack_privileges.privileges should return a object with status 200'] = (done) => {
    stack_privileges.privileges(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof(response), 'object');
        assert.equal(typeof(response.items) && response.items instanceof Array, true);
        done();
    });
};

module.exports = _app.tests.unit;