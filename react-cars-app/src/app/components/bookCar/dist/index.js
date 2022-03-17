"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.BookCar = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var react_calendar_1 = require("react-calendar");
require("react-calendar/dist/Calendar.css");
var button_1 = require("../button");
var marginer_1 = require("../marginer");
var responsive_1 = require("../responsive");
var CardContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    min-height:4.3em;\n    box-shadow: 0 1.3px 12px -3px rbga(0,0,0,0.4);\n    ", "\n"], ["\n    min-height:4.3em;\n    box-shadow: 0 1.3px 12px -3px rbga(0,0,0,0.4);\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        flex\n        justify-center\n        items-center\n        rounded-md\n        bg-white\n        pt-1\n        pb-1\n        pr-2\n        pl-2\n        md:pt-2\n        md:pb-2\n        md:pl-9\n        md:pr-9\n    "], ["\n        flex\n        justify-center\n        items-center\n        rounded-md\n        bg-white\n        pt-1\n        pb-1\n        pr-2\n        pl-2\n        md:pt-2\n        md:pb-2\n        md:pl-9\n        md:pr-9\n    "]))));
var ItemContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        flex\n        relative\n    "], ["\n        flex\n        relative\n    "]))));
var SmallIcon = styled_components_1["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        text-gray-700\n        fill-current\n        text-xs\n        md:text-base\n        mr-1\n        md:mr-3\n        ml-1\n    "], ["\n        text-gray-700\n        fill-current\n        text-xs\n        md:text-base\n        mr-1\n        md:mr-3\n        ml-1\n    "]))));
var Icon = styled_components_1["default"].span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        text-red-500\n        fill-current\n        text-xs\n        md:text-base\n        mr-1\n        md:mr-3\n    "], ["\n        text-red-500\n        fill-current\n        text-xs\n        md:text-base\n        mr-1\n        md:mr-3\n    "]))));
var Name = styled_components_1["default"].span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        text-gray-500\n        text-xs\n        md:text-sm\n        cursor-pointer\n        select-none\n    "], ["\n        text-gray-500\n        text-xs\n        md:text-sm\n        cursor-pointer\n        select-none\n    "]))));
var LineSeperator = styled_components_1["default"].span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    width:2px;\n    height:45%;\n    ", "\n"], ["\n    width:2px;\n    height:45%;\n    ",
    "\n"])), twin_macro_1["default"](templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n        bg-gray-300\n        mr-2\n        ml-2\n        md:mr-5 \n        md:ml-5\n    "], ["\n        bg-gray-300\n        mr-2\n        ml-2\n        md:mr-5 \n        md:ml-5\n    "]))));
var DateCalendar = styled_components_1["default"](react_calendar_1["default"])(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    position:absolute;\n    max-width:none;\n    top:2em;\n    left:0;\n    user-select:none;\n\n    ", "\n    \n    @media (min-width: ", ") {\n        top:3.5rem;\n        left:-2em;\n    }\n"], ["\n    position:absolute;\n    max-width:none;\n    top:2em;\n    left:0;\n    user-select:none;\n\n    ",
    "\n    \n    @media (min-width: ", ") {\n        top:3.5rem;\n        left:-2em;\n    }\n"])), function (_a) {
    var offset = _a.offset;
    return offset && styled_components_1.css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n        left:-6em;\n    "], ["\n        left:-6em;\n    "])));
}, responsive_1.SCREENS.md);
function BookCar() {
    var _a = react_1.useState(new Date()), startDate = _a[0], setStartDate = _a[1];
    var _b = react_1.useState(false), isStartCalendarOpen = _b[0], setIsStartCalendarOpen = _b[1];
    var _c = react_1.useState(new Date()), returnDate = _c[0], setReturnDate = _c[1];
    var _d = react_1.useState(false), isReturnCalendarOpen = _d[0], setReturnCalendarOpen = _d[1];
    var toggleStartDateCalendar = function () {
        setIsStartCalendarOpen(!isStartCalendarOpen);
        if (isReturnCalendarOpen)
            setReturnCalendarOpen(false);
    };
    var toggleReturnDateCalendar = function () {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if (isStartCalendarOpen)
            setIsStartCalendarOpen(false);
    };
    return (react_1["default"].createElement(CardContainer, null,
        react_1["default"].createElement(ItemContainer, null,
            react_1["default"].createElement(Icon, null,
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCalendarAlt })),
            react_1["default"].createElement(Name, { onClick: toggleStartDateCalendar }, "Pick Up Date"),
            react_1["default"].createElement(SmallIcon, null,
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: isStartCalendarOpen ? free_solid_svg_icons_1.faCaretUp : free_solid_svg_icons_1.faCaretDown })),
            isStartCalendarOpen && react_1["default"].createElement(DateCalendar, { value: startDate, onChange: setStartDate })),
        react_1["default"].createElement(LineSeperator, null),
        react_1["default"].createElement(ItemContainer, null,
            react_1["default"].createElement(Icon, null,
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCalendarAlt })),
            react_1["default"].createElement(Name, { onClick: toggleReturnDateCalendar }, "Return Date"),
            react_1["default"].createElement(SmallIcon, null,
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: isReturnCalendarOpen ? free_solid_svg_icons_1.faCaretUp : free_solid_svg_icons_1.faCaretDown })),
            isReturnCalendarOpen && (react_1["default"].createElement(DateCalendar, { offset: true, value: returnDate, onChange: setReturnDate }))),
        react_1["default"].createElement(marginer_1.Marginer, { direction: "horizontal", margin: "2em" }),
        react_1["default"].createElement(button_1.Button, { text: "Book Your Ride" })));
}
exports.BookCar = BookCar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
