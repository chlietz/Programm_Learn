// JavaScript Code für Calculator
//alert("Ich bin da!");
function Anzeige (name) {
    //alert(name);
    let AusgabeAlt = document.getElementsByName('Ausgabe').value;
    if (AusgabeAlt == undefined) {
        AusgabeAlt = '0';
    }
    //let Eingabe = document.getElementsByName(name).values;
    //alert(Eingabe);
    let AusgabeNeu = AusgabeAlt + name;
    //alert(AusgabeAlt);
    
    //alert(AusgabeNeu);
    document.getElementById('ausgabe').value = AusgabeNeu;

    
}