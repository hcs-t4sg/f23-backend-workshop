const express = require("express");
const router = express.Router();

const APIRoutes = (router) => {
  router.get("/", (req, res) => {
    return res.send(
      "In this workshop, we will be buidling an API to handle T4SG member information."
    );
  });
};


APIRoutes(router)

module.exports = router 

