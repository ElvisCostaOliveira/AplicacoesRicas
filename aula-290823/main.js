//Quadrado
const worker = new Worker('worker.js');
worker.addEventListener('message', function(event) {
    const square = event.data; 
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'O quadrado do número é: ' + square; 
});


function calculateSquare (){
    const inputElement = document.getElementById('inputNumber');
    const inputNumber = Number(inputElement.value); 
    worker.postMessage(inputNumber);
}

//Triangulo

const workerTriangulo = new Worker('workerTriangulo.js');
workerTriangulo.addEventListener('messageT', function(event1) {
    const areaTriangulo = event1.data; 
    const resultElement = document.getElementById('resultTriangle');
    resultElement.textContent = 'A area é: ' + areaTriangulo; 
});


function calculateTriangle() {
    const inputElement1 = document.getElementById('inputNumber1');
    const inputElement2 = document.getElementById('inputNumber2');
    const inputNumber1 = Number(inputElement1.value);
    const inputNumber2 = Number(inputElement2.value);
    workerTriangulo.postMessage([inputNumber1, inputNumber2]);
}

//Fatorial
function calculateFactorial (){
    const inputElement = document.getElementById('inputNumber');
    const inputNumber = Number(inputElement.value); 
    workerQuadrado.postMessage(inputNumber);
}