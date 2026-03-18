console.log("starting server......");

const express = require('express');                     // importing Express to build a web server
const app = express();                                  // creating an express app(which is the server) 
app.use(express.json());                                // middle ware that allowsthe server to read JSON data from requests
const creatures = [];                                   // creating an empty array for our creatures
let nextId = 1;

app.get('/creatures', (req, res) => {                   // a get request that returns an empty creatures array
    res.json(creatures);
});

app.post('/creatures', (req, res) => {                  // a post request to /creatues 
    const creature = req.body;                          // req.body contains the Json data sent from client
    creature.id = nextId;                               // adding id to the creatures
    nextId++;                                           // incrementing id for every creature added
    creatures.push(creature);                           // this adds the new creature object into our creatues array

    res.status(201).json({                              // sending a response back to the client, 201 is the http status code
        message: "Creature added",
        creature: creature                              // this just displays the new creature back to client
    });
});

app.get('/creatures/:id', (req, res) => {               // never write a function without (req, res) because express will not accept it
    const id =  parseInt(req.params.id);                // when the id is past in as a string we convert it into an int
    const creature = creatures.find(c => c.id === id);  // this is a find arrow function

    if (!creature) {
        return res.status(404).json({
            message: "Creature not found"
        });
    }

    res.json(creature);
});

app.put('/creatures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const creature = creatures.find(c => c.id === id);
    if(!creature){
        return res.status(404).json({
            message: "creature not found"
        });
    }
    creature.name = req.body.name;
    creature.power = req.body.power;
    creature.dangerLevel = req.body.dangerLevel;

    res.json({
        message: "Creature update",
        creature: creature
    });
});

app.get('/', (req, res) => {                            // create a route to the homepage '/'
    res.send("Mythical creatures API is running");      // sending a message back to the browser or client
});

app.listen(3000, () => {                                // start the server and make listen on port 3000
    console.log("Server running on port 3000");         // print a message in the terminal when the server starts
});