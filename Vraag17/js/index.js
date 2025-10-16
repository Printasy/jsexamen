let aantalNamen = parseInt(window.prompt("Hoeveel namen wil je ingeven ?"))
let naam = "";
let reeks = [];
let aantal = 0;
var lengte = 0;
for (let i=1;i <= aantalNamen; i++){
    naam = window.prompt (`Geef de ${i}e naam in :`);
    reeks.push(naam);
}
for (let i = 0; i <= reeks.length; i++ ){
    naam = reeks[i];
    lengte = naam.length);
    if (lengte > 5){
        aantal++;
    }
}
console.log(`Dit is de ingegeven reeks namen : ${reeks}`);
console.log(`Uit deze reeks namen bevatten er ${aantal} meer dan 5 letters`);