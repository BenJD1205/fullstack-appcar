"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.AboutUs = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var jeep_png_1 = require("../../../assets/images/jeep.png");
var responsive_1 = require("../../components/responsive");
var AboutUsContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        w-full\n        flex\n        flex-wrap\n        items-center\n        2xl:justify-center\n        pt-4\n        pb-4\n        pr-7\n        pl-7\n        md:pl-0\n        md:pr-0\n        bg-white\n    "], ["\n        w-full\n        flex\n        flex-wrap\n        items-center\n        2xl:justify-center\n        pt-4\n        pb-4\n        pr-7\n        pl-7\n        md:pl-0\n        md:pr-0\n        bg-white\n    "]))));
var CarContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width:auto;\n    height:15em;\n    margin-left:-30px;\n\n    img{\n        width:auto;\n        height:100%;\n    }\n\n    @media (min-width:", "){\n        height:28em;\n    }\n\n    @media(min-width:", "){\n        height:30em;\n    }\n    @media(min-width:", "){\n        height:35em;\n        margin-left:0;\n    }\n"], ["\n    width:auto;\n    height:15em;\n    margin-left:-30px;\n\n    img{\n        width:auto;\n        height:100%;\n    }\n\n    @media (min-width:", "){\n        height:28em;\n    }\n\n    @media(min-width:", "){\n        height:30em;\n    }\n    @media(min-width:", "){\n        height:35em;\n        margin-left:0;\n    }\n"])), responsive_1.SCREENS.md, responsive_1.SCREENS.lg, responsive_1.SCREENS["2xl"]);
var InfoContainer = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        md:w-1/2\n        flex\n        flex-col\n        md:ml-6\n        2xl:ml-16\n    "], ["\n        md:w-1/2\n        flex\n        flex-col\n        md:ml-6\n        2xl:ml-16\n    "]))));
var Title = styled_components_1["default"].h1(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        text-black\n        text-2xl\n        md:text-5xl\n        font-extrabold\n        md:font-black\n        md:leading-normal\n    "], ["\n        text-black\n        text-2xl\n        md:text-5xl\n        font-extrabold\n        md:font-black\n        md:leading-normal\n    "]))));
var InfoText = styled_components_1["default"].p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        md:max-w-2xl\n        text-sm\n        md:text-base\n        text-gray-500\n        font-normal\n        mt-4\n    "], ["\n        md:max-w-2xl\n        text-sm\n        md:text-base\n        text-gray-500\n        font-normal\n        mt-4\n    "]))));
function AboutUs() {
    return (react_1["default"].createElement(AboutUsContainer, null,
        react_1["default"].createElement(CarContainer, null,
            react_1["default"].createElement("img", { src: jeep_png_1["default"] })),
        react_1["default"].createElement(InfoContainer, null,
            react_1["default"].createElement(Title, null, "Feel The Best Experience With Our Rental Deals"),
            react_1["default"].createElement(InfoText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."))));
}
exports.AboutUs = AboutUs;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
