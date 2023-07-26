const { getStudents , addStudents } = require("./db");


const express = require("express");

const app = express();

app.use(express.json());

const con = require("./db");

app.get('/get/:id',async(req, res, next) =>{

    const result = await getStudents(req.params.id);
    res.send(result);
})

app.post('/add/:id/:name',async(req, res, next) => {

    const result = await addStudents(req.params.id, req.params.name)
    res.send("Successfully added student!"); // Sending a response back to the client
})

app.listen(8090, ()=>{console.log("listening the post 8090")})