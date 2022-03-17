"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Footer = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var logo_1 = require("../logo");
var responsive_1 = require("../../components/responsive");
var FooterContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  //min-height: 24em;\n  background-color: #1d2124;\n  ", ";\n"], ["\n  //min-height: 24em;\n  background-color: #1d2124;\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex\n    flex-col\n    min-w-full\n    pt-10\n    md:pt-16\n    items-center\n    justify-center\n    pb-2\n  "], ["\n    flex\n    flex-col\n    min-w-full\n    pt-10\n    md:pt-16\n    items-center\n    justify-center\n    pb-2\n  "]))));
var InnerContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex\n    w-full\n    h-full\n    max-w-screen-2xl\n    flex-wrap\n  "], ["\n    flex\n    w-full\n    h-full\n    max-w-screen-2xl\n    flex-wrap\n  "]))));
var BottomContainer = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    w-full\n    flex\n    max-w-screen-2xl\n    justify-center\n    // md:justify-start\n    mt-7\n    md:mt-1\n  "], ["\n    w-full\n    flex\n    max-w-screen-2xl\n    justify-center\n    // md:justify-start\n    mt-7\n    md:mt-1\n  "]))));
var CopyrightText = styled_components_1["default"].small(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 12px;\n  ", "\n"], ["\n  font-size: 12px;\n  ",
    "\n"])), twin_macro_1["default"](templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    text-gray-300\n  "], ["\n    text-gray-300\n  "]))));
var AboutContainer = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    flex\n    flex-col\n    mr-2\n    md:mr-16\n    pl-10\n    pr-10\n    md:pl-3\n    md:pr-3\n  "], ["\n    flex\n    flex-col\n    mr-2\n    md:mr-16\n    pl-10\n    pr-10\n    md:pl-3\n    md:pr-3\n  "]))));
var AboutText = styled_components_1["default"].p(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    text-white\n    text-sm\n    font-normal\n    max-w-xs\n    leading-5\n    mt-2\n  "], ["\n    text-white\n    text-sm\n    font-normal\n    max-w-xs\n    leading-5\n    mt-2\n  "]))));
var SectionContainer = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    w-full\n    md:w-auto\n    flex\n    flex-col\n    mr-2\n    md:mr-12\n    pl-10\n    pr-10\n    md:pl-3\n    md:pr-3\n    mt-7\n    md:mt-0\n  "], ["\n    w-full\n    md:w-auto\n    flex\n    flex-col\n    mr-2\n    md:mr-12\n    pl-10\n    pr-10\n    md:pl-3\n    md:pr-3\n    mt-7\n    md:mt-0\n  "]))));
var LinksList = styled_components_1["default"].ul(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    outline-none\n    list-none\n    flex\n    flex-col\n  "], ["\n    outline-none\n    list-none\n    flex\n    flex-col\n  "]))));
var ListItem = styled_components_1["default"].li(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  ", ";\n  & > a {\n    ", ";\n  }\n"], ["\n  ",
    ";\n  & > a {\n    ",
    ";\n  }\n"])), twin_macro_1["default"](templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    mb-3\n  "], ["\n    mb-3\n  "]))), twin_macro_1["default"](templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      text-sm\n    text-white\n      transition-all\n      hover:text-gray-200\n    "], ["\n      text-sm\n    text-white\n      transition-all\n      hover:text-gray-200\n    "]))));
var HeaderTitle = styled_components_1["default"].h3(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n    text-2xl\n    font-bold\n    text-white\n    mb-3\n  "], ["\n    text-2xl\n    font-bold\n    text-white\n    mb-3\n  "]))));
var HorizontalContainer = styled_components_1["default"].div(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  ", ";\n  @media (max-width:", "){\n    margin:auto\n    }\n"], ["\n  ",
    ";\n  @media (max-width:", "){\n    margin:auto\n    }\n"])), twin_macro_1["default"](templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n    flex\n    items-center\n    justify-center\n  "], ["\n    flex\n    items-center\n    justify-center\n  "]))), responsive_1.SCREENS.sm);
var RedIcon = styled_components_1["default"].span(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n    w-9\n    h-9\n    rounded-full\n    bg-red-500\n    flex\n    items-center\n    justify-center\n    text-white\n    text-base\n    mr-2\n  "], ["\n    w-9\n    h-9\n    rounded-full\n    bg-red-500\n    flex\n    items-center\n    justify-center\n    text-white\n    text-base\n    mr-2\n  "]))));
var SmallText = styled_components_1["default"].h6(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n    text-sm\n    text-white\n  "], ["\n    text-sm\n    text-white\n  "]))));
function Footer() {
    return (react_1["default"].createElement(FooterContainer, null,
        react_1["default"].createElement(InnerContainer, null,
            react_1["default"].createElement(AboutContainer, null,
                react_1["default"].createElement(logo_1.Logo, { color: "white", bgColor: "dark" }),
                react_1["default"].createElement(AboutText, null, "Yourcar is a Car renting and selling company located in many countries across the world which has high quality cars and top rated service.")),
            react_1["default"].createElement(SectionContainer, null,
                react_1["default"].createElement(HeaderTitle, null, "Our Links"),
                react_1["default"].createElement(LinksList, null,
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "Home")),
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "About Us")),
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "Services")),
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "Models")),
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "Blog")))),
            react_1["default"].createElement(SectionContainer, null,
                react_1["default"].createElement(HeaderTitle, null, "Other Links"),
                react_1["default"].createElement(LinksList, null,
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "FAQ")),
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "Contact Us")),
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "Support")),
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "Privacy Policy")),
                    react_1["default"].createElement(ListItem, null,
                        react_1["default"].createElement("a", { href: "#" }, "Terms & Conditions")))),
            react_1["default"].createElement(SectionContainer, null,
                react_1["default"].createElement(HeaderTitle, null, "Call Now"),
                react_1["default"].createElement(HorizontalContainer, null,
                    react_1["default"].createElement(RedIcon, null,
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPhoneAlt })),
                    react_1["default"].createElement(SmallText, null, "+91 555-234-8469"))),
            react_1["default"].createElement(SectionContainer, null,
                react_1["default"].createElement(HeaderTitle, null, "Mail"),
                react_1["default"].createElement(HorizontalContainer, null,
                    react_1["default"].createElement(RedIcon, null,
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEnvelope })),
                    react_1["default"].createElement(SmallText, null, "info@yourcar.com")))),
        react_1["default"].createElement(BottomContainer, null,
            react_1["default"].createElement(CopyrightText, null,
                "Copyright \u00A9 ",
                new Date().getFullYear(),
                " Yourcar. All rights reserved."))));
}
exports.Footer = Footer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27;
