import axios, {AxiosResponse} from 'axios'

const baseUrl: string = 'https://jsonplaceholder.typicode.com/posts'
const operation: string = process.argv[4]
const postNumber: string = process.argv[5]

if(operation === 'getPost'){
    const post: Promise<AxiosResponse> = axios.get(`${baseUrl}/${postNumber}`)
    
    post.then( result => {
            console.log(result.data)
        })
        .catch(err => {
            console.error(err)
        })
} else {
    console.log('\x1b[31m' , 'Faça uma operação válida')
}
