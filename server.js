const express = require('express');
const bodyParser = require('body-parser');
const { Client, LocalAuth, Location, Poll, List, Buttons } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


const app = express();
const port = 3000;

// Initialize WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth(),
    webVersionCache: {
      type: "remote",
      remotePath:
        "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
});

client.initialize();

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', msg => {
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
    console.log('READY');
});

client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);

    if (msg.body === '!ping reply') {
        msg.reply('pong');
    } else if (msg.body === '!ping') {
        client.sendMessage(msg.from, 'pong');
    }
    // Add other message handling here
});

app.use(bodyParser.json())

// Define your API endpoints
app.get('/', (req, res) => {
    res.send('WhatsApp Web API is running');
});

app.post('/send-message', (req, res) => {
    const { number, message } = req.body;
    const chatId = `${number}@c.us`;
    console.log(chatId,message)

    client.sendMessage(chatId, message )
        .then(response => {
            res.status(200).json({ status: 'success', response });
        })
        .catch(err => {
            res.status(500).json({ status: 'error', message: err.message });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
