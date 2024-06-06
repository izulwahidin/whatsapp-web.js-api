const client = require('../index');
const { MessageMedia } = require('whatsapp-web.js');

exports.sendMessage = async (number, message) => {
    number = number.toString().includes('@c.us') ? number : `${number}@c.us`;
    const result = await client.sendMessage(number, message);
    return result;
};

exports.sendMedia = async (number, mediaUrl) => {
    number = number.toString().includes('@c.us') ? number : `${number}@c.us`;
    const media = await MessageMedia.fromUrl(mediaUrl);
    const result = await client.sendMessage(number, media);
    return result;
};

// Add more service methods as needed
