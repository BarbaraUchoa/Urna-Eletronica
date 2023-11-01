
function data() {
    const data = new Date().toLocaleString();
    return data
}
function verificarIntegridadeUrna() {
    
    fetch('urnaEletronica.js')
    .then(conteudo => { conteudo.text() })
    .then(conteudo => CryptoJS.SHA256(conteudo).toString())
    .then(hashUrnaAtual => {
        fetch('./hashVerificado')
        .then(conteudo => conteudo.text())
        .then(hashVerificado => {


            if (hashUrnaAtual === hashVerificado) {
                console.log('Hash verificado,urna integra')

            } else {

                console.log('Hashes Diferentes, URNA ADULTERADA!');
                console.log(`Hash esperado: ${hashVerificado}`);
                console.log(`Hash da Urna: ${hashUrnaAtual}`);
            }

        }
        )
    }
    )
}
async function urnaJson() {
    fetch('./urna.json')
    .then(conteudo => conteudo.json())
    .then(dados =>  {
        for(i = 0; i < dados.candidatos.length;i++){
            //console.log(dados.candidatos[i].nome)
            document.getElementById('nomeDosCandidatos').innerHTML += `<p> ${dados.candidatos[i].codigo} - ${dados.candidatos[i].nome}</p>`
        }
    } 

    )
    }

 urnaJson()

async function audioConfirmacao() {
    const audio = new Audio('./Confirmacao.mp3');
    await audio.play();

}

async function urnaEletronica() {

    document.getElementById('nomeDosCandidatos').innerHTML = ''
    let candidatos = [

        [56, 'Enéas'],
        [45, 'Pancadinha'],
        [22, 'Maria do Bairro'],
        [13, 'Mazzaropi'],
        [50, 'Bico da Gaita'],
        ['00', 'Branco']
    ]

   



    console.clear();
    let senhaMesario = prompt('Digite uma senha de 6 dígitos (123456)');

    // declaração das variáveis

    let contador = 0;
    let nome1 = candidatos[0][1];
    let nome2 = candidatos[1][1];
    let nome3 = candidatos[2][1];
    let nome4 = candidatos[3][1];
    let nome5 = candidatos[4][1];
    let branco = candidatos[5][1];
    let opcao
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let candidato4 = 0;
    let candidato5 = 0;
    let votobranco = 0;
    let encerrarVotação = "N";
    let datainicio = data
   
    
        
    
    

    do {
        opcao =parseInt(prompt('inicio da votação'))
        console.log('data e hora inicial da votação : ' + data)
        console.log('Repetição');
        contador++;

            if(opcao ===candidatos[0][0]) {

            if (confirm('Confirma seu voto no candidato?:  ' + nome1 + ' - ' + candidatos[0][0])) {
                console.log('Opção  de voto é o candidato', nome1);
                candidato1++;
                await audioConfirmacao();
            }

            } else if (opcao ===  candidatos[1][0]) {

            if (confirm('Confirma seu voto no candidato?: ' + nome2 + candidatos[1][0])) {
                console.log('Opção de voto é o candidato', nome2);
                candidato2++;
                await audioConfirmacao();
            }

            } else if (opcao === candidatos[2][0]) {

            if (confirm('Confirma seu voto no candidato?: ' + nome3 + candidatos[2][0])) {
                console.log('Opção de voto é o candidato', nome3);
                candidato3++;
                await audioConfirmacao();
            }


             } else if (opcao === candidatos[3][0]) {

            if (confirm('Confirma seu voto no candidato?: ' + nome4 + candidatos[3][0])) {
                console.log('Opção de voto é o candidato', nome4);
                candidato4++;
                await audioConfirmacao();
            }
             } else if (opcao === candidatos[4][0]) {

            if (confirm('Confirma seu voto no candidato?: ' + nome5 + candidatos[4][0])) {
                console.log('Opção de voto é o candidato', nome5);
                candidato5++;
                await audioConfirmacao();
            }

            } else if (opcao == candidatos[5][0]) {
            if (confirm('Confirma seu no em Branco? ' + candidatos[5][0])) {

                console.log('Opção  do voto é  em Branco');
                branco++;
                await audioConfirmacao();

            }

             } else if (opcao == 0) {
            return;
            
            } else if (opcao == senhaMesario) {
            encerrarVotação = (prompt(' Deseja REALMENTE ENCERRAR ESSA VOTAÇÃO? Digite S para encerrar e N para continuar'))
            if (encerrarVotação == 'N') {
                
            }
            
            if (encerrarVotação === 'S') {
                console.log('Votação encerrada com Sucesso!') 
            }
            
             }   
            
    }while (encerrarVotação !== "s");             
   
        
    
     let datafinal = data();
     //se ouver votaçao
        console.log('=====================Boletim da Urna====================')

     let totalDeVotos = candidato1 + candidato2 + candidato3 + candidato4 + candidato5 + votobranco;
    console.clear();

    console.log('Este é o total de votos para o candidato(a) ', nome1, ':', candidato1);
    console.log('Este é o total de votos para o candidato ', nome2, ':', candidato2);
    console.log('Este é o total de votos para o candidato ', nome3, ':', candidato3);
    console.log('Este é o total de votos para o candidato ', nome4, ':', candidato4);
    console.log('Este é o total de votos para o candidato ', nome5, ':', candidato5);
    console.log('Este é o total de votos para o Voto Branco', votobranco);
    console.log('Este é o Total da votação', totalDeVotos)
    contador = contador - 1;


    if (candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > candidato4 && candidato1 > candidato5) {
        console.log('O ganhador é  ', nome1);
        console.log('Total de Votos válidos mais Brancos', branco + candidato1);
        console.log('Porcentagem do ganhador', (candidato1 + branco) / totalDeVotos * 100)
    } else if (candidato2 > candidato1 && candidato2 > candidato3 && candidato2 > candidato4 && candidato2 > candidato5) {
        console.log('O ganhador é  ', nome2);
        console.log('Total de Votos válidos mais Brancos', branco + candidato2);
    } else if (candidato3 > candidato1 && candidato3 > candidato2 && candidato3 > candidato4 && candidato3 > candidato5) {
        console.log('O ganhador é  ', nome3);
        console.log('Total de Votos válidos mais Brancos', branco + candidato3);
    } else if (candidato4 > candidato1 && candidato4 > candidato2 && candidato4 > candidato3 && candidato4 > candidato5) {
        console.log('O ganhador é  ', nome4);
        console.log('Total de Votos válidos mais Brancos', branco + candidato3);
    } else if (candidato5 > candidato1 && candidato5 > candidato2 && candidato5 > candidato4 && candidato5 > candidato3) {
        console.log('O ganhador é  ', nome3);
        console.log('Total de Votos válidos mais Brancos', branco + candidato3);
    } else {
        console.log(' não ouve ganhador nesta urna (Empate entre 2 ou mais candidaos)');
        empate = true
    }


    let porcentagemCandidato1 = candidato1 / totalDeVotos * 100
    console.log(nome1, 'votos', porcentagemCandidato1.toFixed(2), '%')
    let porcentagemCandidato2 = candidato2 / totalDeVotos * 100
    console.log(nome2, 'votos', porcentagemCandidato2.toFixed(2), '%')
    let porcentagemCandidato3 = candidato3 / totalDeVotos * 100
    console.log(nome3, 'votos', porcentagemCandidato3.toFixed(2), '%')
    let porcentagemCandidato4 = candidato4 / totalDeVotos * 100
    console.log(nome4, 'votos', porcentagemCandidato4.toFixed(2), '%')
    let porcentagemCandidato5 = candidato5 / totalDeVotos * 100
    console.log(nome5, 'votos', porcentagemCandidato5.toFixed(2), '%')
    let porcentagemVotosBrancos = branco / totalDeVotos * 100
    console.log('Votos em Branco ', porcentagemVotosBrancos.toFixed(2), '%')
    console.log(' Data e horário do término da votação'+ datafinal);
    



}
     verificarIntegridadeUrna();
    console.log(' Encerrada a Votação');



