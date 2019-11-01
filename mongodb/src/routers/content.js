const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');
const { formatData, token } = require('../utils');

const colName = 'content';


Router.get('/addgz', async (req, res) => {
    let { username, name } = req.query;
    let names = name;
    let result = await mongo.find('userinf', { names });//查找点击关注的name是否已存在
    console.log(result.length)
    
    if (result.length) {
        res.send(formatData({ code: 0 }))// 存在返回0
    } else {
        let info = await mongo.find(colName, { name });//查找关注的所有帖子
        await mongo.create('userinf',[{username,names,info}]);//保存帖子和用户
        res.send(formatData());//关注成功返回1；
    }


})


Router.get('/checkgz', async (req, res) => {
    
    let { username } = req.query;

    let result = await mongo.find('userinf', { username });
    res.send(result);
})


module.exports = Router;