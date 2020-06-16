export function transformTime(seconds: number): string {
    if (seconds < 60) return `${seconds}s`
    
    let sec = seconds % 60
    let secString = sec.toString()

    let minutes = Math.floor((seconds % 3600) / 60)
    let minutesString = minutes.toString()

    let hours = Math.floor(seconds / 3600)
 
    if (seconds < 3599) return `${minutesString}m ${secString}s`

    if (minutes < 10) minutesString = '0' + minutes
    if(sec < 10) secString = '0' + sec
        
    return `${hours}h ${minutesString}m ${secString}s`

}