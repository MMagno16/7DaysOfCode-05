//se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não. - ok
//Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata. - ok
//Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas,
//como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo. - ok

//Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:
// O programa deverá imprimir, por exemplo:
// Lista de compras:
//     Frutas: banana, tomate, maçã, uva, abacate
//     Laticínios: leite vegetal, leite de vaca, leite em pó
//     Congelados:
//     Doces: chiclete e bala de ursinho

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let continuar = true;

while (continuar == true) {
    let resultado = prompt("Olá! Você deseja adicionar um alimento na sua lista de compras?\nDigite 1- Sim  2- Não")

    if (resultado == "1") {
        let tipoAlimento = prompt("Qual tipo de alimento você deseja inserir na sua lista de compras?\n1- Frutas \n2- Latcínios \n3- Congelados \n4- Doces")
        let alimento = prompt("Digite o nome do alimento?");

        if(tipoAlimento == 1){
            frutas.push(alimento)
        } 
         else if(tipoAlimento == 2){
            laticinios.push(alimento)
        } 
        else if(tipoAlimento == 3){
            congelados.push(alimento)
        } 
        else if(tipoAlimento == 4){
            doces.push(alimento)
        } 
       
    } else {
        continuar = false;
        alert(`Lista de compras:\n  1- Frutas: ${frutas}\n  2- Latícinios: ${laticinios}\n  3- Congelados: ${congelados}\n  4- Doces: ${doces}`)
    }
}
console.log(frutas)


// 1- inserir no html os elementos de cada array, dica: dá para usar o for
// 2- formatar html para que fique com a cara das princesas disney
