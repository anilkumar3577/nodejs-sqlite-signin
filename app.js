const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Initialize SQLite database
const db = new sqlite3.Database('database.db');

// Create a users table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  )
`);

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Handle sign-in POST requests
app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  // Simulate user authentication (replace this with actual authentication logic)
  // Here, we're just checking if the username and password are the same.
  if (username === password) {
    res.status(200).json({ message: 'Sign-in successful!' });
  } else {
    res.status(401).json({ message: 'Sign-in failed. Incorrect username or password.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
