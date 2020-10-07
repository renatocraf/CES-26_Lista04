// Add your code here
var comBorda = {'border':'solid 2px red','background-color':'yellow','color':'red'}
var selecionado = {'border':'solid 2px blue','background-color':'black','color':'white'}
var semBorda = {'border':'none','background-color':'white','color':'black'}

function Selecao(elemento){
  $(elemento).mouseenter(function(){
    if($(elemento).attr('id')!='selec'){
      $(elemento).css(comBorda)

    }})    
  $(elemento).mouseleave(function(){
    if($(elemento).attr('id')!='selec'){
      $(elemento).css(semBorda)
    }})
    
  $(elemento).click(function(){
    $('#selec').parent().removeAttr('id')
    $('#selec').removeAttr('id').css(semBorda)    
    $(elemento).attr('id','selec').css(selecionado)
    $(elemento).parent().attr('id','pai')
    })
}

function attSelecao(){
  $('.manip').each((i,e)=> new Selecao(e))
} 

function inserirAntes(){
  let valor = $('#pai').attr('value')
  if (valor == 1){
    $('<div value='+valor+'><div class = "manip">Novo Elemento Antes</div ></div>').insertBefore('#pai')
  }
  else{
    let hifen = ""
    for (let i=0; i<valor;i++){
      hifen = hifen+"-"
    }
    $('<div value = '+valor+'><div  class = "manip"> '+hifen+' Novo Elemento Antes Filho</div ></div>').insertBefore('#pai')
  }
  attSelecao()  
}

function inserirFilho(){
  let valor = parseInt($('#pai').attr('value'))+1
  let hifen = ""
  for (let i=0; i<valor;i++){
    hifen = hifen+"-"
  }
  console.log(hifen)
  $('<div value = '+valor+'><div  class = "manip"> '+hifen+' Novo Elemento Filho</div ></div>').appendTo('#pai')
  attSelecao()
}

function inserirDepois(){
  let valor = $('#pai').attr('value')
  if (valor ==1){
    $('<div><div  class = "manip">Novo Elemento Depois</div ></div>').insertAfter('#pai')
  }
  else{
    let hifen = ""
      for (let i=0; i<valor;i++){
        hifen = hifen+"-"
      }
    $('<div value = '+valor+'><div  class = "manip"> '+hifen+' Novo Elemento Depois Filho</div ></div>').insertAfter('#pai')
  }
  attSelecao()
}

function removerElemento(){
  $('#selec').parent().remove()
}

function alterarNome(){
  let valor = $('#mudarnome').val()
  $('#selec').text(valor)
}

function mudarTipo(){
  $('#selec')
}
attSelecao()



function validarDados(){
    if (document.dados.nome.value == '') {
        alert('Você deve preencher seu nome.')
        return false
    } else if (document.dados.nome_produto.value == '') {
        alert('Digite o Nome do Produto.')
        return false
    } else if (document.dados.valor.value == '') {
        alert('Qual o preço do Produto?')
        return false
    }
    return true
}

if(gravado){
    alert("Gravado com Sucesso!")
    gravado = false
}