const express = require('express');

//instantiating server
const server = express();

//global middleware:
server.use(express.json()); // built-in mw
// server.use(logger);


server.get('/', (req, res) => {
    res.send(`<h2>Let's do this wk 2 challenge!</h2>`)
  });


  //routing and API:
  
const projectRouter = require('./data/routers/projectRouter.js');
server.use('/api', projectRouter);
module.exports = server;