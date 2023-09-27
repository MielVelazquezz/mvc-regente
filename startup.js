const express = require("express")
const app = express()

app.listen(3000, () => console.log("Online Server at port 3000"))

module.exports = app;

const itemsControllers=require("./mvc/Controllers/itemsControllers")
