const sleep = require('then-sleep');
const core = require('gls-core-service');
const BasicService = core.services.Basic;
const Logger = core.utils.Logger;
const env = require('../data/env');

class TradeLoop extends BasicService {
    constructor({ type, edge, price, amount }) {
        super();

        this._type = type;
        this._edge = edge;
        this._price = price;
        this._amount = amount;
    }

    async start() {
        setImmediate(async () => {
            while (true) {
                try {
                    await this._iteration();
                } catch (error) {
                    Logger.error(error);
                }
                await sleep(env.PCAP_LOOP_TIME);
            }
        });
    }

    async _iteration() {
        // TODO -
    }
}

module.exports = TradeLoop;
