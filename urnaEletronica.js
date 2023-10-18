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
    let encerrarVotação = "N";
    let senha = prompt ('Digite uma senha de 6 dígitos (123456)');
    
    
    
    do {
        
        
        opcao = parseInt(prompt('Digite a opção \n'+
        '(1) ' + nome1 + '\n'+
        '(2) '+ nome2 + '\n'+
        '(3) '+ nome3 + '\n'+
        '(4) Branco \n' +
        '(5) Nulo \n'+
        '(0) Encerrar'));
        
        
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
        }else if (opcao == 0) {
            encerrarVotação = (prompt('Digite S para encerrar e N para continuar'))
            if(encerrarVotação == 'N'){
                
            }

            let comparador= prompt('Repita a Senha informada anteriormente')
        }else if (senha  == '0') {
            console.log('Votação encerrada com Sucesso!')
        }

        }while (encerrarVotação !== "s");
        
        
    
    
    
    ''
    let totalDeVotos = candidato1 + candidato2 + candidato3 + votobranco + votonulo;
    contador = contador - 1;
    console.log('Contagem:', contador);
    console.log('Este é o total de votos para o candidato ', nome1,':', candidato1);
    console.log('Este é o total de votos para o candidato ', nome2,':',candidato2);
    console.log('Este é o total de votos para o candidato ', nome3,':',candidato3);
    console.log('Este é o total de votos para o Voto Branco', votobranco);
    console.log('Este é o total de votos para o Voto Nulo', votonulo);
    console.log('Este é o Total da votação',totalDeVotos )

    
    if (candidato1 > candidato2 && candidato1 > candidato3) {
        console.log('O ganhador é  ',nome1);
        console.log('Total de Votos válidos mais Brancos',votobranco + candidato1);
        console.log('Porcentagem do ganhador', (candidato1 + votobranco) / totalDeVotos * 100)
    }else if (candidato2 > candidato1 && candidato2 > candidato3){
        console.log('O ganhador é  ',nome2);
        console.log('Total de Votos válidos mais Brancos',votobranco + candidato2);
    }else if (candidato3 > candidato1 && candidato3 > candidato2){
        console.log('O ganhador é  ',nome3);
        console.log('Total de Votos válidos mais Brancos',votobranco + candidato3);
    }else {
        console.log ('Empate');


    }

    let porcentagemCandidato1= candidato1 / totalDeVotos * 100
    console.log( nome1, 'votos', porcentagemCandidato1, '%')

    let porcentagemCandidato2= candidato2 / totalDeVotos * 100
    console.log( nome2, 'votos', porcentagemCandidato2 ,'%')

    let porcentagemCandidato3= candidato3 / totalDeVotos * 100
    console.log( nome3, 'votos', porcentagemCandidato3, '%')

    let porcentagemVotosBrancos= votobranco / totalDeVotos * 100
    console.log( 'Votos em Branco ', porcentagemVotosBrancos,'%')

    let porcentagemVotosNulos= votonulo / totalDeVotos * 100
    console.log('Votos Nulo', porcentagemVotosNulos, '%')
    
    
  
  
    

    
        
            

   


}
    