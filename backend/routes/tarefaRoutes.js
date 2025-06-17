const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefaController");

router.get("/tarefas", controller.listar);
router.post("/tarefas", controller.criar);
router.patch("/tarefas/:id/status", controller.alterarStatus);
router.delete("/tarefas/:id", controller.remover);

module.exports = router; 
//comantário

