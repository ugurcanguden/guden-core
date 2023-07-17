"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGUID = exports.isIncludeValue = exports.isNullOrEmptyString = void 0;
const object_util_1 = require("./object.util");
function isNullOrEmptyString(value) {
    return (0, object_util_1.isNullOrUndefined)(value) || (typeof (value) === "string" && value.length == 0);
}
exports.isNullOrEmptyString = isNullOrEmptyString;
function isIncludeValue(searchString, source, isCaseSensitive = false) {
    return isCaseSensitive ?
        source.indexOf(searchString) >= 0 :
        source.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > 0;
}
exports.isIncludeValue = isIncludeValue;
function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.generateGUID = generateGUID;
//# sourceMappingURL=string.util.js.map