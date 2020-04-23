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
                const replaces: any = {
                    sed: '\x1b[31msed\x1b[0m',
                    ' id ': '\x1b[31m id \x1b[0m',
                    ' do ': '\x1b[36m do \x1b[0m'
                }
                const resultFormated = result.join()
                const resultWithSedRed = resultFormated.replace(/sed| id | do /g, i => replaces[i])
                console.log(resultWithSedRed)
            })
            .catch(err => {
                console.log(err)
            })        
    }
})