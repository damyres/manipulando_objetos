//Represetação de lista com array
let listaDeCompras = ['Arroz', 'feijao', 'café']

//console.table(listaDeCompras)

//Represetação de lista com objeto
const listaDeItens = {
    item1: 'biscoito',
    item2: 'pão',
    quantidade1: 1,
    quantidade2: 2,
    mostrarItens: function(){
        alert('Comprei ' + listaDeItens.quantidade1 + 'pacotes de ' + listaDeItens.item1)
    }
}
listaDeItens.mostrarItens()

