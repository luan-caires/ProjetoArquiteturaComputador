
let mostraerro = document.getElementById("mostrarErro");
let botoes = document.getElementsByClassName("mostrarSolucoes");

let idpergunta = 0

carregarPergunta(idpergunta)

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click",acaoclick)
}

function acaoclick(evento)
{
    let resposta = evento.target.id
    if(resposta = perguntas[idpergunta].resposta){
        alert("Acertou");
        idpergunta++;
        carregarPergunta(idpergunta)
    }else{
        alert("Errou")
    }
}

function carregarPergunta(id){
    mostraerro.innerHTML = perguntas[id].pergunta;
}

