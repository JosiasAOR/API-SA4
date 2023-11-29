const express = require('express');
const port = 3001;
const bodyParser = require('body-parser');
const tarefasRoutes = require('./routes/tarefas');
const cors = require('cors'); // Importe o pacote cors

const app = express();
app.use(bodyParser.json());

// Habilitar o CORS
app.use(cors());

// Cadastrando as rotas
app.use('/', tarefasRoutes);

app.listen(port, () => {
  console.log(`API de Tarefas: ${port}`);
});
