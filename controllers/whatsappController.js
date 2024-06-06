const whatsappService = require('../services/whatsappService');

exports.sendMessage = async (req, res) => {
    try {
        const { number, message } = req.body;
        const result = await whatsappService.sendMessage(number, message);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.sendMedia = async (req, res) => {
    try {
        const { number, media } = req.body;
        const result = await whatsappService.sendMedia(number, media);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add more controller methods as needed
