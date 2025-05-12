const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// POST endpoint to handle /email requests
app.post('/email', (req, res) => {
    const emailData = req.body;

    // Convert the data to a string and append it to the file
    const formattedData = JSON.stringify(emailData, null, 2) + '\n';

    fs.appendFile('code.txt', formattedData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).send('Server error: Could not save data.');
        }
        res.status(200).send('Data saved to code.txt!');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
