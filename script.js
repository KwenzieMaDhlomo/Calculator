function addToDisplay(value) {
    var display = document.getElementsByName('display')[0];
    display.value += value;
}

function removeLastCharacter() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    var display = document.getElementsByName('display')[0];
    display.value = '';
}

function calculatePercentage() {
    var display = document.getElementsByName('display')[0];
    var value = parseFloat(display.value.replace(',', '.')) / 100;
    display.value = value;
}

function addSymbol(symbol) {
    var display = document.getElementsByName('display')[0];
    display.value += symbol;
}

function addDecimal() {
    var display = document.getElementsByName('display')[0];
    if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
}

function calculate() {
    var display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
}
