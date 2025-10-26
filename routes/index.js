const express = require('express'); // Import Express
const router = express.Router(); // Create a router instance
const controller = require('../controllers/index'); // Import the index controller

router.get('/', controller.index); //default route

module.exports = router;