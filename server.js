const express = require("express");
const server = express();
const actions = require("./data/helpers/actionModel");
const projectroutes = require('./routes/projectroutes');
const actionroutes = require('./routes/actionsroutes');


server.use(express.json());
server.use('/projects', projectroutes);
server.use('/actions', actionroutes);

server.get("/", (req, res) => {
  res.send("Hello");
});


server.listen(5000, () => console.log("~API Listening on 5k~"));
