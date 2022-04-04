//
//
//Script Calcolatrice con Eval
//
//

var display = document.getElementById('display');  //variabile per lo schermo




function aggiornaOperazione(value){
    display.value += value;
    console.log(value);
}

function calcolaRisultato(){
    display.value = eval(display.value);
    console.log("Il risultato dell'operazione:" + " " + display.value);
}

function cancellaOperazione(){
    display.value = '';
    console.log("--- Cancello tutto ---");
}
