"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertDateToString = void 0;
var enums_1 = require("../../common/enums");
function ConvertDateToString(date, format) {
    var returnString = "";
    var day = convertNumberTwoDigitString(date.getDate());
    var month = convertNumberTwoDigitString(date.getMonth());
    var year = date.getFullYear().toString();
    switch (format) {
        case enums_1.DateFormat.DDMMYYYYP:
            returnString = "".concat(day, ".").concat(month, ".").concat(year);
            break;
        case enums_1.DateFormat.DDMMYYYYS:
            returnString = "".concat(day, "/").concat(month, "/").concat(year);
            break;
        default:
            break;
    }
    return returnString;
}
exports.ConvertDateToString = ConvertDateToString;
function convertNumberTwoDigitString(value) {
    value += 1;
    var returnValue = (value > 0 && value < 10) ? "0" : "";
    return returnValue + value.toString();
}
