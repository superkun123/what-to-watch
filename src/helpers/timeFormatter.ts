export function secondsToMinutes(seconds:number) {
    const minutes = Math.floor(seconds / 60);
    const restSeconds = Math.floor(seconds % 60)
    return `${minutes.toFixed()}:${restSeconds.toFixed()}`;
}