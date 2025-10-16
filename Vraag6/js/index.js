
let score = parseInt(window.prompt("Geef een score in op 20 ?"));

if (score < 10){
    alert("Onvoldoende")
} else if (score <= 13 ) {
    alert("Voldoende")
} else if (score <= 17 ) {
    alert("Goed")
} else if (score <= 20 ) {
    alert ("Uitstekend")
} else if (score > 20) {
    alert ("foute ingave")
};