const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');

const colName = 'user';

//注册
// Router.post('/reg', async (req, res) => {
//     let { username, password } = req.body;
//     let result;

// })


//查询所有用户
Router.get('/', async (req, res) => {
    let result = await mongo.find(colName);
    res.send(result)
})

Router.route('/:id')
    查询用户
    .get(async (req, res) => {
        let result = await mongo.find(colName);
        res.send(result);
    })

    // 删除
    .delete((req, res) => {

    })

    // 用户信息修改
    .patch((req, res) => {

    })




module.exports = Router;






