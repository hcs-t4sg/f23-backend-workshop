const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../config/dbconnect");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const router = require("../routes/router");


const app = express();
const PORT = process.env["PORT"] || 8000;


/**  setting middlewares */
app.use(helmet())
// enabling body parser to accept post form data
app.use(express.json());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    }));

app.use(cors())
app.use("/api/v1/", router); 

app.get("/", (req, res) => {
  return res.send("Welcome to the T4SG Backend Workshop API!")
})

const listener = app.listen(PORT, async () => {
  await dbConnection(); 
  console.log(
    "App listerning to port",
    "http://localhost:" + listener.address().port
  );
});