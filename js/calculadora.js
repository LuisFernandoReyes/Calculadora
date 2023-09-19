var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var opSumar = document.getElementById("sumar");
var opRestar = document.getElementById("restar");
var opMult = document.getElementById("mul");
var opDivi = document.getElementById("divi");
var resultado = document.getElementById("resultado");
var oper= document.getElementById("oper");

function sumar() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        var resultadoSum = num1 + num2;
        resultado.value = resultadoSum;
        }
    oper.value="+";
}

function restar() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    if (!isNaN(num1) && !isNaN(num2)) {
    var resultadoRes = num1 - num2;
    resultado.value = resultadoRes;
    }
    oper.value="-";
}

function multiplicar() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    if (!isNaN(num1) && !isNaN(num2)){
        var resultadoMul = num1 * num2;
        resultado.value = resultadoMul;
    }
    oper.value="X";
}

function dividir() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    oper.value="/";
    if (!isNaN(num1) && !isNaN(num2)){
        if (num2 !== 0) {
            var resultadoDiv = num1 / num2;
            resultado.value = resultadoDiv;
        } else {
            resultado.value = "No puedes dividir entre cero";
        }
    }
}

opSumar.addEventListener("click", sumar);
opRestar.addEventListener("click", restar);
opMult.addEventListener("click", multiplicar);
opDivi.addEventListener("click", dividir);
