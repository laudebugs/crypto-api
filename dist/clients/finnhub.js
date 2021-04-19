"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY; // Replace this
const finnhubClient = new finnhub.DefaultApi();
exports.default = finnhubClient;
