const app=require('../../startup')
const itemModels=require("../Models/itemModels.js")
const path=require("path")
const skinModels=require("../Models/skinModels")

app.get("/getItem",(req,res)=>{
    const item=itemModels
    item.name="Car"
    item.description="Blue Porsche"
    res.json(item.toJSON())
})
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("mvc/Views/itemsView.html"))
})
app.get("/getSkin",(req,res)=>{
    const skin=skinModels
    skin.name="lepo"
    skin.description="É o lepo lepo ooo"
    skin.rare="Épica"
    res.json(skin.toJSON())
})
app.get("/skin",(req,res)=>{
     res.sendFile(path.resolve("mvc/Views/itemsView.html"))
})