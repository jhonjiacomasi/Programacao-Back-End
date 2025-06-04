const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/agenda";  
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB!");
        return client.db("agenda"); 
    } catch (err) {
        console.error("Erro ao conectar:", err);
    }
}

module.exports = connect;