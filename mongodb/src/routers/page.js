const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');


//查询特卖
Router.get('/', async (req, res) => {
    let result = await mongo.find('temai');
    res.send(result)
})


//查询尾单特惠
Router.get('/pagef', async (req, res) => {
    // console.log(req.query)
    let { page } = req.query;
    let result = await mongo.find('weidantehui');
    console.log(result)
    let star = (page - 1) * 10;
    let newRes = result.splice(star, 10)
    console.log(newRes)
    res.send(newRes);
})


//查询低价预售
Router.get('/pages', async (req, res) => {
    // console.log(req.query)
    let { page } = req.query;
    let result = await mongo.find('dijiayushou');
    console.log(result)
    let star = (page - 1) * 10;
    let newRes = result.splice(star, 10)
    console.log(newRes)
    res.send(newRes);
})


//查询超值自由行
Router.get('/paget', async (req, res) => {
    // console.log(req.query)
    let { page } = req.query;
    let result = await mongo.find('chaozhiziyouxingou');
    console.log(result)
    let star = (page - 1) * 10;
    let newRes = result.splice(star, 10)
    console.log(newRes)
    res.send(newRes);
})

module.exports = Router;


