const express = require("express");
const cors = require("cors");
const session = require('express-session');
const os = require('os');

const { printTable } = require("./db");

const app = express();
const sessionStore = new session.MemoryStore();

app.use(cors());
app.use(express.json());

// Session Configuration
app.use(session({
  secret: 'sessionId',
  name: 'user',
  saveUninitialized: false,
  resave: true,
  store: sessionStore,
  cookie: {
    maxAge: 30 * 60 * 1000 // 30 minutes
  }
}));

// Log request body
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// Login Route
const users = [
  {
    firstName: 'cedric',
    password: '891130'
  }
];

app.post('/login', (req, res) => {
  console.log(req.headers);
  const { username, password } = req.body;
  if (username.trim() === '' || password.trim() === '') {
    return res.send({ message: 'Password or username is incorrect, please try again!' });
  }
  for (let user of users) {
    if (user.firstName === username && user.password === password) {
      req.session.user = user.firstName;
      console.log(req.session);
      return res.status(200).json({ success: true, message: 'Password or email is correct, welcome!' });
    }
  }
  return res.status(400).json({ success: false, message: 'Password or email is incorrect, please try again!' });
});

// Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    console.log('Session destroyed');
  });
  res.send({ message: 'Goodbye, have a nice day!' });
});

// Print Table Route
app.get("/printTable", async (req, res) => {
  try {
    const result = await printTable();
    res.send(result);
  } catch (error) {
    console.error('Error fetching table:', error);
    res.status(500).json({ error: 'An error occurred while fetching the table.' });
  }
});

// Server Configuration
const port = 8090;
const host = "0.0.0.0";

// Start the server
app.listen(port, host, () => {
  console.log(`Backend running on http://${host}:${port}`);
});
