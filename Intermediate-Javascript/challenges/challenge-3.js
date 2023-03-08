//Fibonacci Challenge

function fibonacciGenerator(n) {
    let fibbo = [];
    let i;
    for (i = 0; i < n; i++) {
        fibbo.push(i + 1)
    }

    return console.log("fibonacci => ["  + fibbo + "]");
}

fibonacciGenerator(5)
