//capturando os elementos da pagina html
const form = document.querySelector('#formLista')
const imput = document.querySelector('#produto')

// document.querySelector = selencionar um elemento html
const contador = document.querySelector('#contafor')
const mensagemErro = document.querySelector('#mensagemErro')
const lista = document.querySelector('#lista')

let totalItens = 0


form.addEventListener('submit', function(event){
    event.preventDefault()// impede o carregamento do site
    // so vai caregar a pagina depois que o campo for prenchido
    const valorImput = imput.Value()//pegando valor do imput

    //validando se o campo foi prenchido
    if(valorImput.trim() ===''){ 
        //trim()retirar o espaco extras do que foi digitadp
        mesageErro.inertext = " digite um produto"
    return;//acaba a validacao funcao aqui
         
    }

    mensagemErro.inertext = '';// volta a defenir a mensagem como vazia

        //criando novo item para adicionar na lista de compras
      const novoItem = document.createElement('li')
      //adicionando o valor digitado no campo dentro da nossa lista
      novoItem.innertext = valorInput

      // adicionar esse novo item no HTML(novo intem da lista)
      lista.appendChild(novoItem)

      // atualizar o contador
      totalItem++
      //mudar o texto do paragrafo

      contador.innerText = `total : ${totalItens} itens.` //'' temple string
      // valor da string dentro do '' vai mudar de acordo com o codigo

      input.value = ''
}
);