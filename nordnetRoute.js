const express = require("express");
const axios = require("axios");

module.exports = app => {
  app.get("/api/positions", async (req, res) => {
    const data = await axios.get(
      "https://www.shareville.no/api/v1/portfolios/324475/positions"
    );
    res.send(data.data);
  });
};
