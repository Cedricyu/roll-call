var mysql = require("mysql2");

var con = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "testdb",
  })
  .promise();

async function getStudents(id) {
  try {
    const [result] = await con.query(
      "SELECT name FROM STUDENTS where id = ?;",
      [id],
    );
    return result[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function addStudents(id, name) {
  try {
    const result = await con.query(
      "insert into STUDENTS (id, name) values (?, ?)",
      [id, name],
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function addEvent(columnName) {
  try {
    const result = await con.query(
      `ALTER TABLE STUDENTS ADD COLUMN ${columnName} BOOLEAN DEFAULT false`
    );
    // Handle the result if needed
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateEventToTrue(studentId) {
  try {
    const result = await con.query(
      `UPDATE STUDENTS SET week1 = true WHERE id = ?`,
      [studentId]
    );
    // Handle the result if needed
  } catch (err) {
    console.log(err);
    throw err;
  }
}


async function printTable(){
  try {
    const result = await con.query(
      `select * from STUDENTS`
    );
      return result
  } catch (err) {
    console.log(err);
    throw err;
  }
}


// Wrap the code inside an async function to use await
async function main() {
  try {
    const students = await getStudents(1234);
    console.log(students);
  } catch (err) {
    console.error("Error fetching students:", err);
  }
}

async function update_students(students,week) {
  for (const student of students) {
    // SQL query to check if the student_id exists
    const sql = 'SELECT COUNT(*) AS count FROM STUDENTS WHERE id = ?';

    const [rows] = await con.query(sql, [student.學號]);
    const count = rows[0].count;

    console.log(count);

    if (count > 0) {
      const sql = `UPDATE STUDENTS SET ${week} = 1 WHERE id = ?`;

      try {
        // Execute the SQL statement with the provided values
        const [result] = await con.query(sql, [student.學號]);
        console.log(`Updated ${week} for student ${student.學號}`);
      } catch (error) {
        console.error(`Error updating week${week}:`, error);
      }
      console.log(`Student with ID ${student.學號} exists in the table.`);
    } else {
      const sql = `
        INSERT INTO STUDENTS (id, name, week1, week2, week3, week4, week5, week6, week7, week8, week9, week10, week11, week12, week13, week14, week15, week16)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [student.學號, student.姓名];
      for (let i = 1; i <= 16; i++) {
        values.push(i === Number(week.substring(4))? 1 : 0);
      }
      const [result] = await con.query(sql, values);
      console.log(`Student with ID ${student.學號} does not exist in the table.`);
    }
    
  }
}


// main(); // Call the async function to execute the code

module.exports = { con, 
  getStudents, 
  addStudents,
  addEvent,
  printTable,
  updateEventToTrue,
  update_students
};
