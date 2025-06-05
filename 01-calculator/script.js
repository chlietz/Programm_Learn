// JavaScript Code für Calculator
var faktoren = ['', ''];
let i = 0;
let operator = null;
let warteAufZahl = false;

//Anzeige löschen
function initial () {
    document.getElementById('ausgabe').value = "";
}

// Zahlen für die Ausgabe zusammenstellen
function Schreiben () {
    const display = document.getElementById('ausgabe');
    if (faktoren[1] != "") {
        display.value = faktoren[1];
    } else if (faktoren[0] != "") {
        display.value = faktoren[0];
    } else {
        display.value = "0";
    }

}


function Anzeige (ziffer) {
    if (warteAufZahl) {
        faktoren[1] = ziffer;
        warteAufZahl = false;
    } else {
        if (operator === null) {
            faktoren[0] += ziffer;
        } else {
            faktoren[1] += ziffer
        }
    }

    Schreiben();
}

function EigababeOperator(op) {
    if (faktoren[0] === "") return;

    operator = op;
    warteAufZahl = true;
}

function Berechnen() {
    if (faktoren[0] === '' || faktoren[1] === '' || operator === null) return;
    const a = parseFloat(faktoren[0]);
    const b = parseFloat(faktoren[1]);

    switch (operator) {
        case "+": faktoren[0] = a + b; 
        break;
        case "-": faktoren[0] = a - b; 
        break;
        case "*": faktoren[0] = a * b; 
        break;
        case "/": faktoren[0] = b !== 0 ? a / b : "Div by Null"; 
        break;
    }
    faktoren[0] = faktoren[0].toString();
    faktoren[1] = '';
    warteAufZahl = false;
    Schreiben();
}

function ClearDisplay() {
    document.getElementById('ausgabe').value = '';
    faktoren[0] = '';
    faktoren[1] = '';
    operator = null;
    warteAufZahl = false;
}