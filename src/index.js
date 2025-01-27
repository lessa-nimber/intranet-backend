const express = require('express');
const app = express();
const PORT = 80;

// Middleware for JSON parsing
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to your Node.js server.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
