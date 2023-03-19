/**
 * 
 * @param object 
 * @param keyName 
 */
export function setLocalStorage(object : any,keyName : string){
    localStorage.setItem(keyName, JSON.stringify(object));
} 

/**
 * 
 * @param keyName 
 * @returns 
 */
export function getLocalStoreByName<T>(keyName : string){
    if(!localStorage.getItem(keyName))
        return undefined;
     let a:T = JSON.parse(localStorage.getItem(keyName)!.toString());
     return a;
}
/**
 * 
 * @param keyName 
 */
export function removeLocalStorage(keyName : string){
    localStorage.removeItem(keyName);
} 