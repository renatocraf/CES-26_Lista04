const porta = 3030;
const bancoDeDados = require('./bancoDeDados');
const upload = require('./upload')


const fs = require('fs')
const path = require('path'); //path pra poder andar pelos diretorios
const express = require('express');
const app = express();

const caminho = path.join(__dirname,'../static', 'banco.json')

//pasta com os arquivos estaticos
app.use(express.static('static'));

// utilizar o ejs pra renderizar as paginas html
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../static', 'views'));


app.get('/',(req,res,next)=>{
    let gravado = false
    res.render('index',{gravado:gravado});
})

// #####################
app.get('/produtoscadastrados',(req,res,next)=>{
    produtos = bancoDeDados.getProdutos()
    res.send()
})

app.get('/produtos',(req,res,next)=>{
    fs.readFile(caminho,'utf-8',(err,conteudo)=>{
        const config = JSON.parse(conteudo);
        console.log(config[1])
        res.render('index2',{valores:config})  
    })
    
})
// #######################

app.get('/cadastrarproduto',(req,res,next)=>{
    resposta ={
        nomePessoa : req.query.nome,
        tel :req.query.telefone,
        nomeProduto:req.query.nome_produto,
        valorProduto:req.query.valor
    }
    // a ideia eh guardar esses valores num json (preciso )
    console.log(resposta);    
    bancoDeDados.salvarProdutos(resposta) 
    let gravado = true   
    res.render('index',{gravado:gravado})
})

app.post('/upload',upload.single('file'),(req,res) => {
    let gravado = true
    res.render('index',{gravado:gravado})
});

app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}.`);
})