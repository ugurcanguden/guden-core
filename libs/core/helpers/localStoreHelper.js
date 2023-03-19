"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLocalStorage = exports.getLocalStoreByName = exports.setLocalStorage = void 0;
/**
 *
 * @param object
 * @param keyName
 */
function setLocalStorage(object, keyName) {
    localStorage.setItem(keyName, JSON.stringify(object));
}
exports.setLocalStorage = setLocalStorage;
/**
 *
 * @param keyName
 * @returns
 */
function getLocalStoreByName(keyName) {
    if (!localStorage.getItem(keyName))
        return undefined;
    var a = JSON.parse(localStorage.getItem(keyName).toString());
    return a;
}
exports.getLocalStoreByName = getLocalStoreByName;
/**
 *
 * @param keyName
 */
function removeLocalStorage(keyName) {
    localStorage.removeItem(keyName);
}
exports.removeLocalStorage = removeLocalStorage;
