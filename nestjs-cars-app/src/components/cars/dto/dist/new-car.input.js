"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewCarInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var class_validator_1 = require("class-validator");
var NewCarInput = /** @class */ (function () {
    function NewCarInput() {
    }
    __decorate([
        graphql_1.Field()
    ], NewCarInput.prototype, "name");
    __decorate([
        graphql_1.Field(function (type) { return graphql_1.Int; }),
        class_validator_1.Max(20000),
        class_validator_1.Min(1500)
    ], NewCarInput.prototype, "monthlyPrice");
    __decorate([
        graphql_1.Field(function (type) { return graphql_1.Int; }),
        class_validator_1.Max(1000),
        class_validator_1.Min(10, { message: "Daily price can't be that low!" })
    ], NewCarInput.prototype, "dailyPrice");
    __decorate([
        graphql_1.Field()
    ], NewCarInput.prototype, "mileage");
    __decorate([
        graphql_1.Field()
    ], NewCarInput.prototype, "gas");
    __decorate([
        graphql_1.Field()
    ], NewCarInput.prototype, "gearType");
    __decorate([
        graphql_1.Field()
    ], NewCarInput.prototype, "thumbnailUrl");
    NewCarInput = __decorate([
        graphql_1.InputType()
    ], NewCarInput);
    return NewCarInput;
}());
exports.NewCarInput = NewCarInput;
