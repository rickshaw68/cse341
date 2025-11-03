const {ObjectId} = require('mongodb') // import ObjectId to work with MongoDB IDs
const model = require('../models/contact-model') // import the contact model

// Fields for POST/PUT requests
const required = ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday']
const hasAll = (b) => required.every((k) => b && b[k]) // check for required fields
const isValidId = (id) => ObjectId.isValid(id) && String(new ObjectId(id)) === id // validate MongoDB ID

/* ************************************
 *  controller to get all contacts
 * ************************************ */
async function getAll(req, res, next) { // controller to get all contacts
  try {
    const contacts = await model.getAllContacts()
    res.status(200).json(contacts)
  } catch (err) {
    next(err)
  }
}

/* ************************************
 *  Controller to get a single contact by _id
 * ************************************ */
async function getOne(req, res, next) {
  try {
    const { id } = req.params
    if (!isValidId(id)) return res.status(400).json({ error: 'Invalid ID' }) // validate ID

    const contact = await model.getContactById(id)
    if (!contact) return res.status(404).json({ error: 'Contact not found' }) // contact not found
    res.status(200).json(contact)
  } catch (err) {
    next(err)
  }
}

/* ************************************
 *  Create a contact 
 * ************************************ */
async function create(req, res, next) {
  try {
    if (!hasAll(req.body)) return res.status(400).json({ error: 'Missing required fields' })
    const dbResult = await model.addContact(req.body) // call the model to add the contact
    res.status(201).json(dbResult) // respond with the result
  } catch (err) { 
    next(err) 
  }
}

/* ************************************
 *  Update a contact by _id 
 * ************************************ */
async function update(req, res, next) {
  try {
    const { id } = req.params
    if (!isValidId(id)) return res.status(400).json({ error: 'Invalid ID' })
    if (!hasAll(req.body)) return res.status(400).json({ error: 'Missing required fields' })

    const { modifiedCount } = await model.updateContact(id, req.body)
    if (!modifiedCount) return res.status(404).json({ error: 'Contact not found' })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

/* ************************************
 *  Delete a contact by _id 
 * ************************************ */
async function remove(req, res, next) {
  try {
    const { id } = req.params
    if (!isValidId(id)) return res.status(400).json({ error: 'Invalid ID' })
    
    const { deletedCount } = await model.deleteContact(id)
    if (!deletedCount) return res.status(404).json({ error: 'Contact not found' })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

module.exports = { getAll, getOne, create, update, remove }
