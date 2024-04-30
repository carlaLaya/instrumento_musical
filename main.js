/*document.getElementById('button_pom').innerHTML = "Pom";
//document.getElementById('button_pom').style.color="black" ;
//document.getElementById('titulo').style.color="black" ;

/*function playSonidoPom(){
    document.querySelector('#sonido_tecla_pom').play();
}

function playSonidoClap() {
    document.querySelector('#sonido_tecla_clap').play()
}


function reproducirSonido(idSonido) {
    document.querySelector(idSonido).play();
}
function reproducirSonido(idSonido) {
    document.querySelector(idSonido).play();
}*/

function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//estructura de repeticion
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function(){
        playSonido(idAudio);
    };
}
