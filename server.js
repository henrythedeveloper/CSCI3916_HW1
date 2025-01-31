const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.text({ type: 'text/plain' }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Echo server is running');
});

app.post('/', (req, res) => {
    if (!req.body) {
        return res.status(400).send('No body received');
    }
    res.send(req.body);
});

const PORT = process.env.PORT || 8008;
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = server;