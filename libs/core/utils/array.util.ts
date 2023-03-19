import { Dictionary } from "../../common/models";
import { isNullOrUndefined } from "./object.util";
/**
 * array control 
 * @param value 
 * @returns 
 */
export function isNullOrEmptyArray(value: any): boolean {
    return !(!isNullOrUndefined(value) && Array.isArray(value) && value.length > 0)
}
/**
 * divide array ..
 * @param array 
 * @param size 
 * @returns 
 */
export function divideArray<T>(array : T[],size : number):Dictionary<T[]>[]{
    const arrayGroupList : Dictionary<T[]>[]=[];
    let arrayIndex = 0,topLevel  = 1;
    while(arrayIndex <array.length){ 
        arrayGroupList.push({[`${topLevel++}`]:array.slice(arrayIndex,arrayIndex+=size)});
    } 
    return arrayGroupList;
}


export function sortArray(array: any[], key: string, isDesc: boolean = false): any[] {
    array = array.sort((a: any, b: any) => {
      if (a[key] instanceof Date && b[key] instanceof Date)
        return isDesc ? (a[key].getTime() - b[key].getTime()) : (b[key].getTime() - a[key].getTime());
      else if(typeof(a[key])=='number' && typeof(b[key])=='number' )
        return isDesc ? (a[key] > b[key] ? 1 : -1) : (b[key] > a[key] ? 1 : -1);
      else 
        return isDesc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    });
    return array;
}  