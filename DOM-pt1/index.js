document.querySelector("input").click();

document.getElementsByClassName('list')[2].innerHTML = "Waliston";



document.querySelector("li a").style.color = "white"

document.querySelector("h1").style.color = "white"
document.querySelector("h1").style.fontFamily = "sans-serif"
document.querySelector("h1").style.textAlign = "center"


document.querySelector("button").style.backgroundColor = "blue"

let btn = document.querySelector("button").addEventListener('click', () => {
    let body = document.querySelector("body")
    let h1 = document.querySelector("h1")

    body.classList.toggle('colors')
    h1.classList.toggle("huge")
})


document.querySelector("button").style.color = "#fff"
document.querySelector("button").style.padding = "15px"
document.querySelector("button").style.borderRadius = "5px"





