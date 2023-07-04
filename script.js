let Status = document.getElementById("status");
let input = document.getElementById("input-degrees");
let result = document.getElementById("result");
let convertBtn = document.getElementById("convert-button");
let text = document.getElementById("convertedTitle");

let data = {status: "Fahrenheit",};

Status.addEventListener("change", function(event) {
    data.status = event.target.value;
});

convertBtn.addEventListener("click", () => {
    let degrees = input.value;
    if (degrees === "") {
        alert("Enter Valid Degrees to Convert");
    } else if (isNaN(degrees)) {
        alert("not a valid degrees");
    } else if (data.status === "Fahrenheit") {
        degrees = parseInt(degrees);
        console.log(degrees);
        const celcius = (degrees - 32) * 5 / 9;
        result.textContent = celcius + " °C";
        text.textContent = "Converted temperature in Celcius";
        text.style.toggle.color = "red";
    } else if (data.status === "Celcius") {
        degrees = parseInt(degrees);
        const celcius = (degrees * (9 / 5)) + 32;
        result.textContent = celcius + " °F";
        text.textContent = "Converted temperature in Fahrenheit";
        text.style.toggle.color = "red";
    }

});