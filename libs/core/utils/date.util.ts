import { DateFormat } from "../../common/enums";



export function ConvertDateToString(date: Date, format: DateFormat): string {
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
        case DateFormat.MMDDYYYYS:
            returnString = `${month}/${day}/${year}`;
            break;
        case DateFormat.MMDDYYYYP:
            returnString = `${month}.${day}.${year}`;
            break;
        default:
            break;
    }
    return returnString;
}

function convertNumberTwoDigitString(value: number): string {
    if (value >= 0 && value < 10)
        return "0" + value.toString();
    else
        return value + value.toString()
}