// JavaScript Code für Calculator
//alert("Ich bin da!");
function Anzeige (name) {
    alert(name);
    let AusgabeAlt = document.getElementsByName("ausgabe").values;
    if (AusgabeAlt = "") {
        AusgabeAlt = "0";
    };
    let Eingabe = document.getElementsByName(name).values;
    let AusgabeNeu = toString(AusgabeAlt) + toString(Eingabe);
    alert(AusgabeAlt);
    alert(Eingabe);
    alert(AusgabeNeu);
    document.getElementsByName("ausgabe").values = AusgabeNeu;

    
}