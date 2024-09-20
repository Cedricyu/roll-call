const mysql = require("mysql2");

// Create a connection pool to MySQL
const pool = mysql.createPool({
  host: 'my_mysql', // Container name for MySQL
  user: "root",
  password: "password",
  database: "testdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

// Function to get a student by ID
async function getStudents(id) {
  try {
    const [rows] = await pool.query("SELECT name FROM STUDENTS WHERE id = ?", [id]);
    return rows[0]; // Return the first row
  } catch (err) {
    console.error("Error fetching student:", err);
    throw err;
  }
}

// Function to add a new student
async function addStudents(id, name) {
  try {
    await pool.query("INSERT INTO STUDENTS (id, name) VALUES (?, ?)", [id, name]);
    console.log(`Student ${name} added with ID ${id}`);
  } catch (err) {
    console.error("Error adding student:", err);
    throw err;
  }
}

// Function to add a new event column to the STUDENTS table
async function addEvent(columnName) {
  try {
    // Check if column already exists
    const [rows] = await pool.query(`
      SELECT COUNT(*) AS count
      FROM information_schema.COLUMNS
      WHERE TABLE_NAME = 'STUDENTS' AND COLUMN_NAME = ?`,
      [columnName]
    );

    if (rows[0].count === 0) {
      await pool.query(`ALTER TABLE STUDENTS ADD COLUMN ${columnName} BOOLEAN DEFAULT false`);
      console.log(`Column ${columnName} added.`);
    } else {
      console.log(`Column ${columnName} already exists.`);
    }
  } catch (err) {
    console.error("Error adding event column:", err);
    throw err;
  }
}

// Function to update a student's event to true
async function updateEventToTrue(studentId, week) {
  try {
    const column = week; // Assume `week` is a valid column name
    const [result] = await pool.query(`UPDATE STUDENTS SET ${column} = true WHERE id = ?`, [studentId]);
    console.log(`Updated ${column} for student ${studentId}`);
  } catch (err) {
    console.error("Error updating event:", err);
    throw err;
  }
}

// Function to print the entire STUDENTS table
async function printTable() {
  try {
    const [rows] = await pool.query("SELECT * FROM STUDENTS");
    return rows; // Return all rows from the table
  } catch (err) {
    console.error("Error fetching table data:", err);
    throw err;
  }
}

// Function to update or insert students
async function update_students(students, week) {
  for (const student of students) {
    try {
      // Check if the student exists
      const [rows] = await pool.query('SELECT COUNT(*) AS count FROM STUDENTS WHERE id = ?', [student.學號]);
      const count = rows[0].count;

      if (count > 0) {
        // Update the existing student
        const column = `week${week}`;
        await pool.query(`UPDATE STUDENTS SET ${column} = 1 WHERE id = ?`, [student.學號]);
        console.log(`Updated week${week} for student ${student.學號}`);
      } else {
        // Insert a new student
        const values = [student.學號, student.姓名];
        for (let i = 1; i <= 16; i++) {
          values.push(i === Number(week) ? 1 : 0);
        }
        await pool.query(`
          INSERT INTO STUDENTS (id, name, week1, week2, week3, week4, week5, week6, week7, week8, week9, week10, week11, week12, week13, week14, week15, week16)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          values
        );
        console.log(`Inserted student with ID ${student.學號}`);
      }
    } catch (error) {
      console.error(`Error updating student ${student.學號}:`, error);
      throw error;
    }
  }
}

module.exports = { 
  pool, 
  getStudents, 
  addStudents,
  addEvent,
  printTable,
  updateEventToTrue,
  update_students
};
