"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Read env varibles
require("dotenv").config("../");
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const type_graphql_1 = require("type-graphql");
const snapshotWorker_1 = require("./graphql/workers/snapshotWorker");
const CryptoCurrencyResolver_1 = __importDefault(require("./graphql/resolvers/CryptoCurrencyResolver"));
const pubsub_1 = require("./graphql/pubsub");
// Connect to mongo database
require("./database/mongo");
(async function main() {
    const schema = await type_graphql_1.buildSchema({
        resolvers: [CryptoCurrencyResolver_1.default],
        emitSchemaFile: true,
        pubSub: pubsub_1.pubsub,
    });
    const app = express_1.default();
    app.use((req, res, next) => {
        const allowedOrigins = [
            "https://crypto-zone.firebaseapp.com",
            "http://localhost:4200",
        ];
        const origin = req.headers.origin;
        if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
        }
        return next();
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        subscriptions: "/subs",
        context: (request) => {
            return {
                ...request,
                pubsub: pubsub_1.pubsub,
            };
        },
    });
    apolloServer.applyMiddleware({ app });
    const httpServer = http_1.createServer(app);
    apolloServer.installSubscriptionHandlers(httpServer);
    app.get("/", (req, res) => res.json({ message: "Welcome to the Crypto Zone API" }));
    app.get("/webhook", (req, res) => { });
    const PORT = process.env.PORT || 8000;
    httpServer.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
        snapshotWorker_1.scheduleSnapShots();
    });
})();
