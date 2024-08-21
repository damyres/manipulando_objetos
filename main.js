let listaDeItens = []
let itemEditar

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")
const ulItens = document.getElementById("lista-de-itens")
const ulItensComprados = document.getElementById("itens-comprados")
const listaRecuperada = localStorage.getItem('listaDeItens')

function atualizaLocalStorage() {
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens))
}

//valores omitidos no javaScript: 0, null, NaN, undefined, "", false << Retornam falso
if (listaRecuperada) {
    listaDeItens = JSON.parse(listaRecuperada)
    mostrarItens()
} else {
    listaDeItens = []
}

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItem()
    mostrarItens()
    itensInput.focus()
})

function salvarItem() {
    const comprasItem = itensInput.value
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase());

    if (checarDuplicado) {
        alert("Item já exite!")
    } else {
        listaDeItens.push({
            valor: comprasItem,
            checar: false
        })
    }
    itensInput.value = ''
}
function mostrarItens() {
    ulItens.innerHTML = ''
    ulItensComprados.innerHTML = ''

    listaDeItens.forEach((elemento, index) => {
        if (elemento.checar) {
            ulItensComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="is-clickable" />  
                    <span class="itens-comprados is-size-5">${elemento.valor}</span>
                </div>
                    <div>
                        <i class="fa-solid fa-trash is-clickable deletar"></i>
                    </div>
            </li>
            `
        } else {
            ulItens.innerHTML +=
                `<li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
            <div>
                <input type="checkbox" class="is-clickable" />
                <input type="text" class="is-size-5" value="${elemento.valor}" ${index !== Number(itemEditar) ? 'disabled' : ''}></input>
            </div>
                <div>
                    ${index === Number(itemEditar) ? '<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i> '}
            <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div >
        </li > `
        }
    })

    const inputCheck = document.querySelectorAll('input[type="checkbox"]')

    inputCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            listaDeItens[valorDoElemento].checar = evento.target.checked
            mostrarItens()
        })
    })
    const deletarObjetos = document.querySelectorAll(".deletar")

    deletarObjetos.forEach(i => {
        i.addEventListener('click', (evento) => {
            valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            listaDeItens.splice(valorDoElemento, 1)
            mostrarItens()
        })
    })
    const editarItens = document.querySelectorAll(".editar")

    editarItens.forEach(i => {
        i.addEventListener('click', (evento) => {
            itemEditar = evento.target.parentElement.parentElement.getAttribute('data-value')
            mostrarItens()
        })
    })
    atualizaLocalStorage()
}

function salvarEdicao() {
    const itemEditado = document.querySelector(`[data-value="${itemEditar}"] input[type="text"]`)
    //console.log(itemEditado.value)
    listaDeItens[itemEditar].valor = itemEditado.value
    console.log(listaDeItens)
    itemEditar = -1
    mostrarItens()
}
