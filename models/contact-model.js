const { ObjectId } = require('mongodb') // import ObjectId to work with MongoDB IDs
const { getDB } = require('../database/mongo') // import the function to get the database connection

// define the MongoDB collection name
const COLLECTION = 'contacts'

/* ************************************
 *  Get all contacts
 * ************************************ */
async function getAllContacts() {
  const db = getDB()
  return db.collection(COLLECTION).find({}).toArray()
}

/* ************************************
 *  Get a single contact by _id
 * ************************************ */
async function getContactById(id) {
  const db = getDB()
  return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) })
}

/* ************************************
 *  Create a contact (for future use)
 * ************************************ */
//async function addContact(contact) {
//  const db = getDB()
//  const result = await db.collection(COLLECTION).insertOne(contact)
//  return { insertedId: result.insertedId }
//}

module.exports = {
  getAllContacts,
  getContactById
}
