"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Navbar = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var logo_1 = require("../logo");
var navItems_1 = require("./navItems");
var NavbarContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    min-height:68px;\n    ", "\n"], ["\n    min-height:68px;\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        w-full\n        max-w-screen-2xl\n        flex\n        flex-row\n        items-center\n        lg:pl-12\n        lg:pr-12\n        justify-between\n    "], ["\n        w-full\n        max-w-screen-2xl\n        flex\n        flex-row\n        items-center\n        lg:pl-12\n        lg:pr-12\n        justify-between\n    "]))));
var LogoContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
function Navbar() {
    return (react_1["default"].createElement(NavbarContainer, null,
        react_1["default"].createElement(LogoContainer, null,
            react_1["default"].createElement(logo_1.Logo, { color: "dark", bgColor: "white" })),
        react_1["default"].createElement(navItems_1.NavItems, null)));
}
exports.Navbar = Navbar;
var templateObject_1, templateObject_2, templateObject_3;
