"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.BookingSteps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        w-full\n        flex\n        flex-col\n        items-center\n        pt-3\n        lg:pt-6\n        lg:pb-6\n    "], ["\n        w-full\n        flex\n        flex-col\n        items-center\n        pt-3\n        lg:pt-6\n        lg:pb-6\n    "]))));
var Title = styled_components_1["default"].h2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        text-3xl    \n        lg:text-5xl\n        text-black\n        font-extrabold\n    "], ["\n        text-3xl    \n        lg:text-5xl\n        text-black\n        font-extrabold\n    "]))));
var StepsContainer = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        flex\n        justify-evenly\n        flex-wrap\n        mt-7\n        lg:mt-16\n    "], ["\n        flex\n        justify-evenly\n        flex-wrap\n        mt-7\n        lg:mt-16\n    "]))));
var StepContainer = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        flex\n        flex-col\n        md:w-96\n        items-center\n        transition-colors\n        hover:text-red-500\n        m-3\n    "], ["\n        flex\n        flex-col\n        md:w-96\n        items-center\n        transition-colors\n        hover:text-red-500\n        m-3\n    "]))));
var Step = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    box-shadow:0 1.3px 12px -3px rbga(0, 0, 0, 0.4);\n    ", "\n"], ["\n    box-shadow:0 1.3px 12px -3px rbga(0, 0, 0, 0.4);\n    ",
    "\n"])), twin_macro_1["default"](templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        flex\n        rounded-lg\n        items-center\n        p-6\n        justify-center\n    "], ["\n        flex\n        rounded-lg\n        items-center\n        p-6\n        justify-center\n    "]))));
var StepTitle = styled_components_1["default"].h4(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    text-black\n    text-lg\n    font-semibold\n    mt-4\n  "], ["\n    text-black\n    text-lg\n    font-semibold\n    mt-4\n  "]))));
var StepDescription = styled_components_1["default"].p(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    w-10/12\n    text-xs\n    md:text-sm\n    text-center\n    text-gray-600\n  "], ["\n    w-10/12\n    text-xs\n    md:text-sm\n    text-center\n    text-gray-600\n  "]))));
var StepIcon = styled_components_1["default"].span(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    text-red-500\n    text-3xl\n  "], ["\n    text-red-500\n    text-3xl\n  "]))));
function BookingSteps() {
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(Title, null, "Our Working Steps"),
        react_1["default"].createElement(StepsContainer, null,
            react_1["default"].createElement(StepContainer, null,
                react_1["default"].createElement(Step, null,
                    react_1["default"].createElement(StepIcon, null,
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMapMarkedAlt }))),
                react_1["default"].createElement(StepTitle, null, "Choose Location"),
                react_1["default"].createElement(StepDescription, null, "Find the nearest Yourcar point and book your car.")),
            react_1["default"].createElement(StepContainer, null,
                react_1["default"].createElement(Step, null,
                    react_1["default"].createElement(StepIcon, null,
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCalendarAlt }))),
                react_1["default"].createElement(StepTitle, null, "Pick-Up Date"),
                react_1["default"].createElement(StepDescription, null, "Pickup the Best Date to rent a car for you.")),
            react_1["default"].createElement(StepContainer, null,
                react_1["default"].createElement(Step, null,
                    react_1["default"].createElement(StepIcon, null,
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCarSide }))),
                react_1["default"].createElement(StepTitle, null, "Book Your Car"),
                react_1["default"].createElement(StepDescription, null, "Book your nice car with ease in one single click")))));
}
exports.BookingSteps = BookingSteps;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
