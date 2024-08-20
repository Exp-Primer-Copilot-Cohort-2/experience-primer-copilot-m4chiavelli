// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Set up the route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Run this file in the terminal with node comment.js
// Go to http://localhost:3000 to see the output

// The above code creates a simple web server that listens on port 3000 and sends a response of "Hello World!" when you visit the root URL. You can see this message by going to http://localhost:3000 in your browser.