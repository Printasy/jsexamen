
let reeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (`De complete reeks is : ${reeks}`);
console.log ("De even getallen in deze reeks zijn :");

for (let i=0; i<=reeks.length; i++) {
    if (isEven(reeks[i]) === false){
        console.log(i);
    }
}

function isEven(getal) {
    if ( getal % 2 === 0) {
        return true
    } else {
        return false
    }
}