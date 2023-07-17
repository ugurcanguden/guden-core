import { Dictionary } from "../../common/models";
/**
 * array control
 * @param value
 * @returns
 */
export declare function isNullOrEmptyArray(value: any): boolean;
/**
 * divide array ..
 * @param array
 * @param size
 * @returns
 */
export declare function divideArray<T>(array: T[], size: number): Dictionary<T[]>[];
export declare function sortArray(array: any[], key: string, isDesc?: boolean): any[];
