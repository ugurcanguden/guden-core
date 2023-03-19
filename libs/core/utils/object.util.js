"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrUndefined = exports.isUndefined = exports.isNull = void 0;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isUndefined(value) {
    return value === undefined;
}
exports.isUndefined = isUndefined;
function isNullOrUndefined(value) {
    return isNull(value) || isUndefined(value);
}
exports.isNullOrUndefined = isNullOrUndefined;
