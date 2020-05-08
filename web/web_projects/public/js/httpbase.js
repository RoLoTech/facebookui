const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const personas = async () => {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true })
    try {
        return await client.db("webapps").collection("personas").find({}, { projection: { _id: 0 } }).toArray()
    } catch (e) {
        throw e;
    }
    // } finally {
    //     client.close()
    // }
}

module.exports = { personas }