const core = require('gls-core-service');
const BasicService = core.services.Basic;

class TradeLoop extends BasicService {
    constructor(config) {
        super();

        this._config = config;
    }

    async start() {
        // TODO -
    }
}

module.exports = TradeLoop;
