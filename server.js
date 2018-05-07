'use strict';

const questions = require('./lib/questions');
const answers = require('./lib/answers');
const events = require('./lib/events');
const info = require('./lib/info');
const privilages = require('./lib/privilages');
const revisions = require('./lib/revisions');
const badges = require('./lib/badges');
const tags = require('./lib/tags');
const posts = require('./lib/posts');
const search = require('./lib/search');
const suggested_edits = require('./lib/suggested_edits');
const users = require('./lib/users');
const comments = require('./lib/comments');
const me = require('./lib/me');
const network = require('./lib/network');

module.exports = (options) => {
    let version = '2.2';
    if (options && options.version && !isNaN(options.version)) {
        version = options.version;
    }
    return {
        questions: new questions(version),
        answers: new answers(version),
        events: new events(version),
        info: new info(version),
        privilages: new privilages(version),
        revisions: new revisions(version),
        badges: new badges(version),
        tags: new tags(version),
        posts: new posts(version),
        search: new search(version),
        suggested_edits: new suggested_edits(version),
        users: new users(version),
        comments: new comments(version),
        me: new me(version),
        network: new network(version)
    };
};
