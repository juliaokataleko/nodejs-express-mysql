const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
})

app.get('/sobre', (req, res) => {
    // res.send("Minha Página Sobre...")
    res.sendFile(__dirname + "/public/html/sobre.html")
}) 

// tem que ser sempre a ultima linha
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081/");
})
