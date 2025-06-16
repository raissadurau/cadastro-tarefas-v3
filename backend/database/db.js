// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "backend/database/tarefas.sqlite"
// });

// module.exports = sequelize;
const {Sequelize} = require("sequelize");

const  sequelize = new Sequelize("cadastro_tarefas", "tarefas_user", "123456",{
  host: "localhost", 
  dialect: "mysql",
  timestamp: false,
});

module.exports = sequelize;
