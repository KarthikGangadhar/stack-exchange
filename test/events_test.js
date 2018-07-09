'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const assert = require('assert');
const version = {
    version: '2.2'
};

const stack_events = stack_exchange(version).events;
let options = {
    'site': 'stackoverflow',
    'access_token': 'DFcw0pTAzfDhrw1KXOjHKQ))',
    'key':'U4DMV*8nvpm3EOpvf69Rxw(('
};

// Holder of all tests
const _app = {};
_app.tests = {
    'unit': {}
};

// 1. Assert that the events method is returning a object
_app.tests.unit['stack_events.events should return a object with status 200'] = (done) => {
    stack_events.events(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

module.exports = _app.tests.unit;
