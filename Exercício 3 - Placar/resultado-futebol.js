// Desenvolva um programa que receba do usuário o placar de um jogo de futebol (os gols de cada time), e informa se o resultado foi empate, vitória do primeiro time ou vitória do segundo time.



//fazer const/let para a quant de gols de cada time

  function placar(timeA, timeB){

     let   
      timeA,
      timeB,
      resultadoPartida,
      mensagemErro;

    if (!isNaN (timeA) && !isNaN (timeB)) {
     
        if (timeA > timeB) {
            resultadoPartida = `O $timeA venceu o $timeB`;

        } else if (timeB > timeA) {
            resultadoPartida = `O $timeB venceu o $timeA`;

        } else {
            resultadoPartida = `A partida terminou em empate entre os times`; 
        }

    } else {
        mensagemErro = `Os valores digitados não são válidos`
    }
    return resultadoPartida, mensagemErro
}