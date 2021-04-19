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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoModel = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const Interval_1 = require("./Interval");
const Snapshot_1 = __importDefault(require("./Snapshot"));
let CryptoCurrency = class CryptoCurrency {
};
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], CryptoCurrency.prototype, "currency", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], CryptoCurrency.prototype, "symbol", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], CryptoCurrency.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], CryptoCurrency.prototype, "logo_url", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], CryptoCurrency.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], CryptoCurrency.prototype, "market_cap", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], CryptoCurrency.prototype, "num_exchanges", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], CryptoCurrency.prototype, "num_pairs", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], CryptoCurrency.prototype, "num_pairs_unmapped", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Date)
], CryptoCurrency.prototype, "first_candle", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Date)
], CryptoCurrency.prototype, "first_trade", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Date)
], CryptoCurrency.prototype, "first_order_book", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], CryptoCurrency.prototype, "rank", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], CryptoCurrency.prototype, "rank_delta", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], CryptoCurrency.prototype, "high", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Date)
], CryptoCurrency.prototype, "high_timestamp", void 0);
__decorate([
    type_graphql_1.Field((type) => [Snapshot_1.default]),
    typegoose_1.prop({ type: () => Snapshot_1.default, default: [] }),
    __metadata("design:type", Array)
], CryptoCurrency.prototype, "snapshots", void 0);
__decorate([
    type_graphql_1.Field((type) => [Interval_1.Interval]),
    typegoose_1.prop({ type: () => Interval_1.Interval, default: [] }),
    __metadata("design:type", Array)
], CryptoCurrency.prototype, "day", void 0);
__decorate([
    type_graphql_1.Field((type) => [Interval_1.Interval]),
    typegoose_1.prop({ type: () => Interval_1.Interval, default: [] }),
    __metadata("design:type", Array)
], CryptoCurrency.prototype, "week", void 0);
__decorate([
    type_graphql_1.Field((type) => [Interval_1.Interval]),
    typegoose_1.prop({ type: () => Interval_1.Interval, default: [] }),
    __metadata("design:type", Array)
], CryptoCurrency.prototype, "month", void 0);
__decorate([
    type_graphql_1.Field((type) => [Interval_1.Interval]),
    typegoose_1.prop({ type: () => Interval_1.Interval, default: [] }),
    __metadata("design:type", Array)
], CryptoCurrency.prototype, "year", void 0);
__decorate([
    type_graphql_1.Field((type) => [Interval_1.Interval]),
    typegoose_1.prop({ type: () => Interval_1.Interval, default: [] }),
    __metadata("design:type", Array)
], CryptoCurrency.prototype, "ytd", void 0);
CryptoCurrency = __decorate([
    type_graphql_1.ObjectType()
], CryptoCurrency);
exports.default = CryptoCurrency;
exports.CryptoModel = typegoose_1.getModelForClass(CryptoCurrency);
