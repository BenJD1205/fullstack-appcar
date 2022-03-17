"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TopSection = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var mclaren_orange_big_png_1 = require("../../../assets/images/mclaren-orange-big.png");
var blob_svg_1 = require("../../../assets/images/blob.svg");
var responsive_1 = require("../../components/responsive");
var button_1 = require("../../components/button");
var TopSectionContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    min-height:400px;\n    margin-top:6rem;\n    ", "\n"], ["\n    min-height:400px;\n    margin-top:6rem;\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        w-full\n        max-w-screen-2xl\n        flex\n        justify-between\n        pl-3\n        pr-3\n        lg:pl-12\n        lg:pr-12\n    "], ["\n        w-full\n        max-w-screen-2xl\n        flex\n        justify-between\n        pl-3\n        pr-3\n        lg:pl-12\n        lg:pr-12\n    "]))));
var LeftContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        w-1/2\n        flex\n        flex-col\n    "], ["\n        w-1/2\n        flex\n        flex-col\n    "]))));
var RightContainer = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        w-1/2\n        flex\n        flex-col\n        relative\n        mt-20\n    "], ["\n        w-1/2\n        flex\n        flex-col\n        relative\n        mt-20\n    "]))));
var Slogan = styled_components_1["default"].h1(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-bold\n    text-2xl\n    xl:text-6xl\n    sm:text-3xl\n    md:text-5xl\n    lg:font-black\n    md:font-extrabold\n    text-black\n    mb-4\n    sm:leading-snug\n    lg:leading-normal\n    xl:leading-relaxed\n  "], ["\n    font-bold\n    text-2xl\n    xl:text-6xl\n    sm:text-3xl\n    md:text-5xl\n    lg:font-black\n    md:font-extrabold\n    text-black\n    mb-4\n    sm:leading-snug\n    lg:leading-normal\n    xl:leading-relaxed\n  "]))));
var Description = styled_components_1["default"].p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    text-xs\n    lg:text-sm\n    xl:text-lg\n    sm:max-h-full\n    overflow-hidden\n    max-h-12\n    text-gray-800\n  "], ["\n    text-xs\n    lg:text-sm\n    xl:text-lg\n    sm:max-h-full\n    overflow-hidden\n    max-h-12\n    text-gray-800\n  "]))));
var BlobContainer = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  width: 20em;\n  height: 10em;\n  position: absolute;\n  right: -5em;\n  top: -9em;\n  z-index: -1;\n  transform: rotate(-30deg);\n  img {\n    width: 100%;\n    height: auto;\n    max-height: max-content;\n  }\n  @media (min-width: ", ") {\n    width: 40em;\n    max-height: 10em;\n    right: -9em;\n    top: -16em;\n    transform: rotate(-25deg);\n  }\n  @media (min-width: ", ") {\n    width: 50em;\n    max-height: 30em;\n    right: -7em;\n    top: -15em;\n    transform: rotate(-30deg);\n  }\n  @media (min-width: ", ") {\n    width: 70em;\n    max-height: 30em;\n    right: -15em;\n    top: -25em;\n    transform: rotate(-20deg);\n  }\n"], ["\n  width: 20em;\n  height: 10em;\n  position: absolute;\n  right: -5em;\n  top: -9em;\n  z-index: -1;\n  transform: rotate(-30deg);\n  img {\n    width: 100%;\n    height: auto;\n    max-height: max-content;\n  }\n  @media (min-width: ", ") {\n    width: 40em;\n    max-height: 10em;\n    right: -9em;\n    top: -16em;\n    transform: rotate(-25deg);\n  }\n  @media (min-width: ", ") {\n    width: 50em;\n    max-height: 30em;\n    right: -7em;\n    top: -15em;\n    transform: rotate(-30deg);\n  }\n  @media (min-width: ", ") {\n    width: 70em;\n    max-height: 30em;\n    right: -15em;\n    top: -25em;\n    transform: rotate(-20deg);\n  }\n"])), responsive_1.SCREENS.sm, responsive_1.SCREENS.lg, responsive_1.SCREENS.xl);
var StandaloneCar = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: auto;\n  height: 10em;\n  right: -6em;\n  top: -5em;\n  position: absolute;\n  img {\n    width: auto;\n    height: 100%;\n    max-width: fit-content;\n  }\n  @media (min-width: ", ") {\n    height: 16em;\n    right: -6em;\n    top: -6em;\n  }\n  @media (min-width: ", ") {\n    height: 21em;\n    right: -8em;\n    top: -5em;\n  }\n  @media (min-width: ", ") {\n    height: 30em;\n    right: -13em;\n    top: -9em;\n  }\n"], ["\n  width: auto;\n  height: 10em;\n  right: -6em;\n  top: -5em;\n  position: absolute;\n  img {\n    width: auto;\n    height: 100%;\n    max-width: fit-content;\n  }\n  @media (min-width: ", ") {\n    height: 16em;\n    right: -6em;\n    top: -6em;\n  }\n  @media (min-width: ", ") {\n    height: 21em;\n    right: -8em;\n    top: -5em;\n  }\n  @media (min-width: ", ") {\n    height: 30em;\n    right: -13em;\n    top: -9em;\n  }\n"])), responsive_1.SCREENS.sm, responsive_1.SCREENS.lg, responsive_1.SCREENS.xl);
var ButtonsContainer = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    flex\n    flex-wrap\n    mt-4\n  "], ["\n    flex\n    flex-wrap\n    mt-4\n  "]))));
function TopSection() {
    return (react_1["default"].createElement(TopSectionContainer, null,
        react_1["default"].createElement(LeftContainer, null,
            react_1["default"].createElement(Slogan, null, "Rent The Best Quality Car With Us"),
            react_1["default"].createElement(Description, null, "Always choose the best car from our local stores or order it remotely at the best price for you and get the best quality cars for as long as you like"),
            react_1["default"].createElement(ButtonsContainer, null,
                react_1["default"].createElement(button_1.Button, { text: "Book Your Ride" }),
                react_1["default"].createElement(button_1.Button, { theme: "filled", text: "Sell Your Car" }))),
        react_1["default"].createElement(RightContainer, null,
            react_1["default"].createElement(BlobContainer, null,
                react_1["default"].createElement("img", { src: blob_svg_1["default"] })),
            react_1["default"].createElement(StandaloneCar, null,
                react_1["default"].createElement("img", { src: mclaren_orange_big_png_1["default"] })))));
}
exports.TopSection = TopSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
