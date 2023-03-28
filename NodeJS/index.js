const fs = require("fs");
const hero = require("superheroes")
const supervillains = require('supervillains');

let data =  hero.all.toString()

fs.writeFileSync("file.txt", data);

console.log(`${hero.random()} x ${supervillains.random()}`);