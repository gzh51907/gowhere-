const express = require('express');
const { PORT } = require('./config.json');

const allRouter = require('./routers');

const app = express();

app.use(express.static('./'));// 静态资源服务器

app.use(allRouter);



app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
})