'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const assert = require('assert');
const version = {
    version: '2.2'
};

const stack_badges = stack_exchange(version).badges;
let options = {
    'site': 'stackoverflow',
    "access_token": "DFcw0pTAzfDhrw1KXOjHKQ))",
    "key":"U4DMV*8nvpm3EOpvf69Rxw(("
};

// Holder of all tests
const _app = {};
_app.tests = {
    'unit': {}
};

// 1. Assert that the badges method is returning a object
_app.tests.unit['stack_badges.badges should return a object with status 200'] = (done) => {
    stack_badges.badges(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 2. Assert that the badges_by_id method is returning a object
_app.tests.unit['stack_badges.badges_by_id should return a object with status 200'] = (done) => {
    let id = '222';
    stack_badges.badges_by_id(id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 3. Assert that the badges method is returning a object
_app.tests.unit['stack_badges.badges_by_name should return a object with status 200'] = (done) => {
    let name = 'fanatic';
    stack_badges.badges_by_name(name, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 4. Assert that the badge_recipients method is returning a object
_app.tests.unit['stack_badges.badge_recipients should return a object with status 200'] = (done) => {
    stack_badges.badge_recipients(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 5. Assert that the badge_recipients_by_id method is returning a object
_app.tests.unit['stack_badges.badge_recipients_by_id should return a object with status 200'] = (done) => {
    let id = '222';
    stack_badges.badge_recipients_by_id(id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 6. Assert that the badge_by_tags method is returning a object
_app.tests.unit['stack_badges.badge_by_tags should return a object with status 200'] = (done) => {
    stack_badges.badge_by_tags(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

module.exports = _app.tests.unit;
