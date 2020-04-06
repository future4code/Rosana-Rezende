export function ordenarArrayEmOrdemCrescente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]) {
                let tmp = array[i]
                array[i] = array[j]
                array[j] = tmp
            }
        }
    }    
    return array
}
