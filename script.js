let num1;
let num2;
let result;
let out = $('#out');

function getNumbers() {
    num1 = $('#number1').val();
    num1 = parseFloat(num1);
    num2 = $('#number2').val();
    num2 = parseFloat(num2);
}

function plus() {
    getNumbers();
    result = num1 + num2;
    out.html(result);
}

function minus() {
    getNumbers();
    result = num1 - num2;
    out.html(result);
}

function multiplication() {
    getNumbers();
    result = num1 * num2;
    out.html(result);
}

function division() {
    num1 = $('#number1').val();
    num1 = parseFloat(num1);
    num2 = $('#number2').val();
    if (num2 == 0) {
        alert("division by ZERO");
        result = "Change second number";
    } else {
        num2 = parseFloat(num2)
        result = num1 / num2
    }
    out.html(result);
}