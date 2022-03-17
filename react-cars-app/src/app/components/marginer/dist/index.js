"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Marginer = void 0;
var styled_components_1 = require("styled-components");
var HorizontalMargin = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  min-width: ", ";\n"], ["\n  display: flex;\n  min-width: ",
    ";\n"])), function (_a) {
    var margin = _a.margin;
    return typeof margin === "string" ? margin : margin + "px";
});
var VerticalMargin = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  min-height: ", ";\n"], ["\n  display: flex;\n  min-height: ",
    ";\n"])), function (_a) {
    var margin = _a.margin;
    return typeof margin === "string" ? margin : margin + "px";
});
function Marginer(props) {
    var direction = props.direction;
    if (direction === "horizontal")
        return __assign({}, props) /  > ;
    else {
        return __assign({}, props) /  > ;
    }
}
exports.Marginer = Marginer;
Marginer.defaultProps = {
    direction: "horizontal"
};
var templateObject_1, templateObject_2;
