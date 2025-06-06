// Backend Starter (safe test code)
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Backend works!'));
app.listen(5000, () => console.log('Server is running'));
