// const express = require("express");
// const app = express();
// const cors = require("cors");
// const tarefaRoutes = require("./routes/tarefaRoutes");
// const sequelize = require("./database/db");
// const Tarefa = require("./models/Tarefa");

// app.use(cors());
// app.use(express.json());
// app.use(tarefaRoutes);

// sequelize.sync().then(() => {
//   app.listen(3000, () => {
//     console.log("Servidor rodando em http://localhost:3000");
//   });
// });

const express = require("express");
const cors = require("cors");
const tarefaRoutes = require("./routes/tarefaRoutes");
const sequelize = ("./database/db");
const app = express(); 

//MIDLEWARE
app.use(cors());
app.use(express.json());

//ROTAS
app.use("/", tarefaRoutes);


//SINCRONIZAÇÃO COM O BANCO - INICIAR DO SERVIDOR
sequelize.sync()
.then(() => {
  console.log("Banco de dados sincronizado com sucesso");
  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
  });
})
.catch((error)=> {
  console.error("Erro ao conectar ao banco de dados: ", error);
});
