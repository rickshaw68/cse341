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
 *  Create a contact 
 * ************************************ */
async function addContact(contact) {
  const db = getDB()
  const result = await db.collection(COLLECTION).insertOne(contact)
  return { insertedId: result.insertedId }
}

/* ************************************
 *  Update a contact by _id 
 * ************************************ */
async function updateContact(id, contact) {
  const db = getDB()
  const result = await db.collection(COLLECTION).replaceOne({ _id: new ObjectId(id) }, contact)
  return { modifiedCount: result.modifiedCount }
}
/* ************************************
 *  Delete a contact by _id 
 * ************************************ */
async function deleteContact(id) {
  const db = getDB()
  const result = await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) })
  return { deletedCount: result.deletedCount }
}

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact
}
