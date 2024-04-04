//De	Para	Fórmula
//Celsius	Fahrenheit	tF = (tC * 9/5) + 32 ~~
//Celsius	Kelvin	tK = tC + 273.15 ~~
//Fahrenheit	Celsius	tC = (tF-32) * 5/9
//Fahrenheit	Kelvin	tK = (tF + 459.67) * 5/9
//Kelvin	Celsius	tC = tK - 273.15
//Kelvn	Fahrenheit	tF = tK * 9/5 - 459.67

function converteTemperatura(temperaturaAtual, escalaAtual, escalaConvertida){
   
      let temperaturaConvertida, msgErro = 'OK';

   console.log(temperaturaAtual);
   
   if (!isNaN(temperaturaAtual)) {
   
   
   escalaAtual = escalaAtual.toUpperCase();
   escalaConvertida = escalaConvertida.toUpperCase();
   temperaturaAtual = Number(temperaturaAtual);
   
  
   // de Celsius para F e K
      if (escalaAtual === 'C') {
         if (escalaConvertida === 'F') {
         temperaturaConvertida = (temperaturaAtual * 9/5) +32;

        } else if (escalaConvertida === 'K') {
        temperaturaConvertida = temperaturaAtual + 273.15;

         } else if (escalaConvertida === C) {
           msgErro (`ERRO: Digite uma escala DIFERENTE da atual`);
         }
         else {
            msgErro (`ERRO: A escala digitada não existe ou não esta disponível neste programa`);
         }


         // de Fahrenheit para C e K
      } else if (escalaAtual === 'F') {
         if ( escalaConvertida === 'C') {
           temperaturaConvertida = (temperaturaAtual  - 32) * 5/9;

        } else if (escalaConvertida === 'K')  {
        temperaturaConvertida = (temperaturaAtual  + 459.67) * 5/9;

        } else if (escalaConvertida === F ) { 
        msgErro(`ERRO: Digite uma escala DIFERENTE da atual`)
        }
        else {
         msgErro (`ERRO: A escala digitada não existe ou não esta disponível neste programa`)
      }


      //   de Kelvin para C e F
   } else  if (escalaAtual === 'K') {
          if ( escalaConvertida === 'C') {
           temperaturaConvertida = temperaturaAtual - 273.15;

        } else if (escalaConvertida === 'F') {
        temperaturaConvertida = temperaturaAtual  * 9/5 - 459.67; 

        } else if (escalaConvertida === K) {
        msgErro(`ERRO: Digite uma escala DIFERENTE da atual`);

       } else {
         msgErro (`ERRO: A escala digitada não existe ou não esta disponível neste programa`);
      }
      }
      
   } else {  msgErro (`O valor digitado não é válido, por favor digite um valor numérico.`)
}
return {
   temperaturaAtual: temperaturaAtual,
   escalaAtual: escalaAtual,
   escalaConvertida: escalaConvertida,
   temperaturaConvertida: temperaturaConvertida, 
   msgErro: msgErro
} 
}   
