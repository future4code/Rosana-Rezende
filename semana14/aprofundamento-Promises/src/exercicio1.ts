import { readdir, readFile } from 'fs'

const handleFileRead = (err: Error, data: Buffer) => {
    try{
        const fileContent: string = data.toString()
        return fileContent
    } catch(e){
        console.error('Deu erro: ', err)
    }
}

readdir('./textos', (err: Error, files: string[]) => {
    if(err){
        console.log(err)
        return
    } else {
        files.map(file => {
            console.log(file)
            // const content = readFile(file, handleFileRead)
            // console.log(content)
        })
    }
})