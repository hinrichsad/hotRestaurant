// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const newTable = [
  {
    name: "Andy",
    contact: "12345",
    email: "hinrichsad@gmail.com",
    uniqueId: 1,
  },
  {
    name: "Chris",
    contact: "54321",
    email: "chris@gmail.com",
    uniqueId: 2,
  },
  {
    name: "Jeezy",
    contact: "11111111",
    email: "test@gmail.com",
    uniqueId: 3,
  },
];

// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));

// Displays all characters
app.get('/makeres', (req, res) => res.json(newTable));

// Displays a single character, or returns false
app.get('/makeres/:res', (req, res) => {
  const rezzy = req.params.reservation;

  console.log(rezzy);

  /* Check each character routeName and see if the same as "chosen"
   If the statement is true, send the character back as JSON,
   otherwise tell the user no character was found */

  for (let i = 0; i < newTable.length; i++) {
    if (chosen === newTable[i].name) {
      return res.json(newTable[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post('/makeres', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.name = newTable.name.replace(/\s+/g, '').toLowerCase();
  console.log(newTable);

  characters.push(newTable);
  res.json(newTable);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
