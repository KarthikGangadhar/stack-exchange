'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const assert = require('assert');
const version = {
    version: '2.2'
};

const stack_privileges = stack_exchange(version).privilages;
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

// 1. Assert that the privilages method is returning a object
_app.tests.unit['stack_privileges.privilages should return a object with status 200'] = (done) => {
    stack_privileges.privilages(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

module.exports = _app.tests.unit;
