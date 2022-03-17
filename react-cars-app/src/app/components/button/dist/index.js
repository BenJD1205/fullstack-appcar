"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Button = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var BaseButton = styled_components_1["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        pl-5\n        pr-5\n        pt-3\n        pb-3\n        outline-none\n        rounded-md\n        text-white\n        text-xs\n        font-thin\n        md:font-semibold\n        border-transparent\n        border-2\n        border-solid\n        focus:outline-none\n        transition-all\n        duration-200\n        ease-in-out\n        m-1\n    "], ["\n        pl-5\n        pr-5\n        pt-3\n        pb-3\n        outline-none\n        rounded-md\n        text-white\n        text-xs\n        font-thin\n        md:font-semibold\n        border-transparent\n        border-2\n        border-solid\n        focus:outline-none\n        transition-all\n        duration-200\n        ease-in-out\n        m-1\n    "]))));
var OutlinedButton = styled_components_1["default"](BaseButton)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        bg-red-500\n        hover:bg-transparent\n        hover:text-red-500\n        hover:border-red-500\n    "], ["\n        bg-red-500\n        hover:bg-transparent\n        hover:text-red-500\n        hover:border-red-500\n    "]))));
var FilledButton = styled_components_1["default"](BaseButton)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        border-red-500\n        text-red-500\n        bg-transparent\n        hover:bg-red-500\n        hover:text-white\n        hover:border-transparent\n    "], ["\n        border-red-500\n        text-red-500\n        bg-transparent\n        hover:bg-red-500\n        hover:text-white\n        hover:border-transparent\n    "]))));
function Button(props) {
    var theme = props.theme, text = props.text;
    if (theme === "filled")
        return react_1["default"].createElement(FilledButton, null, text);
    else
        return react_1["default"].createElement(OutlinedButton, null, text);
}
exports.Button = Button;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
