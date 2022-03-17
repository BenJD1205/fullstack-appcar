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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.TopCars = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var car_1 = require("../../components/car");
var slice_1 = require("./slice");
var carService_1 = require("../../services/carService");
var reselect_1 = require("reselect");
var react_responsive_1 = require("react-responsive");
var responsive_1 = require("../../components/responsive");
var react_redux_1 = require("react-redux");
var selectors_1 = require("./selectors");
var MoonLoader_1 = require("react-spinners/MoonLoader");
var react_carousel_1 = require("@brainhubeu/react-carousel");
require("@brainhubeu/react-carousel/lib/style.css");
var TopCarsContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        max-w-screen-lg\n        w-full\n        flex\n        flex-col\n        items-center\n        justify-center\n        pr-4\n        pl-4\n        md:pl-0\n        md:pr-0\n        mb-10\n    "], ["\n        max-w-screen-lg\n        w-full\n        flex\n        flex-col\n        items-center\n        justify-center\n        pr-4\n        pl-4\n        md:pl-0\n        md:pr-0\n        mb-10\n    "]))));
var Title = styled_components_1["default"].h2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        text-3xl\n        lg:text-5xl\n        text-black\n        font-extrabold\n    "], ["\n        text-3xl\n        lg:text-5xl\n        text-black\n        font-extrabold\n    "]))));
var CarsContainer = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        w-full\n        flex\n        flex-wrap\n        justify-center\n        mt-7\n        md:mt-10\n    "], ["\n        w-full\n        flex\n        flex-wrap\n        justify-center\n        mt-7\n        md:mt-10\n    "]))));
var EmptyCars = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    w-full\n    flex\n    justify-center\n    items-center\n    text-sm\n    text-gray-500\n  "], ["\n    w-full\n    flex\n    justify-center\n    items-center\n    text-sm\n    text-gray-500\n  "]))));
var LoadingContainer = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    w-full\n    mt-9\n    flex\n    justify-center\n    items-center\n    text-base\n    text-black\n  "], ["\n    w-full\n    mt-9\n    flex\n    justify-center\n    items-center\n    text-base\n    text-black\n  "]))));
var actionDispatch = function (dispatch) { return ({
    setTopCars: function (cars) { return dispatch(slice_1.setTopCars(cars)); }
}); };
var stateSelector = reselect_1.createSelector(selectors_1.makeSelectTopCars, function (topCars) { return ({
    topCars: topCars
}); });
var wait = function (timeout) { return new Promise(function (rs) { return setTimeout(rs, timeout); }); };
function TopCars() {
    var _this = this;
    var _a = react_1.useState(0), current = _a[0], setCurrent = _a[1];
    var _b = react_1.useState(false), isLoading = _b[0], setLoading = _b[1];
    var isMobile = react_responsive_1.useMediaQuery({ maxWidth: responsive_1.SCREENS.sm });
    var topCars = react_redux_1.useSelector(stateSelector).topCars;
    var setTopCars = actionDispatch(react_redux_1.useDispatch()).setTopCars;
    var fetchTopCars = function () { return __awaiter(_this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, carService_1["default"].getCars()["catch"](function (err) {
                            console.log("Error", err);
                        })];
                case 1:
                    cars = _a.sent();
                    console.log("Cars: ", cars);
                    if (cars)
                        setTopCars(cars);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var testCar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc: "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol"
    };
    var testCar2 = {
        name: "HONDA cITY 5 Seater Car",
        mileage: "20k",
        thumbnailSrc: "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol"
    };
    react_1.useEffect(function () {
        fetchTopCars();
    }, []);
    var isEmptyTopCars = !topCars || topCars.length === 0;
    var cars = (!isEmptyTopCars &&
        topCars.map(function (car) { return react_1["default"].createElement(car_1.Car, __assign({}, car, { thumbnailSrc: car.thumbnailUrl })); })) ||
        [];
    // const cars = [
    //     <Car {...testCar2} />,
    //     <Car {...testCar} />,
    //     <Car {...testCar2} />,
    //     <Car {...testCar} />,
    //     <Car {...testCar} />,
    // ]
    var numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
    return (react_1["default"].createElement(TopCarsContainer, null,
        react_1["default"].createElement(Title, null, "Explore Our Top Deals"),
        isLoading && (react_1["default"].createElement(LoadingContainer, null,
            react_1["default"].createElement(MoonLoader_1["default"], { loading: true, size: 20 }))),
        isEmptyTopCars && !isLoading && react_1["default"].createElement(EmptyCars, null, "No Cars To Show!"),
        !isEmptyTopCars && !isLoading && react_1["default"].createElement(CarsContainer, null,
            react_1["default"].createElement(react_carousel_1["default"], { value: current, onChange: setCurrent, slides: cars, plugins: [
                    "clickToChange",
                    {
                        resolve: react_carousel_1.slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3
                        }
                    }
                ], breakpoints: {
                    640: {
                        plugins: [
                            {
                                resolve: react_carousel_1.slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1
                                }
                            }
                        ]
                    },
                    900: {
                        plugins: [
                            {
                                resolve: react_carousel_1.slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 2
                                }
                            }
                        ]
                    }
                } }),
            react_1["default"].createElement(react_carousel_1.Dots, { value: current, onChange: setCurrent, number: numberOfDots }))));
}
exports.TopCars = TopCars;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
