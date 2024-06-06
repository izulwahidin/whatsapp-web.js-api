const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
});

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


// Hook Message
client.on('message', async msg => {
  console.log('MESSAGE RECEIVED', msg);

  if (msg.body === '!ping reply') {
      msg.reply('pong');
  } else if (msg.body === '!ping') {
      client.sendMessage(msg.from, 'pong');
  }
  // Add other message handling here
});

client.initialize();

module.exports = client;
