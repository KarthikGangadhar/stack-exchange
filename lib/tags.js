'use strict'

const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");

module.exports = class Tags extends stackExchange {
    constructor() {
        super()
    }

    tags(options = {}, callback) {
        let url = helper.getEndpoint(options, "TAGS");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

}