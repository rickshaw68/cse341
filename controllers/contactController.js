const model = require('../models/contact-model') // import the contact model

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
    const contact = await model.getContactById(req.params.id)
    if (!contact) return res.status(404).json({ error: 'Contact not found' })
    res.status(200).json(contact)
  } catch (err) {
    next(err)
  }
}

/* ************************************
 *  Create a contact (for future use)
 * ************************************ */
//async function create(req, res, next) {
//  try {
//    const dbResult = await model.addContact(req.body)
//    res.status(201).json(dbResult)
//  } catch (err) { next(err) }
//}

module.exports = { getAll, getOne }
