"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GET_ALL_CARS = void 0;
var graphql_tag_1 = require("graphql-tag");
exports.GET_ALL_CARS = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query{\n        cars{\n            id\n            name\n            mileage\n            gearType\n            gas\n            thumbnailUrl\n            dailyPrice\n            monthlyPrice\n        }\n    }\n"], ["\n    query{\n        cars{\n            id\n            name\n            mileage\n            gearType\n            gas\n            thumbnailUrl\n            dailyPrice\n            monthlyPrice\n        }\n    }\n"])));
var templateObject_1;
