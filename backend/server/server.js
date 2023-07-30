const { getStudents, addStudents } = require("./db");

const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");
const corsOptions = {
  origin: 'http://192.168.8.124:8080', // Change this to the actual origin of your frontend
  credentials: true, // Allow cookies to be sent from the frontend
};

app.use(cors(corsOptions));

const con = require("./db");

const session = require('express-session')
const { v4: uuidv4 } = require('uuid');

app.use(session({
  secret: 'mySecret',
  name: 'user', // optional
  saveUninitialized: false,
  resave: true, 
}))

app.get("/students/:id", async (req, res, next) => {
  const result = await getStudents(req.params.id);
  res.send(result);
});

app.post("/students", async (req, res, next) => {
  console.log(req.body)
  const result = await addStudents(req.body.id, req.body.name);
  res.send({ message: "Successfully added student!" }); // Sending a response back to the client
});

app.post('/login', (req, res) => {
  const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  //...後略
  ]
  console.log(req.headers)
  const { email, password } = req.body
  if (email.trim() === '' || password.trim() === '') {
    return res.send({ message: 'Password or email is incorrect, please try again!' })
  }
  for (let user of users) {
    if (user.email === email && user.password === password) {
      const sessionId = uuidv4()
      res.set('Set-Cookie',`session=${sessionId}`)
      return res.send({ message: 'Password or email is correct, welcome!' })
    }
  }
  return res.send({ message: 'Password or email is incorrect, please try again!' })
})


app.post('/logout', (req, res) => {
  
    res.set('Set-Cookie',`session=;expires=Sun, 15 Jul 2012 00:00:01 GMT`)
    return res.send({ message: 'GoodBye, Have a nice day!' })
})

const port = 8090;
const host = "0.0.0.0"; // Listen on all available network interfaces

const os = require("os");

const networkInterfaces = os.networkInterfaces();
// console.log(networkInterfaces);

const hostIP = networkInterfaces["ens33"][0].address;

app.listen(port, host, () => {
  console.log("Server is running at http://" + hostIP + ":" + port);
  console.log("Running on port " + port);
});
