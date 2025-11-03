const express = require('express')
const router = express.Router()
const controller = require('../controllers/contactController')

router.get('/', controller.getAll) // Route to get all contacts
router.get('/:id', controller.getOne) // Added route to get a contact by ID
router.post('/', controller.create) // Route to create a new contact for future use
router.put('/:id', controller.update) // Route to update a contact by ID
router.delete('/:id', controller.remove) // Route to delete a contact by ID

module.exports = router