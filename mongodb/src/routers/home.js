const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');

const colName = 'index';

Router.get('/', async (req, res) => {
    let result = await mongo.find(colName);
    res.send(result)
})

module.exports = Router;

