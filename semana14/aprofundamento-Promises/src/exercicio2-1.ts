import axios, {AxiosResponse} from 'axios'

const baseUrl: string = 'https://jsonplaceholder.typicode.com'
const operation: string = process.argv[4]
const postNumber: string = process.argv[5]
const postNumber2: string = process.argv[6]
const postNumber3: string = process.argv[7]

if(operation === 'getPost'){
    const post: Promise<AxiosResponse> = axios.get(`${baseUrl}/posts/${postNumber}`)
    
    post.then( result => {
            console.log(result.data)
        })
        .catch(err => {
            console.error(err)
        })
} 
else if(operation === 'getPosts'){
    const post1: Promise<AxiosResponse> = axios.get(`${baseUrl}/posts/${postNumber}`)
    const post2: Promise<AxiosResponse> = axios.get(`${baseUrl}/posts/${postNumber2}`)
    const post3: Promise<AxiosResponse> = axios.get(`${baseUrl}/posts/${postNumber3}`)

    Promise.all([post1, post2, post3])
        .then( (result: AxiosResponse[]) => {
            result.map(post => {
                console.log(post.data)
            })
        })
        .catch(err => {
            console.error(err)
        })
}
else if(operation === 'getPostComments'){
    const postComments: Promise<AxiosResponse> = axios.get(`${baseUrl}/comments?postId=${postNumber}`)
    
    postComments.then( result => {
            console.log(result.data)
        })
        .catch(err => {
            console.error(err)
        })
}
else {
    console.log('\x1b[31m' , 'Faça uma operação válida')
}
