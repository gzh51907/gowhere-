const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');

const colName = 'list';

Router.get('/', async (req, res) => {
    // console.log(req.query)
    let { page, tabName } = req.query;
    let result = await mongo.find(colName, { tabName });
    let currentRes = result[0].list;
    let star = (page - 1) * 10;
    let newRes = currentRes.splice(star, 10)
    // console.log(newRes)
    res.send(newRes);
})


module.exports = Router;