"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIncludeValue = exports.isNullOrEmptyString = void 0;
var object_util_1 = require("./object.util");
function isNullOrEmptyString(value) {
    return (0, object_util_1.isNullOrUndefined)(value) || (typeof (value) === "string" && value.length == 0);
}
exports.isNullOrEmptyString = isNullOrEmptyString;
function isIncludeValue(searchString, source, isCaseSensitive) {
    if (isCaseSensitive === void 0) { isCaseSensitive = false; }
    return isCaseSensitive ?
        source.indexOf(searchString) >= 0 :
        source.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > 0;
}
exports.isIncludeValue = isIncludeValue;
