let count = document.querySelectorAll('.drum').length;
let allButtons = document.querySelectorAll('.drum');

for(let i = 0; i < count; i++) {
    allButtons[i].addEventListener('click', () => {
        alert('I got Clicked');
    })
}