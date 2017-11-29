'use strict'

module.exports = class Answer {

    constructor(so_answer) {
        this.head = null;
        this.id = so_answer["answer_id"]
        this.title = so_answer["title"]
        this.accepted = so_answer["accepted"]
        this.comments_url = so_answer["answer_comments_url"]
        this.question_id = so_answer["question_id"]
        // this.creation_date = Time.at(so_answer["creation_date"]) if so_answer["creation_date"]
        // this.last_activity_date = Time.at(so_answer["last_activity_date"]) if so_answer["last_activity_date"]
        // this.up_vote_count = so_answer["up_vote_count"]
        this.down_vote_count = so_answer["down_vote_count"]
        this.view_count = so_answer["view_count"]
        this.score = so_answer["score"]
        this.community_owned = so_answer["community_owned"]
    }

    vote_count() {
        this.up_vote_count - this.down_vote_count
    }

}