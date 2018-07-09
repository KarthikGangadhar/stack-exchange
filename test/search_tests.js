'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const assert = require('assert');
const version = {
    version: '2.2'
};

const stack_search = stack_exchange(version).search;
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

// 1. Assert that the search method is returning a object
_app.tests.unit['stack_search.search should return a object with status 200'] = (done) => {
    let search_options = {
        'tagged': 'nodejs',
        'access_token': 'DFcw0pTAzfDhrw1KXOjHKQ))',
        'key': 'U4DMV*8nvpm3EOpvf69Rxw(('
    };
    stack_search.search(search_options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 2. Assert that the advanced_search method is returning a object
_app.tests.unit['stack_search.advanced_search should return a object with status 200'] = (done) => {
    stack_search.advanced_search(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 3. Assert that the excerpt_search method is returning a object
_app.tests.unit['stack_search.excerpt_search should return a object with status 200'] = (done) => {
    stack_search.excerpt_search(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 4. Assert that the similar method is returning a object
_app.tests.unit['stack_search.similar should return a object with status 200'] = (done) => {
    let search_options = {
        'title': 'npm install error',
        'access_token': 'DFcw0pTAzfDhrw1KXOjHKQ))',
        'key': 'U4DMV*8nvpm3EOpvf69Rxw(('
    };
    stack_search.similar(search_options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

module.exports = _app.tests.unit;
