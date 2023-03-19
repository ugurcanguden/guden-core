"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortArray = exports.divideArray = exports.isNullOrEmptyArray = void 0;
var object_util_1 = require("./object.util");
/**
 * array control
 * @param value
 * @returns
 */
function isNullOrEmptyArray(value) {
    return !(!(0, object_util_1.isNullOrUndefined)(value) && Array.isArray(value) && value.length > 0);
}
exports.isNullOrEmptyArray = isNullOrEmptyArray;
/**
 * divide array ..
 * @param array
 * @param size
 * @returns
 */
function divideArray(array, size) {
    var _a;
    var arrayGroupList = [];
    var arrayIndex = 0, topLevel = 1;
    while (arrayIndex < array.length) {
        arrayGroupList.push((_a = {}, _a["".concat(topLevel++)] = array.slice(arrayIndex, arrayIndex += size), _a));
    }
    return arrayGroupList;
}
exports.divideArray = divideArray;
function sortArray(array, key, isDesc) {
    if (isDesc === void 0) { isDesc = false; }
    array = array.sort(function (a, b) {
        if (a[key] instanceof Date && b[key] instanceof Date)
            return isDesc ? (a[key].getTime() - b[key].getTime()) : (b[key].getTime() - a[key].getTime());
        else if (typeof (a[key]) == 'number' && typeof (b[key]) == 'number')
            return isDesc ? (a[key] > b[key] ? 1 : -1) : (b[key] > a[key] ? 1 : -1);
        else
            return isDesc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    });
    return array;
}
exports.sortArray = sortArray;
