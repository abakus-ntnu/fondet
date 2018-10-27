const express = require("express");

const app = express();

require("./nordnetRoute.js")(app);

const PORT = 5000;
app.listen(PORT);
