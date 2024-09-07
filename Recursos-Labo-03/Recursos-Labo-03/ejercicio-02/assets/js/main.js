const plus = (a, b) => {
    return a + b;
};
const subtract = (a, b) =>{
    return a - b;
} ;
const multiply = (a, b) =>{
    return a * b;
} ;
const split = (a, b) => {
    return a / b;
};
const requestNumber = (message) => {
    return parseFloat(prompt(message));
};

const selectOperation = () => {
    let operation = prompt("Seleccione la operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");
    switch (operation) {
        case "1":
            return plus;
        case "2":
            return subtract;
        case "3":
            return multiply;
        case "4":
            return split;
        default:
            alert("Operación inválida.");
            return selectOperation();
    }
};

const main = () => {
    let num1 = requestNumber("Ingrese el primer número:");
    let num2 = requestNumber("Ingrese el segundo número:");
    let operation = selectOperation();
    let result = operation(num1, num2);
    alert(`El resultado es: ${result}`);
}

main();