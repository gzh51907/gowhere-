const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');
const { formatData, token } = require('../utils');


const colName = 'user';

// 注册
Router.post('/reg', async (req, res) => {
    let { username, password } = req.query;
    console.log(username, password);
    let time = new Date();
    let result
    try {
        await mongo.create(colName, [{ username, password, regtime: time.toLocaleString() }]);
        result = formatData()
    } catch (err) {
        result = formatData({ code: 0 })
    }
    res.send(result);
})

Router.get('/check', async (req, res) => {
    let { username } = req.query;
    let result = await mongo.find(colName, { username });
    if (result.length) {
        res.send(formatData({ code: 0 }))// 
    } else {
        res.send(formatData());
    }
})

// 登录
Router.get('/login', async (req, res) => {
    let { username, password, mdl } = req.query;

    let result = await mongo.find(colName, { username, password });

    if (result.length > 0) {
        // 如用户需要免登陆操作，则生成一个token并返回给前端
        let Authorization
        if (mdl) {
            Authorization = token.create(username)
        }
        res.send(formatData({ data: Authorization }));
    } else {
        res.send(formatData({ code: 0 }))
    }
})



//查询所有用户
Router.get('/', async (req, res) => {
    let result = await mongo.find(colName);
    res.send(result)
})


//查找某个用户
Router.get('/find', async (req, res) => {
    let { username } = req.query;
    let result = await mongo.find(colName, { username });
    res.send(result)
})


//增加用户
Router.post('/adduser', async (req, res) => {
    let { username, password } = req.query;
    let result = await mongo.create(colName, [{ username, password }])
    res.send(result)
})








module.exports = Router;






