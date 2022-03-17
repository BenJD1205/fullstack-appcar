"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var slice_1 = require("./containers/HomePage/slice");
var redux_logger_1 = require("redux-logger");
exports.store = toolkit_1.configureStore({
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(redux_logger_1["default"]);
    },
    reducer: {
        homePage: slice_1["default"]
    }
});
