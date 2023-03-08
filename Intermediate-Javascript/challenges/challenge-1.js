//Leap Year Challenge 💪

let year = 2000;
if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log("Divisible by 4 \nDivisible by 100 \ndivisible by 400\n\n" + year + " Is a Leap Year");
} else {
    console.log("Not Leap Year :(");
}
