function urnaEletronica() {

    // declaração das variáveis
    let opcao;
    let contador = 0;
    
    let nome1;
    let nome2;
    let nome3;
    nome1 = prompt('Digite o nome do candidato');
    nome2= prompt('Digite o nome do candidato');
    nome3 = prompt('Digite o nome do candidato');
        

    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votobranco = 0;
    let votonulo = 0;
    
    do {
        
        opcao = parseInt(prompt('Digite a opção'));
        
        console.log('Repetição');
        contador++;
        
        
        if (opcao == 1) {
            
            console.log('Opção  de voto é o candidato',nome1);
            candidato1++;
            
        } else if (opcao == 2) {
            console.log('Opção de voto é o candidato', nome2);
            candidato2++;
            
        } else if (opcao == 3) {
            console.log('Opção de voto é o candidato',nome3);
            candidato3++;
            
        } else if (opcao == 4) {
            console.log('Opção  do voto é  em Branco');
            votobranco++;
            
        } else if (opcao == 5) {
            console.log('Opção de voto é Nulo');
            votonulo++;
        }
        
    } while (opcao !== 0);
    
    let totalDeVotos = candidato1 + candidato2 + candidato3 + votobranco + votonulo;
    
    contador = contador - 1;
    console.log('Contagem:', contador);
    console.log('Este é o total de votos para o candidato ', nome1,':', candidato1);
    console.log('Este é o total de votos para o candidato ', nome2,':',candidato2);
    console.log('Este é o total de votos para o candidato ', nome3,':',candidato3);
    console.log('Este é o total de votos para o Voto Branco', votobranco);
    console.log('Este é o total de votos para o Voto Nulo', votonulo);
    console.log('Este é o Total da votação',totalDeVotos *100 )
    
    if (candidato1 > candidato2 && candidato1 > candidato3) {
        console.log('O ganhador é  ',nome1);
        console.log('Total de Votos válidos mais Brancos',votobranco + candidato1);
        console.log('Porcentagem de votos'(candidato1 + votobranco)/totaldevotos *100)
    }else if (candidato2 > candidato1 && candidato2 > candidato3){
        console.log('O ganhador é  ',nome2);
        console.log('Total de Votos válidos mais Brancos',votobranco + candidato2);
    }else if (candidato3 > candidato1 && candidato3 > candidato2){
        console.log('O ganhador é  ',nome3);
        console.log('Total de Votos válidos mais Brancos',votobranco + candidato3);
    }else {
        console.log ('Empate');
    }
    
}
    