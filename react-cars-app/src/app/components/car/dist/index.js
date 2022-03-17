"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Car = void 0;
var react_1 = require("react");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var button_1 = require("../button");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var CarContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width:16.5em;\n    min-height:24em;\n    max-height:24em;\n    box-shadow:0 1.3px 17px -2px rbga(0, 0, 0, 0.4);\n    ", "\n"], ["\n    width:16.5em;\n    min-height:24em;\n    max-height:24em;\n    box-shadow:0 1.3px 17px -2px rbga(0, 0, 0, 0.4);\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        flex\n        flex-col\n        items-center\n        p-3\n        pb-4\n        bg-white\n        rounded-md\n        m-1\n        sm:m-3\n\n    "], ["\n        flex\n        flex-col\n        items-center\n        p-3\n        pb-4\n        bg-white\n        rounded-md\n        m-1\n        sm:m-3\n\n    "]))));
var MonthlyPrice = styled_components_1["default"].h5(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    text-gray-500\n    font-bold\n    text-sm\n  "], ["\n    text-gray-500\n    font-bold\n    text-sm\n  "]))));
var CarThumbnail = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width:100%;\n    height:auto;\n    img{\n        width:100%;\n        height:100%;\n    }\n"], ["\n    width:100%;\n    height:auto;\n    img{\n        width:100%;\n        height:100%;\n    }\n"])));
var CarName = styled_components_1["default"].h3(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        text-base\n        font-bold\n        text-black\n        mt-1\n        mb-1\n    "], ["\n        text-base\n        font-bold\n        text-black\n        mt-1\n        mb-1\n    "]))));
var PricesContainer = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        w-full\n        flex\n        justify-start\n        mt-3\n    "], ["\n        w-full\n        flex\n        justify-start\n        mt-3\n    "]))));
var DailyPrice = styled_components_1["default"].h5(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        text-gray-500\n        font-bold\n        text-sm\n    "], ["\n        text-gray-500\n        font-bold\n        text-sm\n    "]))));
var SmallText = styled_components_1["default"].p(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    color:inherit;\n    ", "\n"], ["\n    color:inherit;\n    ",
    "\n"])), twin_macro_1["default"](templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n        inline-flex\n        text-xs\n        font-thin\n    "], ["\n        inline-flex\n        text-xs\n        font-thin\n    "]))));
var SmallIcon = styled_components_1["default"].span(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n        text-gray-400\n        text-sm\n        ml-1\n    "], ["\n        text-gray-400\n        text-sm\n        ml-1\n    "]))));
var CarDetailsContainer = styled_components_1["default"].div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n        flex\n        w-full\n        justify-between\n    "], ["\n        flex\n        w-full\n        justify-between\n    "]))));
var CarDetail = styled_components_1["default"].span(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n        flex\n        items-center\n    "], ["\n        flex\n        items-center\n    "]))));
var CarInfo = styled_components_1["default"].h6(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n        text-gray-400\n        text-xs\n    "], ["\n        text-gray-400\n        text-xs\n    "]))));
var Seperator = styled_components_1["default"].div(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n    min-width:100%;\n    min-height:1px;\n    ", "\n"], ["\n    min-width:100%;\n    min-height:1px;\n    ",
    "\n"])), twin_macro_1["default"](templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n        flex\n        bg-gray-300\n        mt-2\n        mb-2\n    "], ["\n        flex\n        bg-gray-300\n        mt-2\n        mb-2\n    "]))));
var RentButton = styled_components_1["default"](button_1.Button)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n    min-w-full\n    mt-5\n  "], ["\n    min-w-full\n    mt-5\n  "]))));
function Car(props) {
    var name = props.name, thumbnailSrc = props.thumbnailSrc, dailyPrice = props.dailyPrice, monthlyPrice = props.monthlyPrice, mileage = props.mileage, gearType = props.gearType, gas = props.gas;
    return (react_1["default"].createElement(CarContainer, null,
        react_1["default"].createElement(CarThumbnail, null,
            react_1["default"].createElement("img", { src: thumbnailSrc })),
        react_1["default"].createElement(CarName, null, name),
        react_1["default"].createElement(PricesContainer, null,
            react_1["default"].createElement(DailyPrice, null,
                "$",
                dailyPrice,
                react_1["default"].createElement(SmallText, null, "/Day")),
            react_1["default"].createElement(MonthlyPrice, null,
                "$",
                monthlyPrice,
                react_1["default"].createElement(SmallText, null, "/Month"))),
        react_1["default"].createElement(Seperator, null),
        react_1["default"].createElement(CarDetailsContainer, null,
            react_1["default"].createElement(CarDetail, null,
                react_1["default"].createElement(SmallIcon, null,
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTachometerAlt })),
                react_1["default"].createElement(CarInfo, null, mileage)),
            react_1["default"].createElement(CarDetail, null,
                react_1["default"].createElement(SmallIcon, null,
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEllipsisH })),
                react_1["default"].createElement(CarInfo, null, gearType)),
            react_1["default"].createElement(CarDetail, null,
                react_1["default"].createElement(SmallIcon, null,
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faFillDrip })),
                react_1["default"].createElement(CarInfo, null, gas))),
        react_1["default"].createElement(RentButton, { text: "Rent Now" })));
}
exports.Car = Car;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25;
