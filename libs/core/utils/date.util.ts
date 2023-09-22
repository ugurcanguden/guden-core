import { DateFormat } from "../../common/enums"; 



export function ConvertDateToString(date: Date | null | undefined, format: DateFormat): string {
    if (date == null) 
        return "";     
    date = new Date(date);
    const day = convertNumberTwoDigitString(date.getDate());
    const month = convertNumberTwoDigitString(date.getMonth() + 1); // Ayın başlangıcı 0 ile temsil edilir, bu yüzden 1 ekliyoruz.
    const year = date.getFullYear().toString();

    switch (format) {
        case DateFormat.DDMMYYYYP:
            return `${day}.${month}.${year}`;
        case DateFormat.DDMMYYYYS:
            return `${day}/${month}/${year}`;
        case DateFormat.MMDDYYYYS:
            return `${month}/${day}/${year}`;
        case DateFormat.MMDDYYYYP:
            return `${month}.${day}.${year}`;
        default:
            return "";
    }
}

function convertNumberTwoDigitString(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
}