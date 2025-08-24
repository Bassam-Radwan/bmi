let height = document.getElementById('height')
let weight = document.getElementById('weight')
let calc = document.getElementById('calc')
let bmi = document.getElementById('bmi')
let container = document.getElementById('container')

let bmiVal = document.querySelector('h3')
bmiVal.style.display = 'none'
calc.addEventListener('click', () => {
    if (height.value == '' | weight.value == '') {
        alert("Please fill in all fields...")
    }
    if (height.value < 0 | weight.value < 0) {
        alert("Please Enter a positive number ")
    }

    if (!height.value.includes('.')) {
        height.value = height.value / 100;
    }
    let heightVal = height.value * height.value
    let weightVal = weight.value
    let total = weightVal / heightVal
    bmi.innerText = Math.floor(total)
    bmiVal.style.display = 'block'
    bmi.style.color = '#012768'
})
