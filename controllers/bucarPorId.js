const database = require('../model/dbase');

exports.buscarTarefaPorId = (req, res) => {
    const idTarefa = req.params.id;

    const query = `
        SELECT * FROM tarefas WHERE id = $1;
    `;

    const values = [idTarefa];

    database.query(query, values)
        .then(resultado => {
            if (resultado.rows.length === 0) {
                res.status(404).send({ erro: 'Tarefa não encontrada.' });
            } else {
                res.status(200).send({ tarefa: resultado.rows[0] });
            }
        })
        .catch(erro => {
            res.status(500).send({ erro: erro });
        });
};
