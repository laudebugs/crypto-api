"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoCurrency_1 = require("./../../models/CryptoCurrency");
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
const CryptoCurrency_2 = __importDefault(require("../../models/CryptoCurrency"));
const Snapshot_1 = __importDefault(require("../../models/Snapshot"));
const pubsub_1 = require("../pubsub");
let SnapshotArgs = class SnapshotArgs extends Snapshot_1.default {
};
SnapshotArgs = __decorate([
    type_graphql_1.ArgsType()
], SnapshotArgs);
let SnapshotInput = class SnapshotInput extends Snapshot_1.default {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], SnapshotInput.prototype, "symbol", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], SnapshotInput.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], SnapshotInput.prototype, "marketCap", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], SnapshotInput.prototype, "circulating_supply", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], SnapshotInput.prototype, "price_date", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], SnapshotInput.prototype, "price_timestamp", void 0);
SnapshotInput = __decorate([
    type_graphql_1.InputType({ description: "A Snapshot Input" })
], SnapshotInput);
let CryptoCurrencyResolver = class CryptoCurrencyResolver {
    async getCoin(symbol) {
        const coin = await CryptoCurrency_1.CryptoModel.findOne({ symbol: symbol });
        return coin;
    }
    async getSnapShots(symbol) {
        try {
            console.log("ici");
            const crypto = await CryptoCurrency_1.CryptoModel.findOne({
                symbol: symbol,
            });
            return crypto.snapshots;
        }
        catch (error) {
            return new graphql_1.GraphQLError(error);
        }
    }
    async newSnapshot(snapshot, publish) {
        // await publish(snapshot);
        console.log(snapshot);
        await publish(JSON.stringify(snapshot));
        await pubsub_1.pubsub.publish("SNAPSHOT", { listenSnapshots: snapshot });
        return snapshot;
    }
    listenSnapshots(snapshotPayload, args) {
        console.log("here in sub");
        //@ts-ignore
        const snap = { ...snapshotPayload._doc };
        return snap;
    }
};
__decorate([
    type_graphql_1.Query((returns) => CryptoCurrency_2.default),
    __param(0, type_graphql_1.Arg("symbol")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CryptoCurrencyResolver.prototype, "getCoin", null);
__decorate([
    type_graphql_1.Query((returns) => [Snapshot_1.default], { nullable: true }),
    __param(0, type_graphql_1.Arg("symbol")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CryptoCurrencyResolver.prototype, "getSnapShots", null);
__decorate([
    type_graphql_1.Mutation((returns) => String),
    __param(0, type_graphql_1.Arg("snapshot")),
    __param(1, type_graphql_1.PubSub("SNAPSHOT")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SnapshotInput, Function]),
    __metadata("design:returntype", Promise)
], CryptoCurrencyResolver.prototype, "newSnapshot", null);
__decorate([
    type_graphql_1.Subscription({
        topics: "SNAPSHOT",
    }),
    __param(0, type_graphql_1.Root()),
    __param(1, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Snapshot_1.default,
        SnapshotArgs]),
    __metadata("design:returntype", Snapshot_1.default)
], CryptoCurrencyResolver.prototype, "listenSnapshots", null);
CryptoCurrencyResolver = __decorate([
    type_graphql_1.Resolver((of) => CryptoCurrency_2.default)
], CryptoCurrencyResolver);
exports.default = CryptoCurrencyResolver;
