'use strict';
// Dependencies
const stack_exchange = require('../server.js');
const assert = require('assert');
const version = {
    version: '2.2'
};

const stack_me = stack_exchange(version).me;
let options = {
    'access_token': 'DFcw0pTAzfDhrw1KXOjHKQ))',
    'key': 'U4DMV*8nvpm3EOpvf69Rxw(('
};

// Holder of all tests
const _app = {};
_app.tests = {
    'unit': {}
};

// 1. Assert that the me method is returning a object
_app.tests.unit['stack_me.me should return a object with status 200'] = (done) => {
    stack_me.me(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 2. Assert that the me_answers method is returning a object
_app.tests.unit['stack_me.me_answers should return a object with status 200'] = (done) => {
    stack_me.me_answers(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 3. Assert that the me_badges method is returning a object
_app.tests.unit['stack_me.me_badges should return a object with status 200'] = (done) => {
    stack_me.me_badges(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 4. Assert that the me_comments method is returning a object
_app.tests.unit['stack_me.me_comments should return a object with status 200'] = (done) => {
    stack_me.me_comments(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};


// 5. Assert that the me_comments_to method is returning a object
_app.tests.unit['stack_me.me_comments_to should return a object with status 200'] = (done) => {
    let toid = 1427878;
    stack_me.me_comments_to(toid, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 6. Assert that the me_favorites method is returning a object
_app.tests.unit['stack_me.me_favorites should return a object with status 200'] = (done) => {
    stack_me.me_favorites(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 7. Assert that the me_mentioned method is returning a object
_app.tests.unit['stack_me.me_mentioned should return a object with status 200'] = (done) => {
    stack_me.me_mentioned(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 8. Assert that the me_network_activity method is returning a object
_app.tests.unit['stack_me.me_network_activity should return a object with status 200'] = (done) => {
    stack_me.me_network_activity(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 9. Assert that the me_notifications method is returning a object
_app.tests.unit['stack_me.me_notifications should return a object with status 200'] = (done) => {
    stack_me.me_notifications(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        // assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 10. Assert that the me_unread_notifications method is returning a object
_app.tests.unit['stack_me.me_unread_notifications should return a object with status 200'] = (done) => {
    stack_me.me_unread_notifications(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        // assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 11. Assert that the me_posts method is returning a object
_app.tests.unit['stack_me.me_posts should return a object with status 200'] = (done) => {
    stack_me.me_posts(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 12. Assert that the me_privileges method is returning a object
_app.tests.unit['stack_me.me_privileges should return a object with status 200'] = (done) => {
    stack_me.me_privileges(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 13. Assert that the me_questions method is returning a object
_app.tests.unit['stack_me.me_questions should return a object with status 200'] = (done) => {
    stack_me.me_questions(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 14. Assert that the me_featured_questions method is returning a object
_app.tests.unit['stack_me.me_featured_questions should return a object with status 200'] = (done) => {
    stack_me.me_featured_questions(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 15. Assert that the me_no_answer_questions method is returning a object
_app.tests.unit['stack_me.me_no_answer_questions should return a object with status 200'] = (done) => {
    stack_me.me_no_answer_questions(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 16. Assert that the me_unaccepted_questions method is returning a object
_app.tests.unit['stack_me.me_unaccepted_questions should return a object with status 200'] = (done) => {
    stack_me.me_unaccepted_questions(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 17. Assert that the me_unanswered_questions method is returning a object
_app.tests.unit['stack_me.me_unanswered_questions should return a object with status 200'] = (done) => {
    stack_me.me_unanswered_questions(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 18. Assert that the me_reputation method is returning a object
_app.tests.unit['stack_me.me_reputation should return a object with status 200'] = (done) => {
    stack_me.me_reputation(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 19. Assert that the me_reputation_history method is returning a object
_app.tests.unit['stack_me.me_reputation_history should return a object with status 200'] = (done) => {
    stack_me.me_reputation_history(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 20. Assert that the me_full_reputation_history method is returning a object
_app.tests.unit['stack_me.me_full_reputation_history should return a object with status 200'] = (done) => {
    stack_me.me_full_reputation_history(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 21. Assert that the me_suggested_edits method is returning a object
_app.tests.unit['stack_me.me_suggested_edits should return a object with status 200'] = (done) => {
    stack_me.me_suggested_edits(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};


// 22. Assert that the me_tags method is returning a object
_app.tests.unit['stack_me.me_tags should return a object with status 200'] = (done) => {
    stack_me.me_tags(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 23. Assert that the me_tags_top_questions method is returning a object
_app.tests.unit['stack_me.me_tags_top_questions should return a object with status 200'] = (done) => {
    let tags = 'nodejs';
    stack_me.me_tags_top_questions(tags, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 24. Assert that the me_tags_top_answers method is returning a object
_app.tests.unit['stack_me.me_tags_top_answers should return a object with status 200'] = (done) => {
    let tags = 'nodejs';
    stack_me.me_tags_top_answers(tags, options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 25. Assert that the me_top_answer_tags method is returning a object
_app.tests.unit['stack_me.me_top_answer_tags should return a object with status 200'] = (done) => {
    stack_me.me_top_answer_tags(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 26. Assert that the me_top_question_tags method is returning a object
_app.tests.unit['stack_me.me_top_question_tags should return a object with status 200'] = (done) => {
    stack_me.me_top_question_tags(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 27. Assert that the me_timeline method is returning a object
_app.tests.unit['stack_me.me_timeline should return a object with status 200'] = (done) => {
    stack_me.me_timeline(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 28. Assert that the me_top_tags method is returning a object
_app.tests.unit['stack_me.me_top_tags should return a object with status 200'] = (done) => {
    stack_me.me_top_tags(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 29. Assert that the me_inbox method is returning a object
_app.tests.unit['stack_me.me_inbox should return a object with status 200'] = (done) => {
    stack_me.me_inbox(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        // assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 30. Assert that the me_unread_inbox method is returning a object
_app.tests.unit['stack_me.me_unread_inbox should return a object with status 200'] = (done) => {
    stack_me.me_unread_inbox(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        // assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 31. Assert that the me_associated_users method is returning a object
_app.tests.unit['stack_me.me_associated_users should return a object with status 200'] = (done) => {
    stack_me.me_associated_users(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        // assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

// 32. Assert that the me_merge_history method is returning a object
_app.tests.unit['stack_me.me_merge_history should return a object with status 200'] = (done) => {
    stack_me.me_merge_history(options, response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(typeof (response.items) && response.items instanceof Array, true);
        done();
    });
};

module.exports = _app.tests.unit;

