//Fibonacci Challenge

function fibonacciGenerator(n) {
    let fibbo = [];
    let i;
    for (i = 0; i < n; i++) {
        if(i === 0) {
            fibbo.push(0)
        }
        fibbo.push(i + 1)
    }

    return console.log("fibonacci => ["  + fibbo + "]");
}

fibonacciGenerator(15)
