'use strict'

const questions = require("./lib/questions");
const answers = require("./lib/answers");
const events = require("./lib/events");
const info = require("./lib/info");
const privilages = require("./lib/privilages");
const revisions = require("./lib/revisions");
const badges = require("./lib/badges");
const tags = require("./lib/tags");
const posts = require("./lib/posts");
const search = require("./lib/search");
const suggested_edits = require("./lib/suggested_edits");
const users = require("./lib/users");
const comments = require("./lib/comments");

module.exports = {
    questions: questions,
    answers: answers,
    events: events,
    info: info,
    privilages: privilages,
    revisions: revisions,
    badges: badges,
    tags: tags,
    posts: posts,
    search: search,
    suggested_edits: suggested_edits,
    users: users,
    comments: comments
};