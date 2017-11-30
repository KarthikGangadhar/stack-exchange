'use strict'

module.exports = class StackExchange {
    constructor() {
        this.base_url = "https://api.stackexchange.com",
            this.events_url = "/2.2/events?",
            this.questions_url = "/2.2/questions?",
            this.questions_by_id_url = "/2.2/questions/%s?",
            this.info_url = "/2.2/info?",
            this.privileges_url = "/2.2/privileges?",
            this.revisions_url = "/2.2/revisions/%s?",
            this.badges_url = "/2.2/badges?",
            this.badges_by_id_url = "/2.2/badges/%s?",
            this.badges_by_name_url = "/2.2/badges/name?",
            this.badges_recipients_url = "/2.2/badges/recipients?",
            this.badges_recipients_by_id_url = "/2.2/badges/%s/recipients?",
            this.badges_by_tag_url = "/2.2/badges/tags?",
            this.tags_url = "/2.2/tags?"
    }

}