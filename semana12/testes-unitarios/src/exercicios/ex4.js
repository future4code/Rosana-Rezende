export function removeItensDuplicados(array) {
    const newArray = array.filter((item, index, self) => {
        return self.indexOf(item) === index 
    })
    // const newArray = [...new Set(array)] // maneira alternativa
    return newArray
}
