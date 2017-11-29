'use strict'

module.exports = class Question {
    constructor(so_question) {
        this.id = so_question["question_id"]
        this.answer_count = so_question["answer_count"]
        this.accepted_answer_id = so_question["accepted_answer_id"]
        this.favorite_count = so_question["favorite_count"]
        this.timeline_url = so_question["question_timeline_url"]
        this.comments_url = so_question["question_comments_url"]
        this.answers_url = so_question["question_answers_url"]
        // this.creation_date = Time.at(so_question["creation_date"]) if so_question["creation_date"]
        // this.last_edit_date = Time.at(so_question["last_edit_date"]) if so_question["last_edit_date"]
        // this.last_activity_date = Time.at(so_question["last_activity_date"]) if so_question["last_activity_date"]
        // this.up_vote_count = so_question["up_vote_count"]
        this.down_vote_count = so_question["down_vote_count"]
        this.view_count = so_question["view_count"]
        this.score = so_question["score"]
        this.community_owned = so_question["community_owned"]
        this.title = so_question["title"]
    }

    vote_count(){
        this.up_vote_count - this.down_vote_count
    }

}