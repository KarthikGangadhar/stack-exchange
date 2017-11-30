'use strict'

const querystring = require("querystring");
const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");
const util = require("util");

module.exports = class Badges extends stackExchange {
    constructor() {
        super()
    }

    badges(options = {}, callback) {
        let url = this.base_url + this.badges_url + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    badge_by_tags(options = {}, callback) {
        let url = this.base_url + this.badges_by_tag_url + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }
    badge_recipients(options = {}, callback) {
        let url = this.base_url + this.badges_recipients_url + this.get_query(options, "badge_recepients");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    badge_recipients_by_id(id, options = {}, callback) {
        let url = this.base_url + util.format(this.badges_recipients_by_id_url, id) + this.get_query(options, "badge_recepients");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    badges_by_id(id, options = {}, callback) {
        let url = this.base_url + util.format(this.badges_by_id_url, id) + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    badges_by_name(name, options = {}, callback) {
        options["inname"] = name || ""
        let url = this.base_url + this.badges_by_name_url + this.get_query(options, "questions");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    get_query(options, method = "") {
        if (method == "badge_recepients") {
            options["site"] = options["site"] || "stackoverflow"
        } else {
            options["site"] = options["site"] || "stackoverflow"
            options["order"] = options["order"] || "desc"
            options["sort"] = options["sort"] || "rank"
        }
        return querystring.stringify(options);;
    }

}