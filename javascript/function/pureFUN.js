// pure vs impure fun

//  aisa fun jo ki bahar ki value ko na badle  wo h pure fun 
let a=12;
function abcd(){
    console.log("here");
}

function hui(){
    a++;
}
abcd();
hui();
hui();
console.log(a);



//  aisa fun jo bahar ki value ko badal de wo h impure function
