// database connection
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

// sequelize.authenticate().then(() => {
//     console.log("Conectado com sucesso");
// }).catch(() => {
//     console.log("Houve uma falha...");
// })

module.exports = {
    Sequelize,
    sequelize
}