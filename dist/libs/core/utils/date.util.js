"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertDateToString = void 0;
const enums_1 = require("../../common/enums");
function ConvertDateToString(date, format) {
    if (date == null)
        return "";
    date = new Date(date);
    const day = convertNumberTwoDigitString(date.getDate());
    const month = convertNumberTwoDigitString(date.getMonth() + 1); // Ayın başlangıcı 0 ile temsil edilir, bu yüzden 1 ekliyoruz.
    const year = date.getFullYear().toString();
    switch (format) {
        case enums_1.DateFormat.DDMMYYYYP:
            return `${day}.${month}.${year}`;
        case enums_1.DateFormat.DDMMYYYYS:
            return `${day}/${month}/${year}`;
        case enums_1.DateFormat.MMDDYYYYS:
            return `${month}/${day}/${year}`;
        case enums_1.DateFormat.MMDDYYYYP:
            return `${month}.${day}.${year}`;
        default:
            return "";
    }
}
exports.ConvertDateToString = ConvertDateToString;
function convertNumberTwoDigitString(num) {
    return num < 10 ? `0${num}` : num.toString();
}
//# sourceMappingURL=date.util.js.map