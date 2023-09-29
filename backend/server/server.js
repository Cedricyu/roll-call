const { getStudents, addStudents , addEvent , printTable , updateEventToTrue , update_students } = require("./db");

const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");

const con = require("./db");


const session = require('express-session')
const { v4: uuidv4 } = require('uuid');

const sessionStore = new session.MemoryStore();


app.use(session({
  secret: 'sessionId',
  name: 'user', // optional
  saveUninitialized: false,
  resave: true, 
  store: sessionStore,
  cookie: {
    maxAge: 30 * 60 * 1000, // 30 minutes in milliseconds
  },

}))

app.use((req, res, next) => {
  console.log(req.body)
  res.setHeader('Access-Control-Allow-Origin', 'http://35.229.199.168');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



app.get("/students/:id", async (req, res, next) => {
  const result = await getStudents(req.params.id);
  res.send(result);
});

app.post("/students", async (req, res, next) => {
  const result = await addStudents(req.body.id, req.body.name);
  res.send({ message: "Successfully added student!" }); // Sending a response back to the client
});

app.post("/addevent", async (req, res, next) => {
  const result = await addEvent(req.body.columnName);
  res.send({ message: "Successfully added event!" }); // Sending a response back to the client
});

const users = [
  {
    firstName : 'root',
    password : 'password'
  }
]

app.post('/login', (req, res) => {
  
  console.log(req.headers)
  const { username, password } = req.body
  if ( username.trim() === '' || password.trim() === '') {
    return res.send({ message: 'Password or username is incorrect, please try again!' })
  }
  for (let user of users) {
    if (user.firstName === username && user.password === password) {
      // const sessionId = uuidv4()
      // res.set('Set-Cookie',`session=${sessionId}`)
      req.session.user = user.firstName
      console.log(req.session)
      return res.status(200).json({ success: true, message: 'Password or email is correct, welcome!' });
    }
  }
  return res.status(400).json({ success: false, message: 'Password or email is incorrect, please try again!' });
})

app.post('/update', async(req, res) => {
  
  const { student_id } = req.body
  const result = await updateEventToTrue(student_id)
  
  return res.send({ message: 'Password or email is incorrect, please try again!' })
})

app.get('/logout', (req, res) => {
  
  req.session.destroy(() => {
    console.log('session destroyed')
  })
    return res.send({ message: 'GoodBye, Have a nice day!' })
})

app.get("/printSessions", (req, res) => {
  sessionStore.all((err, sessions) => {
    if (err) {
      console.error("Error fetching sessions:", err);
      return res.status(500).send("Internal Server Error");
    }

    console.log("All Sessions:", sessions);
    res.send("Session data has been printed in the server console.");
  });
});

app.get("/printTable", async(req, res) => {
    const result = await printTable();
    //console.log(result);
    res.send(result);
});

app.post("/upload/:weekno", async(req, res) => {
  
  try {
    const week = req.params.weekno;
    console.log('week =', week);
    const result = req.body;
    await update_students(result, week);
    res.json({ message: 'File uploaded and processed successfully.' });
  } catch (error) {
    console.error('Error processing the file:', error);
    res.status(500).json({ error: 'An error occurred during processing.' });
  }
})


const port = 8090;
const host = "0.0.0.0"; // Listen on all available network interfaces

const os = require('os');

// Check if "ens33" interface exists in networkInterfaces
const networkInterfaces = os.networkInterfaces();
const hostIP = networkInterfaces["ens33"] && networkInterfaces["ens33"][0] && networkInterfaces["ens33"][0].address;

if (hostIP) {
  // Use hostIP in your code
  console.log("Server is running at http://" + hostIP + ":" + port);
} else {
  console.error('Failed to retrieve host IP.');
}


const corsOptions = {
  origin: 'http:/35.229.199.168', // Update this to the correct origin
  credentials: true, // Allow cookies to be sent from the frontend
};


app.use(cors(corsOptions));


app.listen(port, host, () => {
  console.log("Running on port " + port);
});
