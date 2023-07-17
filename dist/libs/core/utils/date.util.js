"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertDateToString = void 0;
const enums_1 = require("../../common/enums");
function ConvertDateToString(date, format) {
    let returnString = "";
    var day = convertNumberTwoDigitString(date.getDate());
    var month = convertNumberTwoDigitString(date.getMonth());
    var year = date.getFullYear().toString();
    switch (format) {
        case enums_1.DateFormat.DDMMYYYYP:
            returnString = `${day}.${month}.${year}`;
            break;
        case enums_1.DateFormat.DDMMYYYYS:
            returnString = `${day}/${month}/${year}`;
            break;
        case enums_1.DateFormat.MMDDYYYYS:
            returnString = `${month}/${day}/${year}`;
            break;
        case enums_1.DateFormat.MMDDYYYYP:
            returnString = `${month}.${day}.${year}`;
            break;
        default:
            break;
    }
    return returnString;
}
exports.ConvertDateToString = ConvertDateToString;
function convertNumberTwoDigitString(value) {
    if (value >= 0 && value < 10)
        return "0" + value.toString();
    else
        return value + value.toString();
}
//# sourceMappingURL=date.util.js.map