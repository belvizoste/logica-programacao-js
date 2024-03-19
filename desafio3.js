//De	Para	Fórmula
//Celsius	Fahrenheit	tF = (tC * 9/5) + 32 ~~
//Celsius	Kelvin	tK = tC + 273.15 ~~
//Fahrenheit	Celsius	tC = (tF-32) * 5/9
//Fahrenheit	Kelvin	tK = (tF + 459.67) * 5/9
//Kelvin	Celsius	tC = tK - 273.15
//Kelvn	Fahrenheit	tF = tK * 9/5 - 459.67


const 
    temperaturaAtual = parseFloat (window.prompt ('Digite o valor da temperatura:')),
    escalaAtual = window.prompt ('Digite a escala da sua temperatura atual: (C, F ou K)').toUpperCase(),
    escalaConvertida = window.prompt ('Digite a nova escala do valor: (C, F ou K)').toUpperCase(),
    celsius = 'C',
    fahrenheit = 'F',
    kelvin = 'K'


if (escalaAtual == celsius) {
    if ( escalaConvertida == fahrenheit) {
        window.alert(`A temperatura de ${temperaturaAtual}ºC quando convertida é igual a ${(temperaturaAtual * 9/5)+32}ºF.`) ;
     } else {
        window.alert(`A temperatura de ${temperaturaAtual}ºC quando convertida é igual a ${temperaturaAtual + 273.15}ºK.`);
     }
}  if (escalaAtual == fahrenheit) {
    if ( escalaConvertida == celsius) {
        window.alert(`A temperatura de ${temperaturaAtual}ºF quando convertida é igual a ${(temperaturaAtual  - 32) * 5/9}ºC.`);
     } else  {
        window.alert(`A temperatura de ${temperaturaAtual}ºF quando convertida é igual a ${(temperaturaAtual  + 459.67) * 5/9}ºK .`);
     }
} if (escalaAtual == kelvin) {
    if ( escalaConvertida == celsius) {
        window.alert(`A temperatura de ${temperaturaAtual}ºK quando convertida é igual a ${temperaturaAtual - 273.15}ºC.`);
     } else  {
        window.alert(`A temperatura de ${temperaturaAtual}ºK quando convertida é igual a ${temperaturaAtual  * 9/5 - 459.67}ºF.`);
     }
}  if (escalaAtual, escalaConvertida, temperaturaAtual != fahrenheit, kelvin, celsius) {
   window.alert(`O dados de entrada não são validos`)
}



