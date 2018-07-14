'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const config = require('./config/config.json');
const assert = require('assert');
const version = {
    version: '2.2'
};

const stack_questions = stack_exchange(version).questions;
let options = {
    'order': 'desc',
    'sort': 'activity',
    'site': config.site,
    'access_token': config.access_token,
    'key': config.key
};

// Holder of all tests
const _app = {};
_app.tests = {
    'unit': {}
};

// 1. Assert that the questions method is returning a object
_app.tests.unit['stack_questions.questions should return a object with status 200'] = (done) => {
    stack_questions.questions(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};


// 2. Assert that the questions method is returning a object
_app.tests.unit['stack_questions.questions_by_ids should return a object with status 200'] = (done) => {
    let ids = '49752913';
    stack_questions.questions_by_ids(ids, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 3. Assert that the answers_on_questions method is returning a object
_app.tests.unit['stack_questions.answers_on_questions should return a object with status 200'] = (done) => {
    let id = 50253534;
    stack_questions.answers_on_questions(id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 3. Assert that the render_answer method is returning a object
_app.tests.unit['stack_questions.render_answer should return a object with status 200'] = (done) => {
    let id = '47596027';
    let options = {
        'body': 'hello',
        'site': 'stackoverflow'
    };

    stack_questions.render_answer(id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

//  4. Assert that the linked_questions method is returning a object
_app.tests.unit['stack_questions.linked_questions should return a object with status 200'] = (done) => {
    let id = 1884724;
    stack_questions.linked_questions(id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 5. Assert that the related_questions method is returning a object
_app.tests.unit['stack_questions.related_questions should return a object with status 200'] = (done) => {
    let id = '37878662';
    stack_questions.related_questions(id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 6. Assert that the questions_timeline method is returning a object
_app.tests.unit['stack_questions.questions_timeline should return a object with status 200'] = (done) => {
    let id = '37878662';
    stack_questions.questions_timeline(id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 7. Assert that the featured_questions method is returning a object
_app.tests.unit['stack_questions.featured_questions should return a object with status 200'] = (done) => {
    stack_questions.featured_questions(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 8. Assert that the no_answer_questions method is returning a object
_app.tests.unit['stack_questions.no_answer_questions should return a object with status 200'] = (done) => {
    stack_questions.no_answer_questions(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 9. Assert that the unanswered_questions method is returning a object
_app.tests.unit['stack_questions.unanswered_questions should return a object with status 200'] = (done) => {
    stack_questions.unanswered_questions(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 10. Assert that the unanswered_questions_my_tags method is returning a object
_app.tests.unit['stack_questions.unanswered_questions_my_tags should return a object with status 200'] = (done) => {
    stack_questions.unanswered_questions_my_tags(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        // assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 11. Assert that the question_flag_options method is returning a object
_app.tests.unit['stack_questions.question_flag_options should return a object with status 200'] = (done) => {
    let question_id = '37878662';
    stack_questions.question_flag_options(question_id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        // assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 12. Assert that the question_close_options method is returning a object
_app.tests.unit['stack_questions.question_close_options should return a object with status 200'] = (done) => {
    let question_id = '37878662';
    stack_questions.question_close_options(question_id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        // assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// // 13. Assert that the comments_on_questions method is returning a object
_app.tests.unit['stack_questions.comments_on_questions should return a object with status 200'] = (done) => {
    let question_id = '45934757';
    stack_questions.comments_on_questions(question_id, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        // assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

module.exports = _app.tests.unit;
