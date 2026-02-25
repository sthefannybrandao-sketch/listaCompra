// capturando os elementos da pagina html
const form = document.querySelector('#formLista')
const input = document.querySelector('#produto')
const contador = document.querySelector('#contador')
const mensagemErro = document.querySelector('#mensagemErro')
const lista = document.querySelector('#lista')

let totalItem = 0

form.addEventListener('submit', function(event){
    event.preventDefault()

    const valorInput = input.value.trim()

    // validando se o campo foi preenchido
    if(valorInput === ''){ 
        mensagemErro.innerText = "Digite um produto"
        return
    }

    mensagemErro.innerText = ''

    const novoItem = document.createElement('li')
    novoItem.innerText = valorInput

    lista.appendChild(novoItem)

    totalItem++
    contador.innerText = `Total: ${totalItem} itens.`

    input.value = ''
});