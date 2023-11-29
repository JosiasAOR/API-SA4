const database = require('../model/dbase');

exports.cadastroProfessor = (req, res) => {
    console.log('Eu estou chegando aqui');

    const query = "INSERT INTO professor (nome, curso, diasSemana, disciplina, semestreSelecionado) VALUES ($1, $2, $3, $4, $5);";
    const values = [
        req.body.nome,
        req.body.curso,
        req.body.diasSemana,
        req.body.disciplina,
        req.body.semestreSelecionado
    ];

    console.log(values);

    database.query(query, values).then(
        () => {
            res.status(200).send({ mensagem: 'Gravou com sucesso' });
        },
        (erro) => {
            res.status(500).send({ erro: "Erro ao gravar no banco de dados" });
        }
    );
};
