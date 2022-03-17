"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.NavItems = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var react_burger_menu_1 = require("react-burger-menu");
var react_responsive_1 = require("react-responsive");
var responsive_1 = require("../responsive");
var menuStyles_1 = require("./menuStyles");
var ListContainer = styled_components_1["default"].ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        flex\n        list-none\n    "], ["\n        flex\n        list-none\n    "]))));
var NavItem = styled_components_1["default"].li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ",
    ";\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    text-sm\n    md:text-base\n    text-black\n    font-medium\n    mr-1\n    md:mr-5\n    cursor-pointer\n    transition\n    duration-300\n    ease-in-out\n    hover:text-gray-700\n  "], ["\n    text-sm\n    md:text-base\n    text-black\n    font-medium\n    mr-1\n    md:mr-5\n    cursor-pointer\n    transition\n    duration-300\n    ease-in-out\n    hover:text-gray-700\n  "]))), function (_a) {
    var menu = _a.menu;
    return menu && styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      ", ";\n    "], ["\n      ",
        ";\n    "])), twin_macro_1["default"](templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      text-white\n      text-xl\n      mb-3\n      focus:text-white\n    "], ["\n      text-white\n      text-xl\n      mb-3\n      focus:text-white\n    "]))));
});
function NavItems() {
    var isMobile = react_responsive_1.useMediaQuery({ maxWidth: responsive_1.SCREENS.sm });
    if (isMobile)
        return (react_1["default"].createElement(react_burger_menu_1.slide, { right: true, styles: menuStyles_1["default"] },
            react_1["default"].createElement(ListContainer, null,
                react_1["default"].createElement(NavItem, { menu: true },
                    react_1["default"].createElement("a", { href: "#" }, "Home")),
                react_1["default"].createElement(NavItem, { menu: true },
                    react_1["default"].createElement("a", { href: "#" }, "Cars")),
                react_1["default"].createElement(NavItem, { menu: true },
                    react_1["default"].createElement("a", { href: "#" }, "Services")),
                react_1["default"].createElement(NavItem, { menu: true },
                    react_1["default"].createElement("a", { href: "#" }, "Contact Us")))));
    return (react_1["default"].createElement(ListContainer, null,
        react_1["default"].createElement(NavItem, null,
            react_1["default"].createElement("a", { href: "#" }, "Home")),
        react_1["default"].createElement(NavItem, null,
            react_1["default"].createElement("a", { href: "#" }, "Cars")),
        react_1["default"].createElement(NavItem, null,
            react_1["default"].createElement("a", { href: "#" }, "Services")),
        react_1["default"].createElement(NavItem, null,
            react_1["default"].createElement("a", { href: "#" }, "Contact us"))));
}
exports.NavItems = NavItems;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
