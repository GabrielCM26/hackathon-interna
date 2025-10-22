const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// List all events
router.get('/', eventController.getAllEvents);
router.post('/', eventController.createEvent);
router.put('/:id/join', eventController.joinEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
