const mMarcaObra = require('../../../ModelosTabela/PontoEletronico/Obra/marca_obra')
const marca = mMarcaObra.marcacoes

async function procuraMarca(numMarca,id){
    let marcacoes
    if(numMarca == 1) {
        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                id:id,
                marca1: null,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcação 1'))
    }
    if(numMarca == 2) {
        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                id:id,
                marca2: null,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcação 1'))
    }
    if(numMarca == 3) {
        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                id:id,
                marca3: null,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcação 1'))
    }
    if(numMarca == 4) {
        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                id:id,
                marca4: null,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcação 1'))
    }
    if(numMarca == 5) {
        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                id:id,
                marca5: null,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcação 1'))
    }
    if(numMarca == 6) {
        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                id:id,
                marca6: null,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcação 1'))
    }
    if(numMarca == 7) {
        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                id:id,
                marca7: null,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcação 1'))
    }
    if(numMarca == 8) {
        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                id:id,
                marca8: null,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcação 1'))
    }
    return marcacoes

    };

module.exports = {procuraMarca}