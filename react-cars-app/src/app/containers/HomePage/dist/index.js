"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.HomePage = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var navbar_1 = require("../../components/navbar");
var TopSection_1 = require("./TopSection");
var bookCar_1 = require("../../components/bookCar");
var marginer_1 = require("../../components/marginer");
var bookingSteps_1 = require("./bookingSteps");
var aboutUs_1 = require("./aboutUs");
var topCars_1 = require("./topCars");
var footer_1 = require("../../components/footer");
var PageContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        flex\n        flex-col\n        w-full\n        h-full\n        items-center\n        overflow-x-hidden\n        overflow-y-hidden\n    "], ["\n        flex\n        flex-col\n        w-full\n        h-full\n        items-center\n        overflow-x-hidden\n        overflow-y-hidden\n    "]))));
function HomePage() {
    return (react_1["default"].createElement(PageContainer, null,
        react_1["default"].createElement(navbar_1.Navbar, null),
        react_1["default"].createElement(TopSection_1.TopSection, null),
        react_1["default"].createElement(marginer_1.Marginer, { direction: "vertical", margin: "4em" }),
        react_1["default"].createElement(bookCar_1.BookCar, null),
        react_1["default"].createElement(marginer_1.Marginer, { direction: "vertical", margin: "4em" }),
        react_1["default"].createElement(bookingSteps_1.BookingSteps, null),
        react_1["default"].createElement(marginer_1.Marginer, { direction: "vertical", margin: "4em" }),
        react_1["default"].createElement(aboutUs_1.AboutUs, null),
        react_1["default"].createElement(marginer_1.Marginer, { direction: "vertical", margin: "4em" }),
        react_1["default"].createElement(topCars_1.TopCars, null),
        react_1["default"].createElement(footer_1.Footer, null)));
}
exports.HomePage = HomePage;
var templateObject_1, templateObject_2;
