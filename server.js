const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});