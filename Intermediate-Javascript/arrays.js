//Collections Working with Javascript Arrays
let guests = [
    "Alex",
    "Angela",
    "Tom",
    "Willian",
    "Lukas",
    "Maykon"
]
let yourName = "Json"
if (guests.includes(yourName)) {
    console.log("Your are on the list welcome " + yourName);
} {
    console.log("Sorry your name it's not on the list");
}
console.log(guests.includes("Alex"));

//Adding Elements and Intermediate Array Techniques
//Push, Pop
var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 2 === 0) {
        output.push("fizz")
    } else {
        output.push(count)
    }

    count++;
    console.log(output);

}

fizzBuzz();