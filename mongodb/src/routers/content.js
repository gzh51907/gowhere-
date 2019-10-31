const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');

const colName = 'content';


Router.get('/addgz', async (req, res) => {
    let { username, name } = req.query;

    let info = await mongo.find(colName, { name });//查找关注的所有帖子

    let result = await mongo.create('userinf',[{username,info}]);//保存帖子和用户
    
    res.send(result);
})


Router.get('/checkgz', async (req, res) => {
    
    let { username } = req.query;

    let result = await mongo.find('userinf', { username });
    res.send(result);
})


module.exports = Router;