// script.js

document.getElementById("no").addEventListener("click", function() {
    askAgain();
});

function askAgain() {
    var answer = confirm("How mean! Say yess.......!");
    if (answer) {
        alert("Ohh...Thankyouuuu");
    } else {
        askAgain();
    }
}
document.getElementById("yess").addEventListener("click", function() {
    Thankyou();
});
function Thankyou(){
    var answer=alert("How Sweet,Thank youuu<3");
    
}