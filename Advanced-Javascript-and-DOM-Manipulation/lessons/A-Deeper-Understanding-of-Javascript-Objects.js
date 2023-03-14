function HouseKeper(yearsOfExperience, name, age, city, languages) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.age = age;
  this.city = city;
  this.languages = languages;
}

let clara = new HouseKeper(15, "Clara", 20, "Dohan", ["English", "Frech"])

console.log(clara);