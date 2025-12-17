let primeiroClique;
function iniciarJogo(){
    const telaInicial = document.getElementsByClassName('divCobra')[0];
    telaInicial.classList.add("telaInvisivel");    
    const telaJogo = document.getElementById('divJogo');
    telaJogo.classList.remove("blur-fundo"); 
    cobra.vida=3;
    cobra.cor="white";
    cobra.velocidade=2;
    trilha.tocar("jogandoJogo")
    jogar();
    primeiroClique=true;
   
}

function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    apple.desenhar();
    if (apple.teveColisao(cobra)){
        placar.pontuacao+=apple.valor;
        cobra.crescer();
        cobra.velocidade += 0.2;
        trilha.tocar("cobraComeu")
        apple = new Apple(10);      
    }
    if (cobra.vida > 0){
        requestAnimationFrame(jogar);
    }
    else
    {
        trilha.jogandoJogo.pause();
        trilha.jogandoJogo.currentTime=0;
        trilha.tocar("fimJogo");
        placar.desenhar()
        const telaInicial = document.getElementsByClassName('divCobra')[0];
        telaInicial.classList.remove("telaInvisivel");  
        const telaJogo = document.getElementById('divJogo');
        telaJogo.classList.add("blur-fundo"); 
    }

}

let trilha = new TrilhaSonora();
let apple = new Apple(10);
placar.desenhar();
tela.desenhar();

document.addEventListener("keydown", (evento) => {
    const tecla = evento.key.toLowerCase();

    if (tecla == "w" && (cobra.direcao == "direita" || cobra.direcao == "esquerda"))
        cobra.direcao = "cima";

    if (tecla == "d" && (cobra.direcao == "cima" || cobra.direcao == "baixo"))
        cobra.direcao = "direita";

    if (tecla == "s" && (cobra.direcao == "direita" || cobra.direcao == "esquerda"))
        cobra.direcao = "baixo";

    if (tecla == "a" && (cobra.direcao == "cima" || cobra.direcao == "baixo"))
        cobra.direcao = "esquerda";
});


document.addEventListener("click",(evento) =>{  
    if ((cobra.direcao=="direita"  || cobra.direcao=="esquerda") && (!primeiroClique)) {
        if (evento.clientY < cobra.y[0])  
           cobra.direcao="cima";
        else 
           cobra.direcao="baixo";
    }
    else{
        if (evento.clientX < cobra.x[0])  
            cobra.direcao="esquerda";
        else 
            cobra.direcao="direita";
    }
    primeiroClique=false;
})

