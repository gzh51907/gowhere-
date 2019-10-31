import axios from 'axios';

let list = axios.create({
    baseURL: 'http://localhost:12345/list'
})
let special = axios.create({
    baseURL: 'http://localhost:12345/list'
})

export default {
    list,
    special
}