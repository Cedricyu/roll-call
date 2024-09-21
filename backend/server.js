const express = require("express");
const cors = require("cors");
const session = require("express-session");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const {
  printTable,
  getStudents,
  updateEventToTrue,
  deleteStudent,
  addStudents,
} = require("./db");

const app = express();
const sessionStore = new session.MemoryStore();

app.use(cors());
app.use(express.json());

// Session Configuration
app.use(
  session({
    secret: "sessionId",
    name: "user",
    saveUninitialized: false,
    resave: true,
    store: sessionStore,
    cookie: {
      maxAge: 30 * 60 * 1000, // 30 minutes
    },
  })
);

// Log request body
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// Login Route
const users = [
  {
    firstName: "cedric",
    password: "891130",
  },
];

app.post("/login", (req, res) => {
  console.log(req.headers);
  const { username, password } = req.body;
  if (username.trim() === "" || password.trim() === "") {
    return res.send({
      message: "Password or username is incorrect, please try again!",
    });
  }
  for (let user of users) {
    if (user.firstName === username && user.password === password) {
      req.session.user = user.firstName;
      console.log(req.session);
      return res.status(200).json({
        success: true,
        message: "Password or email is correct, welcome!",
      });
    }
  }
  return res.status(400).json({
    success: false,
    message: "Password or email is incorrect, please try again!",
  });
});

// Logout Route
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    console.log("Session destroyed");
  });
  res.send({ message: "Goodbye, have a nice day!" });
});

// Print Table Route
app.get("/printTable", async (req, res) => {
  try {
    const result = await printTable();
    res.send(result);
  } catch (error) {
    console.error("Error fetching table:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the table." });
  }
});

app.get("/students/:id", async (req, res, next) => {
  const result = await getStudents(req.params.id);
  res.send(result);
  res.send({ message: "Successfully added student!" }); // Sending a response back to the client
});

app.post("/students", async (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({
      success: false,
      message: "Student ID and name are required.",
    });
  }

  try {
    await addStudents(id, name);
    res.status(201).json({
      success: true,
      message: "Student added successfully!",
    });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while adding the student.",
    });
  }
});


app.put("/students/:id/week/:week", async (req, res) => {
  const { id, week } = req.params;

  // Validate week number
  if (isNaN(week) || week < 1 || week > 16) {
    return res
      .status(400)
      .send({ message: "Invalid week number. It should be between 1 and 16." });
  }

  const weekColumn = `week${week}`;

  try {
    await updateEventToTrue(id, weekColumn);

    res.send({
      message: `Successfully updated student ID ${id} for ${weekColumn}.`,
    });
  } catch (error) {
    console.error("Error updating student week:", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the student." });
  }
});

app.delete("/students/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteStudent(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: `Student with ID ${id} not found.`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Student with ID ${id} deleted successfully.`,
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the student.",
    });
  }
});


// app.get("/backup", (req, res) => {
//   // Define the path and filename for the backup
//   const backupFile = path.join(__dirname, `backup_${Date.now()}.sql`);

//   // Use mysqldump to create a backup of the database
//   const command = `docker exec my_mysql mysqldump -u root -ppassword testdb > ${backupFile}`;

//   exec(command, (err, stdout, stderr) => {
//     if (err) {
//       console.error(`Error during backup: ${stderr}`);
//       return res.status(500).json({
//         success: false,
//         message: "An error occurred during the backup.",
//       });
//     }

//     // Read the backup file and send it as a download
//     fs.readFile(backupFile, (err, data) => {
//       if (err) {
//         console.error(`Error reading backup file: ${err}`);
//         return res.status(500).json({
//           success: false,
//           message: "An error occurred while reading the backup file.",
//         });
//       }

//       res.setHeader("Content-Disposition", `attachment; filename=${path.basename(backupFile)}`);
//       res.setHeader("Content-Type", "application/sql");
//       res.send(data);

//       // Optionally delete the backup file after sending it
//       fs.unlink(backupFile, (err) => {
//         if (err) console.error(`Error deleting backup file: ${err}`);
//       });
//     });
//   });
// });

// Server Configuration
const port = 8090;
const host = "0.0.0.0";

// Start the server
app.listen(port, host, () => {
  console.log(`Backend running on http://${host}:${port}`);
});
