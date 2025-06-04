// JavaScript Code für Calculator

//Anzeige löschen
function initial () {
    document.getElementById('ausgabe').value = "";
}

// Zahlen für die Ausgabe zusammenstellen
function Anzeige (name) {
    let AusgabeAlt = Lesen ();
    let AusgabeNeu = AusgabeAlt + name;
    Schreiben (AusgabeNeu);  
}

// Inhalt der Anzeige auslesen
function Lesen () {
    let AusgabeAlt = document.getElementById('ausgabe').value;
    if (AusgabeAlt == undefined) {
        AusgabeAlt = '';
    };
    return AusgabeAlt;
}

// Inhalt in die Anzeige schreiben
function Schreiben (name) {
    document.getElementById('ausgabe').value = name;
}

//Verteiler wenn eine Operationstaste (x/+- etc.) geklickt wurde
function Verteiler (zeichen) {
    var mal1 = 0;
    var mal2 = 0;
    var erg = 0;
    

    switch (zeichen) {
        case "Tmal":
            mal1 = Lesen();
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
            if ( zeichen === "Tmal") {
                erg = parseInt(mal1) * parseInt(mal2);
                //alert(erg);
                Schreiben(erg);
            }
            break;
        
        case "Tz":

            break;


    }
}