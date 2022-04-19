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