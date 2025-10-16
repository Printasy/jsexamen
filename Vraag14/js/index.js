
let getal = parseInt(window.prompt("Geef een getal in"));
let kwadraat = berekenKwadraat(getal);
alert (`Het kwadraat van ${getal} is ${kwadraat}`);

function berekenKwadraat(getal) {
    return getal * getal;
}