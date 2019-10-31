import axios from 'axios';
let gowhere = axios.create({
    baseURL:'http://localhost:12345'
})
async function get(params, config = {}) {  
    let { data } = await gowhere.get('/home', {
        ...config,
        params
    })
    return data;
}

export default {
    get
}