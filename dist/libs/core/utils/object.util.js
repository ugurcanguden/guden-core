"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModel = exports.convertToJSON = exports.isNullOrUndefined = exports.isUndefined = exports.isNull = void 0;
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
/**
 * "FIToFICstmrCdtTrf": {
    "GrpHdr": {
      "CreDtTm": "2023-07-26T13:05:19.008Z",
      "NbOfTxs": "1",
      "SttlmInf": {
        "SttlmMtd": "CLRG",
        "ClrSys": {
          "Cd": "TGT"
        }
      }
 * @param model
 * @returns
 *  * '{"FIToFICstmrCdtTrf.GrpHdr.CreDtTm":"2023-07-26T13:05:19.008Z","FIToFICstmrCdtTrf.GrpHdr.NbOfTxs":"1","FIToFICstmrCdtTrf.GrpHdr.SttlmInf.SttlmMtd":"CLRG","FIToFICstmrCdtTrf.GrpHdr.SttlmInf.ClrSys.Cd":"TGT","FIToFICstmrCdtTrf.GrpHdr.CreDtTm[0]":"2023-07-27T09:15:00.000Z","FIToFICstmrCdtTrf.GrpHdr.CreDtTm[1]":"2023-07-28T14:30:00.000Z"}';
 */
const convertToJSON = (model) => {
    const json = {};
    const setNestedValue = (obj, key, value) => {
        const keys = key.split('.');
        let currentObj = obj;
        for (let i = 0; i < keys.length; i++) {
            const currentKey = keys[i];
            if (/\[\d+\]/.test(currentKey)) {
                const arrKey = currentKey.slice(0, currentKey.indexOf('['));
                const index = parseInt(currentKey.slice(currentKey.indexOf('[') + 1, currentKey.indexOf(']')));
                if (!currentObj[arrKey]) {
                    currentObj[arrKey] = [];
                }
                if (i === keys.length - 1) {
                    currentObj[arrKey][index] = value;
                }
                else {
                    if (!currentObj[arrKey][index]) {
                        currentObj[arrKey][index] = {};
                    }
                    currentObj = currentObj[arrKey][index];
                }
            }
            else {
                if (i === keys.length - 1) {
                    currentObj[currentKey] = value;
                }
                else {
                    if (!currentObj[currentKey]) {
                        currentObj[currentKey] = {};
                    }
                    currentObj = currentObj[currentKey];
                }
            }
        }
    };
    for (const key in model) {
        if (model.hasOwnProperty(key)) {
            setNestedValue(json, key, model[key]);
        }
    }
    return JSON.stringify(json);
};
exports.convertToJSON = convertToJSON;
/**
 * '{"FIToFICstmrCdtTrf.GrpHdr.CreDtTm":"2023-07-26T13:05:19.008Z","FIToFICstmrCdtTrf.GrpHdr.NbOfTxs":"1","FIToFICstmrCdtTrf.GrpHdr.SttlmInf.SttlmMtd":"CLRG","FIToFICstmrCdtTrf.GrpHdr.SttlmInf.ClrSys.Cd":"TGT","FIToFICstmrCdtTrf.GrpHdr.CreDtTm[0]":"2023-07-27T09:15:00.000Z","FIToFICstmrCdtTrf.GrpHdr.CreDtTm[1]":"2023-07-28T14:30:00.000Z"}';
 * @param jsonData
 * @returns
 * "FIToFICstmrCdtTrf": {
    "GrpHdr": {
      "CreDtTm": "2023-07-26T13:05:19.008Z",
      "NbOfTxs": "1",
      "SttlmInf": {
        "SttlmMtd": "CLRG",
        "ClrSys": {
          "Cd": "TGT"
        }
      }
 */
const createModel = (jsonData) => {
    const parsedData = JSON.parse(jsonData);
    const model = {};
    const setNestedValue = (obj, key, value) => {
        const keys = key.split('.');
        let currentObj = obj;
        for (let i = 0; i < keys.length; i++) {
            const currentKey = keys[i];
            // Eğer mevcut anahtar bir dizi içinde yer alıyorsa
            if (/\[\d+\]/.test(currentKey)) {
                const arrKey = currentKey.slice(0, currentKey.indexOf('['));
                const index = parseInt(currentKey.slice(currentKey.indexOf('[') + 1, currentKey.indexOf(']')));
                if (!currentObj[arrKey]) {
                    currentObj[arrKey] = [];
                }
                if (i === keys.length - 1) {
                    currentObj[arrKey][index] = value;
                }
                else {
                    if (!currentObj[arrKey][index]) {
                        currentObj[arrKey][index] = {};
                    }
                    currentObj = currentObj[arrKey][index];
                }
            }
            else {
                if (i === keys.length - 1) {
                    currentObj[currentKey] = value;
                }
                else {
                    if (!currentObj[currentKey]) {
                        currentObj[currentKey] = {};
                    }
                    currentObj = currentObj[currentKey];
                }
            }
        }
    };
    for (const key in parsedData) {
        if (parsedData.hasOwnProperty(key)) {
            setNestedValue(model, key, parsedData[key]);
        }
    }
    return model;
};
exports.createModel = createModel;
//# sourceMappingURL=object.util.js.map