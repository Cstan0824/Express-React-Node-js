const express = require("express");
const app = express();

app.get("/Home", (req, res) => {
    res.json({ message: ["Hello World", "Cstan"] });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
