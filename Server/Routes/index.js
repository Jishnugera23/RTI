const rtiRoute = require("./RTI.route");
const authorityRoute = require("./Authority.route");
const scratchCardRoute = require("./ScratchCard.route");
const express= require("express");
const path =require('path');

function routes(app) {
  // app.get("/", (req, res) => {
  //   console.log(req);
  //   return res.sendFile(__dirname +"/index.html");
  // });
  app.use(express.static(__dirname+"/../Public"+"/build"));
  

  app.use("/rti", rtiRoute);
  app.use("/authority", authorityRoute);
  app.use("/scratchCard", scratchCardRoute);
  app.get('*', (req, res) => {
    console.log("Haan main chala tha");
    res.sendFile(path.join(__dirname, "..","Public",'build', 'index.html'));
  });
}

module.exports = routes;
