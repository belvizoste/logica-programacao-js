// Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. Não é necessário ler as notas, você pode defini-las com variáveis.

const nota1 = 10;
const nota2 = 9;
const nota3 = 5;
const quantnotas = 3

const media = (nota1+nota2+nota3)/quantnotas 

if (media >= 7){
    console.log('Aprovado')
} else if (media = 5) {
    console.log('Necessita de exame')
} else  {
    console.log('Reprovado')
} 

// OUTRA FORMA DE REALIZAR O DESAFIO 
//ATENÇAO PARA A MUDANÇA NO NOME DAS VARIÁVEIS!!!!!!
const
    notas1 = 5, 
    notas2 = 5, 
    notas3 = 4; 

const mediafinal = (notas1+notas2+notas3)/3; 


if (mediafinal >= 7){
    console.log(`Aprovado com nota: ${mediafinal.toFixed(2)}`)
} else if (mediafinal >= 5) {
    console.log(`Ficou para exame com nota: ${mediafinal.toFixed(2)}`)
} else  {
    console.log(`Reprovado com nota: ${mediafinal.toFixed(2)}`)
}
