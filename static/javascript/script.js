let verificado = false;
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


function ajax(){
  console.log(verificado)
  if(!verificado){
    verificado = true
    const config ={
      metodo:"GET",
      url: "./banco.json",// mudar local do arquivo
      asinc: true,
      sucesso(resposta){
        const produtos = JSON.parse(resposta)      
        const tabela = document.createElement('table')
        let tr = document.createElement('tr')
        let th = document.createElement('th')
        th.innerHTML = "Id"
        tr.appendChild(th)
        th = document.createElement('th')
        th.innerHTML = "Nome da Pessoa"
        tr.appendChild(th)
        th = document.createElement('th')
        th.innerHTML = "Telefone"
        tr.appendChild(th)
        th = document.createElement('th')
        th.innerHTML = "Produto"
        tr.appendChild(th)
        th = document.createElement('th')
        th.innerHTML = "Valor"
        tr.appendChild(th)
        tabela.appendChild(tr)      
        
        for (i in produtos){
          let id = document.createElement('td')
          id.innerHTML = produtos[i].id

          let nomePessoa = document.createElement('td')
          nomePessoa.innerHTML = produtos[i].nomePessoa

          let tel = document.createElement('td')
          tel.innerHTML = produtos[i].tel

          let nomeProduto = document.createElement('td')
          nomeProduto.innerHTML  = produtos[i].nomeProduto

          let valorProduto = document.createElement('td')
          valorProduto.innerHTML  = produtos[i].valorProduto

          let tr = document.createElement('tr')

          tr.appendChild(id)
          tr.appendChild(nomePessoa)
          tr.appendChild(tel)
          tr.appendChild(nomeProduto)
          tr.appendChild(valorProduto)
          
          tabela.appendChild(tr)

        }
        $('#pedidos').append(tabela).css({
          "padding": "60px",
          "margin" :  "50px",
          "margin-top":"10px",
          "padding-top":"15px",
          "border": "solid 1px black"
        });
        $('table').addClass('table')
      },
      erro(e){
        const msg = document.createTextNode(`${e.code}:${e.text}`)
        $(msg).insertAfter('#pedidos')
      }
    }
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        config.sucesso(xhr.response)
      }
      else if(xhr.status >= 400){
        config.erro({
          code: xhr.status,
          text: xhr.statusText
        })
      }
    }
    xhr.open(config.metodo,config.url,config.asinc);
    xhr.send();
    $('#verifica').text ("Ocultar")
  }
  else{
    verificado = false
    $('#verifica').text("Verificar")
    $('#pedidos').children().remove()
    $('#pedidos').css({
      "border": "none",
      "padding": "0px",
      "margin" : "0px"
    })


  }


}





