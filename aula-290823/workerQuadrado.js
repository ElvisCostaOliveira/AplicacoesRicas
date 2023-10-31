self.addEventListener('message2', function(event2) {
    const inputNumber = event2.data; 
    const factorial = inputNumber * inputNumber; 
    this.self.postMessage(factorial);
});

