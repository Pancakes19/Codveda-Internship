console.log("starting server......");

const express = require('express');                    // importing Express to build a web server
const app = express();                                  // creating an express app(which is the server) 
app.use(express.json());                                // middle ware that allowsthe server to read JSON data from requests
const creatures = [];                                   // creating an empty array for our creatures

app.get('/creatures', (req, res) => {
    res.
});

app.get('/', (req, res) => {                            // create a route to the homepage '/'
    res.send("Mythical creatures API is running");      // sending a message back to the browser or client
});

app.listen(3000, () => {                                // start the server and make listen on port 3000
    console.log("Server running on port 3000");         // print a message in the terminal when the server starts
});