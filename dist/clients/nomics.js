"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nomics_1 = __importDefault(require("nomics"));
// ...
const apiKey = process.env.NOMICS_API_KEY || "";
const nomicsClient = new nomics_1.default({
    apiKey: apiKey,
});
exports.default = nomicsClient;
