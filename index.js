const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes=require("./Routes/sigin")

const app = express();
app.use(express.json());
dotenv.config();


app.use("/api/v1/user",routes); //routes middleware
mongoose.connect("mongodb://localhost:27017/pwskill")
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.log(err));

app.listen(8000, () => {
    console.log("Server started on port 8000");
});
