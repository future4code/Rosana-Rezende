import { readdir, readFile } from 'fs'

readdir('./textos', (err: Error, files: string[]) => {
    if (err) {
        console.log(err)
        return
    } else {
        let promises: Promise<string>[] = []
        files.forEach(file => {
            const myPromiseText = new Promise<string>((resolve, reject) => {

                readFile(`./textos/${file}`, (err: Error, data: Buffer) => {
                    try {
                        const fileContent: string = data.toString()
                        resolve(fileContent)
                    } catch (e) {
                        reject(err)
                    }
                })

            })

            // myPromiseText
            //     .then(result => {
            //         console.log(result)
            //     })
            //     .catch(err => {
            //         console.error(err)
            //     })

            promises.push(myPromiseText)

        })

        Promise.all(promises)
            .then(result => {
                const resultado = result.join()
                console.log(resultado)
            })
            .catch(err => {
                console.log(err)
            })        
    }
})