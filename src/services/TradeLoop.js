const core = require('gls-core-service');
const BasicService = core.services.Basic;

class TradeLoop extends BasicService {
    constructor({ type, edge, price, amount }) {
        super();

        this._type = type;
        this._edge = edge;
        this._price = price;
        this._amount = amount;
    }

    async start() {
        // TODO -
    }
}

module.exports = TradeLoop;
