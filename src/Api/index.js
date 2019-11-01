import axios from 'axios';
let gowhere = axios.create({
    baseURL: 'http://localhost:12345'
})

async function get(params, config = {}) {
    let { data } = await gowhere.get('/home', {
        ...config,
        params
    })
    return data;
}


async function getCode(phone, config = {}) {
    let data = await gowhere.get('/notecode', {
        params:{
            ...config,
            phone
        }        
    })
    console.log("data", data)
    return data;
}

async function list(params) {
    let data  = await gowhere.get('/list', {
        params
    });
    return data;
}

async function checkAttention(params) {
    let data  = await gowhere.get('/content/checkgz', {
        params
    });
    return data;
}

async function addAttention(params) {
    let data  = await gowhere.get('/content/addgz', {
        params
    });
    return data;
}

async function special(params) {
    let data  = await gowhere.get('/page', {
        params
    });
    return data;
}


export default {
    get,
    getCode,
    list,
    checkAttention,
    addAttention,
    special,
}
