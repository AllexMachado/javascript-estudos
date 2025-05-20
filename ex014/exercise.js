var agora = new Date();
var diaSen = agora.getDay();

console.log(diaSen);

switch (diaSen) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("[ERRO] Dia inválido!");
        break;
}
// O switch é uma estrutura de controle que permite testar uma variável contra múltiplos valores possíveis.
// Ele é uma alternativa ao uso de múltiplos if-else if-else, tornando o código mais legível e organizado.
// O switch é especialmente útil quando você tem uma variável que pode assumir um número limitado de valores, como dias da semana, meses do ano, etc.
// O switch avalia a expressão fornecida e compara o resultado com os valores de cada case.
// Quando encontra uma correspondência, executa o bloco de código associado a esse case.
// Se não houver correspondência, o bloco de código do case default (se presente) será executado.
// O switch pode ser usado com strings, números e até mesmo expressões booleanas.