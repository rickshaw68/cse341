const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactController');

router.get('/', controller.getAll); // Route to get all contacts
router.get('/:id', controller.getOne); // Added route to get a contact by ID

//router.post('/', express.json(), controller.create); // Route to create a new contact for future use

/* ************************************
 *  added to insert contact directly (for testing)
 * ************************************ */
//router.post('/', async (req, res, next) => {
//  const db = require('../database/mongo').getDB();
//  const result = await db.collection('contacts').insertOne(req.body);
//  res.status(201).json({ insertedId: result.insertedId });
//});


module.exports = router;