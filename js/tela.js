const tela = {
    largura: 360,
    altura: 600,
    cor: "#88E788",
    desenhar(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(0,30,this.largura,this.altura)
    }
}

