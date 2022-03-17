"use strict";
exports.__esModule = true;
exports.setTopCars = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    topCars: []
};
var homePageSlice = toolkit_1.createSlice({
    name: "homePage",
    initialState: initialState,
    reducers: {
        setTopCars: function (state, action) {
            state.topCars = action.payload;
        }
    }
});
exports.setTopCars = homePageSlice.actions.setTopCars;
exports["default"] = homePageSlice.reducer;
