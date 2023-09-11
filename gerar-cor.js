//function gerando cores aleatotiamente com o metodo math
//retornando as cores em rgbs
function gerarCor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

/*function de event click , apos clicar pegara a cor gerada na function acima e 
jogara em uma const.em seguida modificar a cor via CSS
*/
function mudarCor() {
    const  pegarCor = gerarCor();
    const cardMenor = document.getElementById('card-menor')
    cardMenor.style.backgroundColor = pegarCor
  }
  