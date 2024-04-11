/* Desenvolva um programa que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor. Após isso, o programa deve pertmitir a leitura de mais um nome qualquer para ser efetuada uma busca entre os nomes inseridos anteriormente. O programa deve exibir a mensagem ACHEI caso encontre o nome e NÃO ACHEI caso não encontre o nome. */


// var arr = ['bel', 7, 'é equilíbrio', 8, 'caloura na unifesp'];

// console.log (arr)

// TESTE PARA ESTUDO DE ARRAY

const data = [
    {name: "taylor", age: 19, salary: 1500, active: true, team: "Design", bonus:0},
    {name: "bel", age: 18, salary: 980, active: true, team: "Economist", bonus:0},
    {name: "paloma", age: 35, salary: 3000, active: true, team: "Administration", bonus:0},
    {name: "tobias", age: 4, salary: 500, active: true, team: "Pet", bonus:0},
    {name: "ayra", age: 6, salary: 200, active: true, team: "Pet2", bonus:0},
]


// => FIND
// (vai ler toda a array e quando encontrar a característica definida, devolve ela para o programa)

// const user = data.find((user)=> { //o "user" dentro da => serve para definir a busca em todos os elementos da array 

//     return user.salary > 500 
// })

// console.log(user);

// => FILTER
// const user = data.filter((user)=>{
//     return user.salary >= 1000;
// })

// console.log (user);

// => FINDINDEX 
// const indexUser = data.findIndex ((user)=>{
//     return user.name === "tobias"
// })

// console.log (indexUser); 

//  => MAP (PODE SER USADO NO EXERCÍCIO DE BUSCA DE NOMES)

// const users = data.map((user, index)=>{
    
//     if (user.salary <= 980){
//         user.salary -= 50; 
//         user.bonus += 150;
//     } return {
//         name: user.name,
//         salary: user.salary,
//         bonus: user.bonus
//     }
// })

// console.log (users)


// => SOME 

// const userInactive = data.some((user)=> {
//     return user.active === false; 

// })

// console.log(userInactive); 

// => EVERY 

// const usersActive = data.every((user) => {
//     return user.active === true; 
// })

// console.log(usersActive); 

// => REDUCE 

const totalSalarios = data.reduce ((total, user) =>{
    return total += user.salary 
}, 0) //esse 0 serve para marcar o ponto de início do cálculo 

 console.log(totalSalarios); 