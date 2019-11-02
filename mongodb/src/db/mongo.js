const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const { DBurl, DBname } = require('../config.json');


// 连接mongodb
async function connect() {
    let result;

    try {
        let client = await MongoClient.connect(DBurl,{ useNewUrlParser: true,useUnifiedTopology: true });

        let db = client.db(DBname);

        result = {client,db}

    } catch (err) {  
        result = err;
    }
    return result
}


//增
async function create(colName, data) {
    let { db, client } = await connect();

    let col = db.collection(colName); // 获取集合

    let result = await col.insertMany(data);

    client.close();

    return result;
}


// //删

async function remove(colName, query) {

    let { db, client } = await connect();

    let col = db.collection(colName);

    let result = await col.deleteMany(query);

    client.close();

    return result;
}


// //改
async function update(colName, query, data) {
    let { db, client } = await connect();
    // 获取集合
    let col = db.collection(colName);

    let result = await col.updateMany(query, data);
    client.close();
    return result;
}



// //查
async function find(colName, query = {}) {
    let { db, client } = await connect();
    let col = db.collection(colName);

    // 查询数据库
    let result = await col.find(query).toArray();

    // 关闭数据库连接
    client.close();
    //返回结果
    return result;
}

module.exports = {
    create,
    remove,
    update,
    find
} 










