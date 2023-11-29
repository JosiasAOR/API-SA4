const database = require('../model/dbase')


exports.exibirProfessores=(req, res) => {
database.query(`SELECT * FROM professor ;`).then(

(resultado)=>{
    res.status(200).send({professores: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}

exports.exibirNomeParcial=(req, res) => {
   const parcial = req.params.id
database.query(`SELECT * FROM professor nome WHERE titulo LIKE '%${parcial}%' ;`).then(

(resultado)=>{
    res.status(200).send({professores: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}
exports.exibirProfessorPeloId=(req, res) => {
   const id = req.params.id
database.query(`SELECT * FROM professor WHERE id = ${id};`).then(

(resultado)=>{
    res.status(200).send({professor: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}