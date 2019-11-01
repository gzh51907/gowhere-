const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');

const colName = 'content';


Router.get('/addgz', async (req, res) => {
    let { username, name } = req.query;

    let result = await mongo.find('userinf', { name });//查找点击关注的name是否已存在

    if (result.length) {
        res.send(formatData({ code: 0 }))// 存在返回0
    } else {
        let info = await mongo.find(colName, { name });//查找关注的所有帖子
        await mongo.create('userinf',[{username,info}]);//保存帖子和用户
        res.send(formatData());//关注成功返回1；
    }


})


Router.get('/checkgz', async (req, res) => {
    
    let { username } = req.query;

    let result = await mongo.find('userinf', { username });
    res.send(result);
})


module.exports = Router;