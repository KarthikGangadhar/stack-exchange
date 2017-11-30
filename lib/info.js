'use strict'

const stackExchange = require("./stack_exchange");
const helper = require("../helpers/utils");


module.exports = class Info extends stackExchange {
    constructor() {
        super()
    }

    info(options = {}, callback) {
        let url = helper.getEndpoint(options, "INFO");
        helper.getResponse(url).then((response) => {
            callback(response);
        }).catch((err) => {
            callback({
                'error': err
            })
        })
    }

}