let numeroSecreto = parseInt(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let tentativas = 0;

while(tentativasRestantes > tentativas){
  
  let chute = prompt('Digite um número entre 0 e 100 você ainda possui ' + (tentativasRestantes - tentativas) + ' tentativas.');
  
  if (chute == numeroSecreto){
    alert('Parabéns, você acertou! ' + (numeroSecreto) + ' é o número correto');
    break;
    
  } else if (chute > numeroSecreto) {
    alert('Erroooou. O número secreto é menor. ' + (tentativasRestantes = tentativasRestantes - 1) + ' tentativas restantes.');
    
  } else if (chute < numeroSecreto){
    alert('Erroooou. O número secreto é maior. ' + (tentativasRestantes = tentativasRestantes - 1) + ' tentativas restantes.');
  }
}

if (tentativasRestantes === tentativas){
  alert('Uma pena, você excedeu o número de tentativas. A resposta era ' + (numeroSecreto));
}