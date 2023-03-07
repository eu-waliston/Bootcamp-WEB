//Functions - PT 1 117 - Creating and Calling Functions
function breakFast() {
    console.log("open the door");
    console.log("Brush yout theets");
    console.log("Eat your bread");
    console.log("Drink your milk");
    console.log("do to the school");
}

breakFast();

//Functions - PT 2 Parameters and Arguments
function doMath(money) {
    return Math.floor(money / 1.5);
}
let iceCream = doMath(5);
console.log("With $5 you can buy: " + iceCream + " ice creams");

//Functions Part 3 Outputs & Return Values
