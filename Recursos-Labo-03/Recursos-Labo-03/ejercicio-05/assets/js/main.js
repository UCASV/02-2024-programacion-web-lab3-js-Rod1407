const searchNumber = (number) => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Numero aleatorio:", randomNumber);
    if (number === randomNumber) {
      console.log("¡Acertaste!");
      return true;
    } else {
      console.log("¡Intenta de nuevo!");
      return false;
    }
  };
  
  const requestNumber = () => {
    let number = parseInt(prompt("Ingresa un número entre 1 y 100:"));
    if (isNaN(number) || number < 1 || number > 100) {
      alert("Ingresa un número válido entre 1 y 100.");
      requestNumber();
    } else {
      return number;
    }
  };
  
  const main = () => {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }
    let number = requestNumber();
    let found = false;
    for (let i = 0; i < numbers.length; i++) {
        if (number === numbers[i]) {
            found = true;
            console.log("¡Acertaste!");
            break;
        }
    }
    if (!found) {
      console.log("¡Intenta de nuevo!");
      main();
    }
  };
  
  main();