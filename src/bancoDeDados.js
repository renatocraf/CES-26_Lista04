const sequence = {
    _id:1,
    get id(){return this._id++}
}

const produtos = {}

function salvarProdutos(produto){
    if(!produto.id)
        produto.id = sequence.id
    produtos[produto.id]=produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}



const fs = require('fs')

const caminho = __dirname + '/banco.json'

/*const lerConteudo = fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo);    
    console.log("dentro do ler ",conteudo)
    return config
})*/

/*const escreverConteudo = function(dados){ 
    salvarProdutos(dados)
    conteudo = lerConteudo;
    console.log("conteudo=",conteudo)
    console.log(dados)
    conteudo.push(dados)
    fs.writeFile(__dirname+'/banco.json',JSON.stringify(conteudo),err =>{
        console.log(err||'Arquivo Salvo com Sucesso.')
})}*/



module.exports = {
    salvarProdutos,
    getProduto,
    getProdutos    
}