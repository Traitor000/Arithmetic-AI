// Copyright © Ashutosh Gautam

let num1 = parseFloat(prompt("Enter num1:"))
let num2 = parseFloat(prompt("Enter num2:"))

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let calc = document.getElementById("sum-el")

function add() {
    calc.textContent = num1 + num2
}

function sub() {
    calc.textContent = num1 - num2
}

function mul() {
    calc.textContent = num1 * num2
}

function div() {
    calc.textContent = num1 / num2
}
