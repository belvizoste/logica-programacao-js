// Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. Não é necessário ler as notas, você pode defini-las com variáveis.

const nota1 = 10 
const nota2 = 9
const nota3 = 5
const quantnotas = 3
const valorminimo = 7
const 
console.log (`A soma das notas será: ${nota1+nota2+nota3}`)
console.log (`A média das notas será: ${(nota1+nota2+nota3)/quantnotas}`)
const media = (nota1+nota2+nota3)/quantnotas 

const condicao1= media >= valorminimo 
const condicao2= media < valorminimo 


if (condicao1){
    console.log('Aprovado')
} else if (condicao2) {
    console.log('Reprovado')
} else {
    console.log('Necessita de exame')
} 
