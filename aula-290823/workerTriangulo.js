self.addEventListener('messageT', function(event1) {
    const [inputNumber1, inputNumber2] = event1.data;
    const areaTriangulo = (inputNumber1 * inputNumber2) / 2;
    self.postMessage(areaTriangulo);
});

