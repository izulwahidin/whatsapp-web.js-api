const client = require('../index');

exports.sendMessage = async (number, message) => {
    number = number.toString().includes('@c.us') ? number : `${number}@c.us`;
    const result = await client.sendMessage(number, message);
    return result;
};

exports.sendMedia = async (number, media) => {
    number = number.toString().includes('@c.us') ? number : `${number}@c.us`;
    const mediaMessage = {
        // Define media message structure here
    };
    const result = await client.sendMessage(number, mediaMessage);
    return result;
};

// Add more service methods as needed
