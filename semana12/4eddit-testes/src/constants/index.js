export const turnsDate = (createdAt) => {

    let creationDate = new Date(createdAt)

    let year = creationDate.getFullYear()
    let month = JSON.stringify(creationDate.getMonth() + 1)
    if (month < 10) {
        month = '0' + month
    }
    let day = creationDate.getDate()
    if (day < 10) {
        day = '0' + day
    }

    let newDate = `(${day}/${month}/${year})`

    return newDate

}