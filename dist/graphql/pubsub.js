"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pusher = exports.emmiter = exports.SnapShotPubSub = exports.pubsub = void 0;
const apollo_server_1 = require("apollo-server");
const EventEmitter = require("events");
const pusher_1 = __importDefault(require("pusher"));
exports.pubsub = new apollo_server_1.PubSub();
exports.SnapShotPubSub = {
    SNAPSHOT: "SNAPSHOT",
};
exports.emmiter = new EventEmitter();
exports.pusher = new pusher_1.default({
    appId: "1188111",
    key: "cdcfc1b6bd2444ebe4a7",
    secret: "6b9359945a1716ea79c6",
    cluster: "us2",
    useTLS: true,
});
exports.pusher.trigger("my-channel", "my-event", {
    message: "hello world",
});
