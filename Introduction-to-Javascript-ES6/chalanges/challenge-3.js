function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;

    return console.log("Your have " + days + " days in a year " + weeks + " weeks " + months + " months left. ");
}

lifeInWeeks(12);



