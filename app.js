const express = require('express');
const app = express();
const whatsappRoutes = require('./routes/whatsappRoute');

app.use(express.json());
app.use('/api', whatsappRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
