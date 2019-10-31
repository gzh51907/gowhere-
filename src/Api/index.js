import axios from 'axios';
let datalist = axios.get({
    baseURL:'http://localhost:27017/gowhere/home'
})
async function get(params, config = {}) {  
    let { data } = await datalist.get('', {
        ...config,
        params
    })
    return data;
}
export default {
    get
}