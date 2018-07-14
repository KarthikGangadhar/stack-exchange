'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const config = require('./config/config.json');
const assert = require('assert');
const version = {
    version: '2.2'
};

const suggested_edits = stack_exchange(version).suggested_edits;
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

// 1. Assert that the suggested_edits method is returning a object
_app.tests.unit['suggested_edits.suggested_edits should return a object with status 200'] = (done) => {
    suggested_edits.suggested_edits(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 2. Assert that the suggested_edits_by_ids method is returning a object
_app.tests.unit['suggested_edits.suggested_edits_by_ids should return a object with status 200'] = (done) => {
    let suggested_edit_id = '3445738';
    suggested_edits.suggested_edits_by_ids(suggested_edit_id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

module.exports = _app.tests.unit;
