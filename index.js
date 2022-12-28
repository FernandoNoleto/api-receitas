const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const receitas = require("./src/receitas/receitas.json")

app.get("/receitas", (req,res) => {
    return res.json(receitas)
})


app.listen(port, ()=>{
    console.log("servidor está rodando...")
})