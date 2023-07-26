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

const port = 8090;
const host = '0.0.0.0'; // Listen on all available network interfaces

const os = require('os');

const networkInterfaces = os.networkInterfaces();
// console.log(networkInterfaces);

const hostIP = networkInterfaces['ens33'][0].address

app.listen(port, host, () => {
    console.log("Server is running at http://" + hostIP + ":" + port);
    console.log("Running on port " + port);
});