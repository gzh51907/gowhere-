import axios from 'axios';
<<<<<<< HEAD
let gowhere = axios.create({
    baseURL:'http://localhost:12345'
})
async function get(params, config = {}) {  
    let { data } = await gowhere.get('/home', {
        ...config,
=======

let gowhere = axios.create({
    baseURL: 'http://localhost:12345'
})


async function list(params) {
    let data  = await gowhere.get('/list', {
>>>>>>> 3cec31e772c2e19eda985df87c0ea1e11a7ba78e
        params
    });
    return data;
}

<<<<<<< HEAD
=======
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


>>>>>>> 3cec31e772c2e19eda985df87c0ea1e11a7ba78e
export default {
    list,
    checkAttention,
    addAttention,
    special,
}