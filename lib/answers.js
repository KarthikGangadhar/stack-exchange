'use strict'
const stackExchange = require('./stack_exchange');

module.exports = class Answer extends stackExchange{

    constructor(so_answer) {
        super()
    }

    vote_count() {
        this.up_vote_count - this.down_vote_count
    }

}