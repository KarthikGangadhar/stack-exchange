'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const assert = require('assert');
const version = {
    version: '2.2'
};

const stack_revisions = stack_exchange(version).revisions;
let options = {
    'site': 'stackoverflow',
    'access_token': 'DFcw0pTAzfDhrw1KXOjHKQ))',
    'key': 'U4DMV*8nvpm3EOpvf69Rxw(('
};

// Holder of all tests
const _app = {};
_app.tests = {
    'unit': {}
};

// 1. Assert that the badges method is returning a object
_app.tests.unit['stack_revisions.revisions should return a object with status 200'] = (done) => {
    let ids = "BCF73AEC-7F9D-4623-8C38-66E481B52513"
    stack_revisions.revisions(ids, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

module.exports = _app.tests.unit;