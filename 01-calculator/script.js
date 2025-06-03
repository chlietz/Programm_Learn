// JavaScript Code für Calculator
function initial () {
    document.getElementById('ausgabe').value = "";
}

function Anzeige (name) {
    let AusgabeAlt = Lesen ();
    let AusgabeNeu = AusgabeAlt + name;
    Schreiben (AusgabeNeu);  
}

function Lesen () {
    let AusgabeAlt = document.getElementById('ausgabe').value;
    if (AusgabeAlt == undefined) {
        AusgabeAlt = '';
    };

    return AusgabeAlt;
}

function Schreiben (name) {
    document.getElementById('ausgabe').value = name;
}

function Rechnen (zeichen) {
    let mal1;
    let mal2;
    let erg;
    //let mal1 = Lesen();
    //alert(mal1 + ' - ' + zeichen);
    switch (zeichen) {
        case "Tmal":
            mal1 = Lesen();
            alert(mal1);
            initial();
            break;
        case "Tdiv":

            break;
        case "Tplus":

            break;

        case "Tminus":

            break;

        case "Tres":
            mal2 = Lesen();
            alert(mal1);
            alert(mal2);
            if ( zeichen = "Tmal") {
                erg = parseInt(mal1) * parseInt(mal2);
                //alert(erg);
                Schreiben(erg);
            }
            break;
        
        case "Tz":

            break;


    }
}