const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'../static', 'banco.json')

const sequence = {
    _id:1,
    get id(){return this._id++}
}

const produtos = {}

config = require('../static/banco.json')

for (i in config){
    salvarProduto(config[i])
}

function salvarProduto(produto){
    produto.id = sequence.id
    produtos[produto.id]=produto
    return produtos
}

function salvarProdutos(produto){
    produto.id = sequence.id
    produtos[produto.id]=produto
    console.log(produtos)
    fs.writeFile(caminho,JSON.stringify(produtos),err =>{
        console.log(err||'Arquivo Salvo com Sucesso.')});
    return produtos
}

/*
function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){    
    return Object.values(produtos)
}
*/

module.exports = {
    salvarProdutos,
    //getProduto,
    //getProdutos  
}