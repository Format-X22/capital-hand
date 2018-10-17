const request = require('request-promise-native');
const moment = require('moment');
const sleep = require('then-sleep');
const core = require('gls-core-service');
const Logger = core.utils.Logger;
const env = require('../data/env');

class Stock {
    static async getOrderList() {
        // TODO -
    }

    static async placeEnterOrder() {
        // TODO -
    }

    static async placeExitOrder() {
        // TODO -
    }

    static async getCandles() {
        let response;
        let result;

        try {
            response = await request(this._makeCandlesRequestConfig());

            if (!response['t']) {
                throw 'Bad candles data';
            }

            result = this._convertCandlesToArray(response);
        } catch (err) {
            Logger.error(`Fail to load candles, sleep and retry... ${err}`);
            await sleep(env.PCAP_RETRY_TIME);

            return await this.getCandles();
        }

        return result;
    }

    static _makeCandlesRequestConfig() {
        return {
            uri: 'https://www.bitmex.com/api/udf/history',
            qs: {
                symbol: 'XBTUSD',
                from: this._toSeconds(moment().subtract(7, 'd')),
                to: this._toSeconds(moment()),
                resolution: '1D',
            },
            json: true,
        };
    }

    static _toSeconds(val) {
        return (val / 1000) | 0;
    }

    static _convertCandlesToArray(raw) {
        const result = [];

        for (let i = 0; i < raw['t'].length; i++) {
            result.push([raw['t'][i], raw['o'][i], raw['h'][i], raw['l'][i], raw['c'][i]]);
        }

        return result;
    }

    static _sign() {
        // TODO -
    }

    static _makeHeaders() {
        // TODO -
    }

    static _makeExpires() {
        // TODO -
    }

    static async _privateRequest() {
        // TODO -
    }
}

module.exports = Stock;
