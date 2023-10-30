function data (){
    const data = new Date().toLocaleString();
    return data
}
function verificarIntegridadeUrna() {

    fetch ('urnaEletronica.js')
    .then(conteudo => {conteudo.text()})
    .then(conteudo => CryptoJs.SHA256(conteudo).toString())
    .then(hashUrnaAtual => {
        fetch('./hashVerificado')
        .then(conteudo =>conteudo.text())
        .then(hashVerificado => {


        if(hashUrnaAtual === hashVerificado){
            console.log('Hash verificado,urna integra')

            } else {  

                console.log('Hashes Diferentes, URNA ADULTERADA!');
                console.log(`Hash esperado: ${hashVerificado}`);
                console.log(`Hash da Urna: ${hashUrnaAtual}`);
            }
            
        }
    )}
)}


function urnaEletronica() {
    
    document.getElementById('nomeDosCandidatos').innerHTML=''


    let candidatos = [
    
        [56,'Enéas'],
        [45,'Pancadinha'],
        [22,'Maria do Bairro'],
        [13,'Mazzaropi'],
        [50,'Bico da Gaita'],
        ['00','Branco']
        ]
        
    for (voto = 0; voto < candidatos.length; voto++){
        
   
        document.getElementById('nomeDosCandidatos').innerHTML += `<p>${candidatos[voto][0]} - ${candidatos[voto][1]} </p>` 
    
    }
    
    
    
    console.clear();
    let senhaMesario = prompt ('Digite uma senha de 6 dígitos (123456)');



    
 
 
 // declaração das variáveis

 let contador = 0;
 

 let candidato2 = 0;
 let candidato3 = 0;
 let votobranco = 0;
 let votonulo = 0;
 let encerrarVotação = "N";
 let datainicio = data();
 let datafinal = data();
 
 
 
 
 do {
     
     console.log(' Configuração da urna');
     
     
  
     console.log('Repetição');
     contador++;
     
     if (opcao === 1) {
         if (confirm('Confirma seu voto no candidato?: ' + candidato[voto][0] - candidatos[voto][1]))
         {
             console.log('Opção  de voto é o candidato',candidatos);
             candidatos++;
             
            }
            
        } else if (opcao === 2) {
            if (confirm('Confirma seu voto no candidato?: ' + nome2))
            
            {
                console.log('Opção de voto é o candidato', nome2);
                
                candidato2++;
            }
            
        } else if (opcao === 3) {
            console.log('Opção de voto é o candidato',nome3);
            
            if ( confirm('Confirma seu voto no candidato?: ' + nome3))
            
            {
                console.log('Opção de voto é o candidato',nome3);
                
                candidato3 ++;
            }
            
        } else if (opcao == 4) {
            if (confirm('Confirma seu no em Branco? '))
            {
                
                console.log('Opção  do voto é  em Branco');
                
                votobranco++;
            }
            
        } else if (opcao == 0 ){
            return;
            
        } else if (opcao == senhaMesario) {
            encerrarVotação = (prompt(' Deseja REALMENTE ENCERRAR ESSA VOTAÇÃO? Digite S para encerrar e N para continuar'))
            if(encerrarVotação == 'N'){
                
            }
            
            if (encerrarVotação === 'S' && encerrarVotação !== 'N'){
                alert('opção inválida')
            }
            
            
            
            console.log('Votação encerrada com Sucesso!')
            
            
        }else {
            opcaoVtonULO = confirm('ATENÇÃO: SEU VOTO SERA ANULADO. DESEJA PROCESSEGUIR?');
            if (opcaoVtonULO){
                votonulo++
            }
        }
        
    }while (encerrarVotação !== "s");
        
    //se ouver votaçao
    
    console.log('=====================Boletim da Urna====================')
    
    
    let totalDeVotos = candidato1 + candidato2 + candidato3 + votobranco + votonulo;
    console.clear ();
    console.log('Data e horário do inicío  da votação' + datainicio);
    console.log('Este é o total de votos para o candidato(a) ', nome1,':', candidato1 );
    console.log('Este é o total de votos para o candidato ', nome2,':',candidato2);
    console.log('Este é o total de votos para o candidato ', nome3,':',candidato3);
    console.log('Este é o total de votos para o Voto Branco', votobranco);
    console.log('Este é o total de votos para o Voto Nulo', votonulo);
    console.log('Este é o Total da votação',totalDeVotos )
    
         contador = contador - 1;
         
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
        console.log (' não ouve ganhador nesta urna (Empate entre 2 ou mais candidaos)');
        empate = true
        
        
    }
    
    let porcentagemCandidato1= candidato1 / totalDeVotos * 100
    console.log( nome1, 'votos', porcentagemCandidato1.toFixed(2), '%')
    
    let porcentagemCandidato2= candidato2 / totalDeVotos * 100
    console.log( nome2, 'votos', porcentagemCandidato2.toFixed(2) ,'%')

    let porcentagemCandidato3= candidato3 / totalDeVotos * 100
    console.log( nome3, 'votos', porcentagemCandidato3.toFixed(2), '%')
    
    let porcentagemVotosBrancos= votobranco / totalDeVotos * 100
    console.log( 'Votos em Branco ', porcentagemVotosBrancos.toFixed(2),'%')

    let porcentagemVotosNulos= votonulo / totalDeVotos * 100
    console.log('Votos Nulo', porcentagemVotosNulos.toFixed(2), '%')
    console.log = datafinal(' Data e horário do término da votação ' + data());
    verificarIntegridadeUrna();
    console.log (' Encerrada a Votação');
    
    
    
    
}  
