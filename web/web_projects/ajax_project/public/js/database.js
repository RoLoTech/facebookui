const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const getAll = async () => {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true })
    try {
        return await client.db("webapps").collection("personas").find({}, { projection: { _id: 0 } }).toArray()
    } catch (e) {
        throw e
    } finally {
        client.close()
    }
}

const deleteById = async (id) => {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true })
    try {
        return (await client.db("webapps").collection("personas").deleteOne({ _id: id }))
    } catch (e) {
        throw e
    } finally {
        client.close()
    }
}

const createUser = async (id, firstName, lastName, age) => {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true })
    try {
        return await client.db("webapps").collection("personas").insertOne(
            { _id: id, nombre: firstName, apellido: lastName, edad: age })
    } catch (e) {
        throw e
    } finally {
        client.close()
    }
}

const updateUser = async (oldID, firstName, lastName, age) => {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true })
    try {
        return await client.db("webapps").collection("personas").updateOne(
            { _id: oldID }, { $set: { nombre: firstName, apellido: lastName, edad: age } })
    } catch (e) {
        throw e
    } finally {
        client.close()
    }
}

module.exports = { getAll, deleteById, createUser, updateUser }
