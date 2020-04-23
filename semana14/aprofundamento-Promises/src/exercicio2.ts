import axios, {AxiosResponse} from 'axios'

const baseUrl: string = 'https://jsonplaceholder.typicode.com/posts'
const post1: Promise<AxiosResponse> = axios.get(`${baseUrl}/1`)
const post2: Promise<AxiosResponse> = axios.get(`${baseUrl}/2`)
const post3: Promise<AxiosResponse> = axios.get(`${baseUrl}/3`)

Promise.all([post1, post2, post3])
    .then( (result: AxiosResponse[]) => {
        result.map(post => {
            console.log(post.data.title)
        })
    })
    .catch(err => {
        console.error(err)
    })