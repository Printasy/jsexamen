let reeks = [];
let getal = 0;
for (let i = 1; i <= 5; i++) {
    getal = parseInt(window.prompt(`Geef het ${i}e getal in`));
    reeks.push(getal);
}
console.log (`Volgende getallen werden ingegeven : ${reeks}`);
console.log("Van de ingegeven getallen zijn de volgende groter dan 10 :")

for (let i=0;i < reeks.length; i++) {
    if (reeks[i] > 10) {
        console.log(reeks[i]);
    }
}
