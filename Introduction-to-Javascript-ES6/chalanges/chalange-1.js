//Chalange - 1 Change the variable values 

function chalange() {
    let a = "3";
    let b = "8";
    // ******* Don't change the code above 👆 *********

    let aux1 = a;
    let aux2 = b;

    a = aux2;
    b = aux1;

    // ******* Don't change the code below 👇 *********
    console.log("a is " + a);
    console.log("b is " + b);
}

chalange();
