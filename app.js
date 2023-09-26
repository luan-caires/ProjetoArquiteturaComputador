
let mostraerro = document.getElementById("mostrarErro");
let botoes = document.getElementsByClassName("mostrarSolucoes");
let placar = document.getElementById("placar");
let acerto = 0;
let pontos = 100;

let idpergunta = 0;

carregarPergunta(idpergunta);
mostraPlacar(acerto);

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click",acaoclick)
}

function acaoclick(evento, erro)
{
    let resposta = evento.target.id
    if(resposta == perguntas[idpergunta].resposta){
        alert("Acertou");
        idpergunta++;
       
       
        acerto+=pontos;
        pontos = 100;
        mostraPlacar(acerto);
        carregarPergunta(idpergunta);
    }else{
        alert("Tente Novamente");
        pontos -= 10;
         
    }
}

function carregarPergunta(id){
    mostraerro.innerHTML = perguntas[id].pergunta;
}
function mostraPlacar(valor){
   
        placar.innerHTML = valor; 
 
}