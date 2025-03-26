//escopo

//escopo função

//escopo da função pai

var carro = 'Fusca';

function mostraMeucarro(){
  var texto = 'meu carro é um $(carro)';
  console.log(texto);
}

mostraMeucarro();

console.log(texto);

//escopo de bloco

var verdade = true;

if(verdade){
  var carro = 'Fusca';
  console.log(carro);
}

console.log ('Fora do bloco',carro);

{
  var caminhao = 'forte'
}

