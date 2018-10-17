const core = require('gls-core-service');
const stats = core.utils.statsClient;
const BasicMain = core.services.BasicMain;
const env = require('./data/env');
const Init = require('./controllers/Init');
const TradeLoop = require('./services/TradeLoop');

class Main extends BasicMain {
    constructor() {
        super(stats, env);

        this._initController = new Init({});
    }

    async start() {
        const config = await this._initController.makeConfig();

        this.addNested(new TradeLoop(config));

        await super.start();
    }
}

module.exports = Main;
