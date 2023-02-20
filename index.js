let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")
let countHome = 0
let countGuest = 0

function add1H() {
    countHome += 1
    num1El.innerText = countHome
}
function add2H() {
    countHome += 2
    num1El.innerText = countHome
}
function add3H() {
    countHome += 3
    num1El.innerText = countHome
}

function add1G() {
    countGuest += 1
    num2El.innerText = countGuest
}
function add2G() {
    countGuest += 2
    num2El.innerText = countGuest
}
function add3G() {
    countGuest += 3
    num2El.innerText = countGuest
}