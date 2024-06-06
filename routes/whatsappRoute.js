const express = require('express');
const router = express.Router();
const whatsappController = require('../controllers/whatsappController');

router.post('/send-message', whatsappController.sendMessage);
router.post('/send-media', whatsappController.sendMedia);
// Add more routes as needed

module.exports = router;
