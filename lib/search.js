'use strict'

const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");

module.exports = class Search extends stackExchange {
    constructor() {
        super()
    }

    search(options = {}, callback) {
        let url = helper.getEndpoint(options, "SEARCH");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    advanced_search( options = {}, callback) {
        let url = helper.getEndpoint(options, "ADVANCED_SEARCH");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

    similar( options = {}, callback) {
        let url = helper.getEndpoint(options, "SIMILAR");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }   

    excerpt_search( options = {}, callback) {
        let url = helper.getEndpoint(options, "EXCERPT_SEARCH");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }   
 
}