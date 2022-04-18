const express = require('express')
const app = express()

// o express é um framework  orientado a rotas.

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
})

app.get('/sobre', (req, res) => {
    // res.send("Minha Página Sobre...")
    res.sendFile(__dirname + "/public/html/sobre.html")
}) 

app.get('/blog', (req, res) => {
    res.send("Bem-vindo ao meu blog!")
})

// parametros
// formas de tornar as rotas dinamicas

app.get('/ola/:nome/:cargo/:cor', (req, res) => {
    res.send(`<h1>Olá. Seu nome é: ${req.params.nome}</h1>\
    <h2>Séu cargo é:  ${req.params.cargo}\
    <h3>Sua cor favorita é: ${req.params.cor}</h3>`)
})





// tem que ser sempre a ultima linha
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081/");
})