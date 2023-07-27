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

// Wrap the code inside an async function to use await
async function main() {
  try {
    const students = await getStudents(1234);
    console.log(students);
  } catch (err) {
    console.error("Error fetching students:", err);
  }
}

// main(); // Call the async function to execute the code

module.exports = { con, getStudents: getStudents, addStudents: addStudents };
