"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const finnhub_1 = __importDefault(require("../../clients/finnhub"));
// Crypto exchanges
finnhub_1.default.cryptoExchanges((error, data, response) => {
    if (error) {
        console.log(error.message);
    }
    console.log(data);
});
finnhub_1.default.stockTick("AAPL", "2020-03-25", 500, 0, (error, data, response) => {
    console.log("here");
    console.error(data);
    if (error) {
        console.log(error.message);
    }
});
