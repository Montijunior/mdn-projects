const multiplierNumbers = document.getElementById("number");
const result = document.getElementById("results");

function multiply() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const value = number1 * number2;
    result.innerHTML = 'The result is ' + value;
}
const btn =document.querySelector("button");
btn.onclick = () => {
    multiply();
};