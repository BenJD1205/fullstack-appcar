"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var HomePage_1 = require("./app/containers/HomePage");
var AppContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    w-full\n    h-full\n    flex\n    flex-col\n  "], ["\n    w-full\n    h-full\n    flex\n    flex-col\n  "]))));
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(AppContainer, null,
            react_1["default"].createElement(HomePage_1.HomePage, null))));
}
exports["default"] = App;
var templateObject_1, templateObject_2;
