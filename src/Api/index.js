import axios from 'axios';
let datalist = axios.create({
    baseURL: 'http://localhost:12345'
})

async function get(phone, config = {}) {
    console.log(phone)
    let { data } = await datalist.get('/notecode', {
        params:{
            ...config,
            phone
        }        
    })
    return data;
}

export default {
    get
}


