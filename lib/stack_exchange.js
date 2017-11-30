'use strict'

module.exports = class StackExchange {
    constructor() {
        this.base_url = "https://api.stackexchange.com",
        this.events_url = "/2.2/events?",
        this.questions_url = "/2.2/questions?",
        this.questions_by_id_url = "2.2/questions/%s?",
        this.info_url  = "/2.2/info?",
        this.privileges_url  = "/2.2/privileges?"
        this.revisions_url = "/2.2/revisions/%s?"
    }

}