const database = require('../model/dbase');

exports.atualizarProfessor = (req, res) => {
    const idProfessor = req.params.id;
    const novosDados = req.body;  // Novos dados do professor

    const query = `
        UPDATE professor SET nome = $1, curso = $2, diasSemana = $3, disciplina = $4, semestreSelecionado = $5 WHERE id = $6;
    `;

    const values = [
        novosDados.nome,
        novosDados.curso,
        novosDados.diasSemana,
        novosDados.disciplina,
        novosDados.semestreSelecionado,
        idProfessor
    ];

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Professor atualizado com sucesso.' });
        })
        .catch(erro => {
            res.status(500).send({ erro: erro });
        });
};
