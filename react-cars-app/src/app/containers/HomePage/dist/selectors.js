"use strict";
exports.__esModule = true;
exports.makeSelectTopCars = void 0;
var reselect_1 = require("reselect");
var selectHomePage = function (state) { return state.homePage; };
exports.makeSelectTopCars = reselect_1.createSelector(selectHomePage, function (homePage) { return homePage.topCars; });
