const express = require("express");
const app = express();
const port = 3000;
x
app.use(express.static(__dirname + "/docs"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:port`);
});