//Who's Buying Lunch ? Code Chalenge


let list = ["Angela", "Ben", "Michael", "Chloe"]

function whosPaying() {
    const pay = Math.floor(Math.random() * list.length);

    if (pay === 0) {
        console.log(list[0] + " Is Going to pay the luch today");
    } else if (pay === 1) {
        console.log(list[1] + " Is Going to pay the luch today");
    } else if (pay === 2) {
        console.log(list[2] + " Is Going to pay the luch today");
    } else if (pay === 3) {
        console.log(list[3] + " Is Going to pay the luch today");
    }

    
}
whosPaying();


