const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.get('/', donationController.getAllDonations);
router.post('/', donationController.createDonation);
router.get('/stats', donationController.getDonationStats);

module.exports = router;