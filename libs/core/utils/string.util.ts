import { isNullOrUndefined } from "./object.util";

export function isNullOrEmptyString(value:any):boolean{
    return isNullOrUndefined(value)||(typeof(value) ==="string" && value.length == 0)
}
export function isIncludeValue(searchString : string,source : string,isCaseSensitive : boolean = false):boolean{
   return isCaseSensitive ? 
   source.indexOf(searchString)>=0: 
   source.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase())>0; 
}