

// declaração das variáveis
let candidato1 = parseInt (prompt('candidato1'));
let candidato2 = parseInt(prompt('candidato2'));
let candidato3 = parseInt(prompt('candidato3'));
let candidatobranco = parseInt(prompt('candidatobranco'));
let candidatonulo = parseInt(prompt('candidatonulo'));

switch (opçao) {

    case 1:
        console.log('Opção é 1');
        break;
    case 2:
        console.log('Opção é 2');
        break;
    case 3:
        console.log('Opção é 3');
        break;
    case 4:
        console.log('Opção é Branco');
        break;
    case 5:
        console.log('Opção é Nulo');
        break; 
}


function urnaEletronica() {


let opcao;
let contador = 0;

do {
   
   
    opcao = parseInt(prompt('Digite a opção'));
    console.log('Repetição',contador);
    contador++;
        
        
 }while (opcao !==0); 


    contador--;
    console.log('Contagem:',contador);

}

