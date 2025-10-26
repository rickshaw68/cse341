const { MongoClient } = require('mongodb');

let client;
let db;

async function connectToDB(uri) {
    if (db) return db
    client = new MongoClient(uri, { maxPoolSize: 10 });
    await client.connect();
    db = client.db();
    await db.collection("professionals").createIndex({ slug: 1 }, { unique: true });
    return db;
}

function getDB() {
    if (!db)
        throw new Error("Database not connected. Call connectToDB first.");
        return db
    }

async function closeDB() {
    if (client) await client.close()
        client = null
        db = null
}

module.exports = { connectToDB, getDB, closeDB };

