const express = require("express");
const morgan = require("morgan");
const path = require("path");

const routes = require("./routes/task.routes")
const { mongoose } = require("./db");

const app = express();

// Settings

app.set("port", process.env.PORT || 2727 );

// Middlewares

app.use(morgan('dev'));
app.use(express.json());

// Routes

app.use("/api/task",routes);

// Static source 

app.use(express.static(path.join(__dirname,"public")));

// Listeting

app.listen(app.get("port"),()=> {
  console.log(`Server listeing on port:${app.get("port")}`);
})