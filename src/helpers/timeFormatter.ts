import { monthsName } from "@/consts";

export function secondsToMinutes(seconds:number) {
    const minutes = Math.floor(seconds / 60);
    const restSeconds = Math.floor(seconds % 60)
    return `${minutes.toFixed()}:${restSeconds.toFixed()}`;
}

export function commentsDateFormat(dateString:string) {
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDay();

    return `${monthsName[monthIndex]} ${day}, ${year}`
}