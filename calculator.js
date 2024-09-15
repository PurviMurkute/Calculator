function pressKey(keyValue){
    const screenElement = document.getElementById("calculator-screen");
    screenElement.value = screenElement.value + keyValue;
}

function calculate(){
    const screenElement = document.getElementById("calculator-screen");
    screenElement.value = eval(screenElement.value);
}

function clearScreen(){
    const screenElement = document.getElementById("calculator-screen");
    screenElement.value = '';
}