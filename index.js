const express = require("express")

const router = require("./routes/router")

const app = express();
const port = 8080;

app.use(express.json())
app.use( "/", router)

try{
    app.listen(port, ()=>{
        console.log("Rodando servidor na porta "+port)
    })
}
catch{
    console.log("Erro no servidor!")
}

module.exports = app;