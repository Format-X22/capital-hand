const core = require('gls-core-service');
const BasicService = core.services.Basic;

class TradeLoop extends BasicService {
    constructor({ type, edge, price }) {
        super();

        this._type = type;
        this._edge = edge;
        this._price = price;
    }

    async start() {
        // TODO -
    }
}

module.exports = TradeLoop;
