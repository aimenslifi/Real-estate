// Simple server starter (paste exactly)
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Backend is working!'));
app.listen(5000, () => console.log('Server running on port 5000'));
