function add(n1, n2) {
    return n1 + n2
}

function subtract(n1,n2) {
    return n1 - n2
}

function multiply(n1,n2) {
    return n1 * n2
}

function divide(n1,n2) {
    return n1 / n2
}

function calc(n1,n2,operator) {
    return console.log("result is: " + operator(n1, n2));
}

calc(5, 5, multiply)

