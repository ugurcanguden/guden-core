import { isNullOrUndefined } from "./object.util";

export function isNullOrEmptyString(value:any):boolean{
    return isNullOrUndefined(value)||(typeof(value) ==="string" && value.length == 0)
}
export function isIncludeValue(searchString : string,source : string,isCaseSensitive : boolean = false):boolean{
   return isCaseSensitive ? 
   source.indexOf(searchString)>=0: 
   source.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase())>0; 
}
export function generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  