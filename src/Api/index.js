import axios from 'axios';
let gowhere = axios.create({
    baseURL: 'http://localhost:12345'
})

async function getData(params, config = {}) {
    let { data } = await gowhere.get('/home', {
        ...config,
        params
    });
    return data;
}
async function list(params) {
    let data = await gowhere.get('/list', {
        ...config,
        params
    });
    return data;
}
// 获取验证码
async function getCode(phone, config = {}) {
    let data = await gowhere.get('/notecode', {
        params: {
            ...config,
            phone
        }
    })
    return data;
}

async function postReg(params, config = {}) {
    let data = await gowhere.post('/user/reg', {
        params: {
            ...config,
            params
        }
    })
    return data;
}

async function getCheck(params, config = {}) {
    let data = await gowhere.get('/user/check', {
        params: {
            ...config,
            params
        }
    })
    return data;
}


async function Login(params, config = {}) {
    let data = await gowhere.get('/user/login', {
        params: {
            ...config,
            params
        }
    })
    console.log("data", data)
    return data;
}
async function checkAttention(params) {
    let data = await gowhere.get('/content/checkgz', {
        params
    });
    return data;
}

async function addAttention(params) {
    let data = await gowhere.get('/content/addgz', {
        params
    });
    return data;
}

async function special(params) {
    let data = await gowhere.get('/page', {
        params
    });
    return data;
}
async function weidan(params) {
    let data = await gowhere.get('/page/pagef', {
        params
    });
    return data;
}
async function dijia(params) {
    let data = await gowhere.get('/page/pages', {
        params
    });
    return data;
}
async function ziyouxing(params) {
    let data = await gowhere.get('/page/paget', {
        params
    });
    return data;
}
export default {
    list,
    getCode,
    postReg,
    getCheck,
    Login,
    checkAttention,
    addAttention,
    special,
    getData,
    weidan,
    dijia,
    ziyouxing
}

