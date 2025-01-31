const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Middleware to parse JSON and text
app.use(bodyParser.json());
app.use(bodyParser.text());

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Echo server is running');
});

// Echo route
app.post('/', (req, res) => {
    try {
        // Echo back the received body
        res.send(req.body);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(400).send('Error processing request');
    }
});

// Start server
const PORT = process.env.PORT || 8008;
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// Export for testing
module.exports = server;