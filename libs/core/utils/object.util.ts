export function isNull(value : any):boolean{
    return value === null;
}
export function isUndefined(value : any):boolean{
    return value === undefined;
}
export function isNullOrUndefined(value:any):boolean{
    return isNull(value)||isUndefined(value);
}