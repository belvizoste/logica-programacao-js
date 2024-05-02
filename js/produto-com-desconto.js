/* Desenvolva um programa que calcule o desconto da compra de produtos baseado na quantidade de produtos comprados.

O programa deve ler o código do produto e a quantidade adquirida. Você pode utilizar uma estrutura de dados JSON para armazenar as informações dos produtos.

Quantidade	Desconto
3 até 5	2%
6 a 10	3%
mais que 10	5% */

const produtos = [
    {
        codigo: 1,
        preco: 5.99,
        descricao: "Salgado "
    },
    {
        codigo: 2,
        preco: 4.50,
        descricao: "Snickers "
    },
    {
        codigo: 3,
        preco: 0.5,
        descricao: "Quebra-queixo "
    }
];
// TODO Obter os dados de produto a partir de um ARQUIVO JSON
// TODO Refatorar a função calculaDesconto()

function calculaDesconto(codigoProduto, qtdeProduto) {

    let preco;
    let descricao;
    let desconto;
    let valorFinal;

    // percorre o vetor de produtos para pesquisa
    for (let i = 0; i < produtos.length; i++) {

        // se o código for igual ao procurado, obtém o preco
        if (produtos[i].codigo === codigoProduto) {

            preco = produtos[i].preco;
            descricao = produtos[i].descricao;
        }
    }

    // atribui o desconto com base na quantidade comprada
    if (qtdeProduto >= 3 && qtdeProduto <= 5) {

        desconto = 0.02;

    } else if (qtdeProduto >= 6 && qtdeProduto <= 10) {

        desconto = 0.03;

    } else if (qtdeProduto > 10) {

        desconto = 0.05;

    } else {

        desconto = 0;

    }

    valorFinal = (preco * qtdeProduto) - (preco * qtdeProduto * desconto);

    return {
        codigo: codigoProduto,
        preco: preco,
        descricao: descricao,
        valorFinal: valorFinal
    };


}