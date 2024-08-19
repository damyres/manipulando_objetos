// Represetação de lista com array
// let listaDeCompras = ['Arroz', 'feijao', 'café']

// console.table(listaDeCompras)

// Represetação de lista com objeto
// const listaDeItens = {
//     item1: 'biscoito',
//     item2: 'pão',
//     quantidade1: 1,
//     quantidade2: 2,
//     mostrarItens: function(){
//         alert('Comprei ' + listaDeItens.quantidade1 + 'pacotes de ' + listaDeItens.item1)
//     }
// }
// listaDeItens.mostrarItens()

//Exemplo de criação de objeto e adicão de propriedades/atributos ao objeto
const cliente = {nome: 'Mariana'}
cliente.idade = 76
cliente.peso = 1.76
cliente.endereco = 'Avenida A, número 6'


//criando um método
cliente['estado'] = 'Pernambuco'

alert('Olá, meu nome é ' + cliente.nome + 'e moro no estado de ' + cliente.estado + '.')
console.log(cliente)

