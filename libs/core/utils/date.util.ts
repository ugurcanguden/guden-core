import { DateFormat } from "../../common/enums";

 

export function ConvertDateToString(date:Date,format : DateFormat):string{
    let returnString = "";
    var day = convertNumberTwoDigitString(date.getDate());
    var month = convertNumberTwoDigitString(date.getMonth());
    var year = date.getFullYear().toString();

    switch (format) {
        case DateFormat.DDMMYYYYP:
            returnString = `${day}.${month}.${year}`
            break;
        case DateFormat.DDMMYYYYS:
            returnString = `${day}/${month}/${year}`;
            break;
        default:
            break;
    }
    return returnString;
}

function convertNumberTwoDigitString(value:number):string {
    value+=1;
    var returnValue = (value>0 && value<10) ? "0" : "";
    return  returnValue+value.toString()  
}