'use strict'

const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");

module.exports = class Privileges extends stackExchange {
    constructor() {
        super()
    }

    privilages(options = {}, callback) {
        let url = helper.getEndpoint(options, "PRIVILEGES");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

}