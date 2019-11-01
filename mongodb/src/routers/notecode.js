const express = require('express');
const Router = express.Router();
const request = require('request');
const querystring = require('querystring');


Router.get('/', async (req, res) => {
    let phone = req.query.phone;
    let code = Math.floor(Math.random() * 899999 + 100000)

    var queryData = querystring.stringify({
        "mobile": phone,  // 接受短信的用户手机号码
        "tpl_id": "181196",  // 您申请的短信模板ID，根据实际情况修改
        "tpl_value": `#code#=${code}`,  // 您设置的模板变量，根据实际情况修改
        "key": "96a61f0257fbd606c43361696cc97622",  // 应用APPKEY(应用详细页查询)
    });

    var queryUrl = 'http://v.juhe.cn/sms/send?' + queryData;

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 打印接口返回内容
            var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
            console.log(jsonObj)
        } else {
            console.log('请求异常');
        }
    })     
})

module.exports = Router;



