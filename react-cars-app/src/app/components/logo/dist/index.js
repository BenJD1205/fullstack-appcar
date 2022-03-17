"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Logo = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var car_logo_png_1 = require("../../../assets/images/car-logo.png");
var car_logo_dark_png_1 = require("../../../assets/images/car-logo-dark.png");
var LogoContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        flex\n        items-center\n    "], ["\n        flex\n        items-center\n    "]))));
var LogoText = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n    ", "\n"], ["\n    ",
    "\n    ", "\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        text-xl\n        md:text-2xl\n        font-bold\n        text-black\n        m-1 \n    "], ["\n        text-xl\n        md:text-2xl\n        font-bold\n        text-black\n        m-1 \n    "]))), function (_a) {
    var color = _a.color;
    return (color === "white" ? twin_macro_1["default"](templateObject_4 || (templateObject_4 = __makeTemplateObject(["text-white"], ["text-white"]))) : twin_macro_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["text-black"], ["text-black"]))));
});
var Image = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    width:auto;\n    ", "\n    \n    img{\n        width:auto;\n        height:100%;\n    }\n"], ["\n    width:auto;\n    ",
    "\n    \n    img{\n        width:auto;\n        height:100%;\n    }\n"])), twin_macro_1["default"](templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    \n    "], ["\n    \n    "]))));
function Logo(props) {
    var color = props.color, bgColor = props.bgColor;
    return (react_1["default"].createElement(LogoContainer, null,
        react_1["default"].createElement(Image, null,
            react_1["default"].createElement("img", { src: bgColor === "white" ? car_logo_png_1["default"] : car_logo_dark_png_1["default"] })),
        react_1["default"].createElement(LogoText, { color: color || "dark" }, "Yourcar")));
}
exports.Logo = Logo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
