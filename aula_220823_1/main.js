const worker = new Worker('worker.js');

worker.addEventListener('message', function(event){
    const square = event.data;
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'O quadrado do numero é: '+ square;
});

function calculateSquare(){
    const inputElement = document.getElementById('inputNumber');
    const inputNumber = Number(inputElement.value);
    worker.postMessage(inputNumber);
}
