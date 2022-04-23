const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(() => {
        console.log("Conectado com sucesso");
    })
    .catch(() => {
        console.log("Houve uma falha...");
    })


// Models

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Postagem.sync()
Usuario.sync()

// registar dados
Postagem.create({
    titulo: "Bom dia Benguela",
    conteudo: "A cidade acordou bem hoje."
})

Usuario.create({
    nome: 'Julião',
    sobrenome: 'Kataleko',
    idade: 27,
    email: 'juliofeli78@gmail.com'
})