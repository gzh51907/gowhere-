const express = require('express');
const Router = express.Router();

const { formatData, token } = require('../utils')

Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else {
        next();
    }

})

const regRouter = require('./reg');
const listRouter = require('./list');
const notecodeRouter = require('./notecode');
const homeRouter = require('./home');
const pageRouter = require('./page');
const contentTRouter = require('./content');

Router.use(express.urlencoded({ extended: true }), express.json());

Router.use('/user', regRouter);
Router.use('/list', listRouter);
Router.use('/notecode', notecodeRouter)
Router.use('/home', homeRouter);
Router.use('/page', pageRouter);
Router.use('/content', contentTRouter);

Router.get('/verify', (req, res) => {
    let Authorization = req.get('Authorization');
    // 校验token有效性
    let result = token.verify(Authorization);
    res.send(formatData({ code: result ? 1 : 0 }))
});


module.exports = Router

