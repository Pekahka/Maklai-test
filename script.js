function calculate(){
    let result = 0;
    let a = parseInt(document.getElementById('first-number').value);
    let b = parseInt(document.getElementById('second-number').value);
    let operation = document.getElementById('select-operation').value;
    if (operation == '+') {
        result = a + b; 
    } else if (operation == '-') {
        result = a - b; 
    } else if (operation == '*') {
        result = a * b; 
    } else if (operation == '/') {
        result = a / b;
    }
    return alert((Math.trunc(result)));
}

