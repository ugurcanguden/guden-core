import { isNullOrUndefined } from "./object.util";

export function isNullOrEmptyArray(value:any):boolean{
    return !(isNullOrUndefined(value)&&Array.isArray(value)&&value.length>0)

}