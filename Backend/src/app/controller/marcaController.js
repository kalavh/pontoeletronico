const {atualizaMarca} = require('./funcoes/atualizaMarca')
const marca = require('../models/marcacao')
const numMarcacao = require('../models/numMarcacao')

module.exports = {
    async listaMarcacao(req,res){
        const lista = await marca.findAll()
        .then(event => res.json(event))
        .catch(err => res.json(err))
    },

    async criaMarcacao(req,res){
        const { idFunc, dia } = req.body
        const Marcacao = await marca.create({ idFunc, dia })
        res.json(Marcacao)
    },

    async marcaOnline(req,res) {
        const hoje = new Date()
        const mes = hoje.getMonth() + 1
        const dia = new Date(hoje.getFullYear()+'-'+mes+'-'+hoje.getDate())
        const horaMarcacao = hoje.getHours()+":"+hoje.getMinutes()
        const idFunc = req.params.idFunc
        let marcacoes

        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                dia,
                idFunc,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcações'))

        //res.json(marcacoes)

        if (marcacoes) {
            async function criaMarca(){
                const novaMarca = await marca.create({
                    idFunc,
                    dia,
                    marca1: horaMarcacao })
                    .catch(err=> console.log(err)) 
   
                    const numMarca = await numMarcacao.create({
                        idMarca : novaMarca.dataValues.id,
                        marca : 2
                        }).catch(err=> console.log(err)) 
                    
                }
                
                criaMarca()

            res.json('Marcação Criada')}
            else {   //já existe marcação entao atualiza

            let id = marcacoes[0].id


             async function criaMarca() {
                 const buscaMarca = await numMarcacao.findAll({
                     attributes: ['marca'],
                     where: {
                         idMarca: id,
                     }
                 }).catch( err => console.log(err))
                 
                let numeroMarca = buscaMarca[0].dataValues.marca;
                console.log({numeroMarca, horaMarcacao,id})
                 
                atualizaMarca(numeroMarca,horaMarcacao,id)

                const atualizaNumMarca = await numMarcacao.update(
                    { marca: numeroMarca + 1 },
                    { where: { idMarca: id } }
                ).then(  res.json('Marcacao '+numeroMarca))
              
             }
             criaMarca()
           
            }
    }
}