'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const assert = require('assert');
const version = {
    version: '2.2'
};

const stack_tags = stack_exchange(version).tags;
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

// 1. Assert that the tags method is returning a object
_app.tests.unit['stack_tags.tags should return a object with status 200'] = (done) => {
    stack_tags.tags(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 2. Assert that the tags_by_name method is returning a object
_app.tests.unit['stack_tags.tags_by_name should return a object with status 200'] = (done) => {
    let tag_name = 'nodejs';
    stack_tags.tags_by_name(tag_name, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 3. Assert that the moderator_only_tags method is returning a object
_app.tests.unit['stack_tags.moderator_only_tags should return a object with status 200'] = (done) => {
    stack_tags.moderator_only_tags(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 4. Assert that the require_tags method is returning a object
_app.tests.unit['stack_tags.require_tags should return a object with status 200'] = (done) => {
    stack_tags.require_tags(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 5. Assert that the tag_synonyms method is returning a object
_app.tests.unit['stack_tags.tag_synonyms should return a object with status 200'] = (done) => {
    stack_tags.tag_synonyms(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 6. Assert that the faqs_by_tags method is returning a object
_app.tests.unit['stack_tags.faqs_by_tags should return a object with status 200'] = (done) => {
    let tag_name = 'nodejs';
    stack_tags.faqs_by_tags(tag_name, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 7. Assert that the related_tags method is returning a object
_app.tests.unit['stack_tags.related_tags should return a object with status 200'] = (done) => {
    let tag_name = 'nodejs';
    stack_tags.related_tags(tag_name, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 8. Assert that the synonyms_by_tags method is returning a object
_app.tests.unit['stack_tags.synonyms_by_tags should return a object with status 200'] = (done) => {
    let tag_name = 'nodejs';
    stack_tags.synonyms_by_tags(tag_name, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 9. Assert that the top_answerers_on_tags method is returning a object
_app.tests.unit['stack_tags.top_answerers_on_tags should return a object with status 200'] = (done) => {
    let tag_name = 'java';
    stack_tags.top_answerers_on_tags(tag_name, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 10. Assert that the top_askers_on_tags method is returning a object
_app.tests.unit['stack_tags.top_askers_on_tags should return a object with status 200'] = (done) => {
    let tag_name = 'java';
    stack_tags.top_askers_on_tags(tag_name, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 11. Assert that the wikis_by_tags method is returning a object
_app.tests.unit['stack_tags.wikis_by_tags should return a object with status 200'] = (done) => {
    let tag_name = 'java';
    stack_tags.wikis_by_tags(tag_name, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};
 
module.exports = _app.tests.unit;
