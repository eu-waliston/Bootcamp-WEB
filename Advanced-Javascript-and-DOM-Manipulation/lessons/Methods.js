function HouseKeper(yearsOfExperience, name, age, city, languages) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.age = age;
    this.city = city;
    this.languages = languages;
    this.clean = function (){
        console.log("I'll Clean this room");
    }
}

let KEEP = new HouseKeper(18, "Anny", 18, "Amsterdã", ["French","English"])
KEEP.clean()

console.log(KEEP);
console.log(KEEP.clean());

