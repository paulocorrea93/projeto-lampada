const ligarDesligar = document.getElementById ('ligarDesligar');
const lamp = document.getElementById ('lamp');

function checarLampada(){
    return lamp.src.indexOf ('quebrada') > -1;
}

function ligada (){
    if (!checarLampada()){
        lamp.src = './img/ligada.jpg';
    }
}

function desligada (){
    if (!checarLampada()){
        lamp.src = './img/desligada.jpg';
        ligarDesligar.textContent = 'Ligar';
    }
    
}
function lampadaQuebrada (){
    lamp.src = './img/quebrada.jpg';
}

function ligadaOuDesligada (){
    if(ligarDesligar.textContent == 'Ligar'){
        ligada();
        ligarDesligar.textContent = 'Desligar';
    } else {
        desligada();
        ligarDesligar.textContent = 'Ligar';
    }
}

ligarDesligar.addEventListener('click', ligadaOuDesligada);
lamp.addEventListener('mouseover', ligada);
lamp.addEventListener('mouseleave', desligada);
lamp.addEventListener('dblclick', lampadaQuebrada);

/* const turnOnOff = document.getElementById ( 'turnOnOff' );

const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar' ) {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}


turnOnOff.addEventListener ( 'click', lampOnOff );

lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
 */