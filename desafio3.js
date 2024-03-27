//De	Para	Fórmula
//Celsius	Fahrenheit	tF = (tC * 9/5) + 32 ~~
//Celsius	Kelvin	tK = tC + 273.15 ~~
//Fahrenheit	Celsius	tC = (tF-32) * 5/9
//Fahrenheit	Kelvin	tK = (tF + 459.67) * 5/9
//Kelvin	Celsius	tC = tK - 273.15
//Kelvn	Fahrenheit	tF = tK * 9/5 - 459.67

function converteTemperatura(temperaturaAtual, escalaAtual, escalaConvertida){
   
   const
   temperaturaAtual = parseFloat (window.prompt ('Digite o valor da temperatura:'));
   
   if (!isNaN(temperaturaAtual)) {
   
   const 
    escalaAtual = ('Digite a escala da sua temperatura atual: (C, F ou K)').toUpperCase(),
    escalaConvertida = ('Digite a nova escala do valor: (C, F ou K)').toUpperCase(),
    celsius = 'C',
    fahrenheit = 'F',
    kelvin = 'K';
    let mensagem;
   
      if (escalaAtual === celsius) {
         if (escalaConvertida === fahrenheit) {
           mensagem(`A temperatura de ${temperaturaAtual}ºC quando convertida é igual a ${(temperaturaAtual * 9/5)+32}ºF.`) ;
        } else if (escalaConvertida === kelvin) {
           mensagem(`A temperatura de ${temperaturaAtual}ºC quando convertida é igual a ${temperaturaAtual + 273.15}ºK.`);
         } else { 
           mensagem (`A escala não é válida, digite uma escala DIFERENTE da atual`)
         }
      } else if (escalaAtual === fahrenheit) {
         if ( escalaConvertida === celsius) {
           mensagem(`A temperatura de ${temperaturaAtual}ºF quando convertida é igual a ${(temperaturaAtual  - 32) * 5/9}ºC.`);
        } else if (escalaConvertida === kelvin)  {
           mensagem(`A temperatura de ${temperaturaAtual}ºF quando convertida é igual a ${(temperaturaAtual  + 459.67) * 5/9}ºK .`);
        } else {
        mensagem(`A escala não é válida, digite uma escala DIFERENTE da atual`)
        }
   } else  if (escalaAtual === kelvin) {
          if ( escalaConvertida === celsius) {
           mensagem(`A temperatura de ${temperaturaAtual}ºK quando convertida é igual a ${temperaturaAtual - 273.15}ºC.`);
        } else if (escalaConvertida === fahrenheit) {
           mensagem(`A temperatura de ${temperaturaAtual}ºK quando convertida é igual a ${temperaturaAtual  * 9/5 - 459.67}ºF.`);
        } else {
        mensagem(`A escala não é válida, digite uma escala DIFERENTE da atual.`)
        }
      }
   } else {  mensagem (`O valor digitado não é válido, por favor digite um valor numérico.`)}


}   
