const dialog = require('inquirer');
const core = require('gls-core-service');
const BasicController = core.controllers.Basic;
const Logger = core.utils.Logger;

class Init extends BasicController {
    async makeConfig() {
        const typeRaw = await dialog.prompt({
            type: 'list',
            name: 'Тип позиции?',
            choices: ['Short', 'Long'],
        });
        const type = this._extractValue(typeRaw);

        const edgeRaw = await dialog.prompt({
            type: 'input',
            name: 'Пограничное значение?',
            validate: this._isNumber,
        });
        const edge = +this._extractValue(edgeRaw);

        const priceRaw = await dialog.prompt({
            type: 'input',
            name: 'Значение для входа?',
            validate: this._isNumber,
        });
        const price = +this._extractValue(priceRaw);

        Logger.info(`Тип позиции - ${type}`);
        Logger.info(`Пограничное значение - ${edge}`);
        Logger.info(`Значение для входа - ${price}`);

        const confirmRaw = await dialog.prompt({
            type: 'confirm',
            name: 'Всё верно?',
        });
        const confirm = this._extractValue(confirmRaw);

        if (!confirm) {
            Logger.info('Отмена!');
            process.exit(0);
        }

        return { type, edge, price };
    }

    _extractValue(raw) {
        return raw[Object.keys(raw)[0]];
    }

    _isNumber(value) {
        return value.length > 0 && isFinite(+value);
    }
}

module.exports = Init;
