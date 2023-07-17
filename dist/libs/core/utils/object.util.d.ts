export declare function isNull(value: any): boolean;
export declare function isUndefined(value: any): boolean;
export declare function isNullOrUndefined(value: any): boolean;
export interface IModel {
    [key: string]: any;
}
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
export declare const convertToJSON: (model: IModel) => string;
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
export declare const createModel: (jsonData: string) => IModel;
