const pg = require("pg")
require('dotenv').config()

const database = new pg.Client(process.env.DATABASE)

database.connect((erro)=>{
if(erro){
    return console.log("Não deu bpm de SQL")
}else {
    return console.log("DEU BOM SQL")
}

})

module.exports = database