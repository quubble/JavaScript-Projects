var result = document.getElementById('result')
var note = document.getElementById('note')
var calculate = document.getElementById('calculate')
calculate.addEventListener("click",

    function calculateBmi() {
        var w = document.getElementById("weight").value
        var h = document.getElementById("height").value
        if (w === "" || h === "") {
            alert("enter both height and weight")
        } else {
            h = h * 0.3048       //1 foot = 0.3048 metres
            var bmi = w / (h * h)
            bmi = Math.round((bmi + Number.EPSILON) * 100) / 100
            if (bmi <= 18.5) {
                result.innerHTML = bmi
                note.innerHTML = "You are underweight"
            } else if (bmi > 18.5 && bmi <= 25) {
                result.innerHTML = bmi
                note.innerHTML = "You are healthy"
            } else if (bmi > 25 && bmi <= 30) {
                result.innerHTML = bmi
                note.innerHTML = "You are Overweight"
            } else if (bmi > 30) {
                result.innerHTML = bmi
                note.innerHTML = "You are obese"
            } else {
                alert("Check your entered values correctly")
            }
        }





    })