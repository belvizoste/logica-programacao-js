# logica-programacao-js
Treinando a lógica de programação com JavaScript

## operadores-aritmeticos.js 

~~~js
const numero1 = 40; 
const numero2 = 20;
~~~

A palavra `const` é utilizada para declaração de variáveis que não serão reatribuitas, ou seja, não permite nenhuma forma de reatribuição.   

Aqui declaramos duas constantes que serão calculadas no bloco a seguir: 

~~~js
console.log(`Os números das operações são ${numero1} e ${numero2}`);
console.log(`A soma dos números é ${numero1+numero2}`); 
console.log(`A subtração dos números é ${numero1-numero2}`); 
console.log(`A multiplicação dos números é ${numero1*numero2}`); 
console.log(`A divisão dos números é ${numero1/numero2}`); 
console.log(`O resto dos números é ${numero1%numero2}`); 
~~~

Em cada uma das operações, temos um operador aritmético: 

- `+`  -> soma;
- `-` -> subtração;
- `*`  -> multiplicação;
- `/` -> divisão;
- `%` -> resto. 

## operadores-atribuicoes.js 

~~~js
let numero = 10;
~~~ 

Declaramos a variável `número` usando a palavra `let`, pois essa variável será **reatribuída** ao longo do nosso código.

Em seguida, fazemos uma série de reatribuições usando os operadores de atribuição. 

 ~~~js
console.log (`O número é inicialmente igual a ${numero}`); 
console.log(`Após atribuir somando o número 10: ${numero += 10}`); 
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicando 10: ${numero *= 10}`);
console.log(`Reatribuindo e dividindo 10: ${numero /= 10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${ numero %= 10}`);
console.log(`Incrementando o número 1: ${++numero}`);
console.log(`Decrementando o número 1: ${--numero}`);
console.log(`O número final é igual a ${numero}`);
 ~~~

 Operadores de atribuição: 

 - `+=` -> atribuição com soma;
 - `-=` -> atribuição com subtração;
 - `*=` -> atribuição com multiplicação;
 - `/=` -> atribuição com divisão;
 - `%=` -> atribuição com resto da divisão; 
 - `++` -> atribuição com **incremento 1** (pode ser *pré* ou *pós* incrementado). Ex: `numero++` (pós-incremento) ou `++numero` (pré-incremento);
- `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decrementado). Ex: `numero--` (pós-decremento) ou `--numero` (pré-decremento). 
