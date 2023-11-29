const database = require('../model/dbase');

exports.statusTarefa = (req, res) => {
    const idTarefa = req.params.id;
    const novoStatus = req.body.status; // Supondo que você envie o novo status no corpo da requisição

    const query = `
        UPDATE tarefas SET status = $1 WHERE id = $2;
    `;

    const values = [novoStatus, idTarefa];
console.log("aquiiii",novoStatus)
    database.query(query, values)
        .then(resultado => {
            if (resultado.rowCount === 0) {
                res.status(404).send({ erro: 'Tarefa não encontrada.' });
            } else {
                res.status(200).send({ mensagem: 'Status da tarefa atualizaaado com sucesso.' });
            }
        })
        .catch(erro => {
            res.status(500).send({ erro: erro });
        });
};
