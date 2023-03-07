//Challenge Create a BMI Calculator
function bmiCalculator(weight, height){
    return Math.floor(weight / ( height * height));
}

let bmi = bmiCalculator(65, 1.8);

console.log("Your BMI is: " + bmi);
