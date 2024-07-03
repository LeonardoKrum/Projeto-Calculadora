const prompt = require("prompt-sync")();

function check(neg) {
    if (isNaN(neg)) {
        console.log("Insira um número inteiro, para que possa ser válidado:");
        process.exit();
    }
    return true;
}

let calculo1 = Number(prompt("Insira o primeiro valor que deseja calcular: "));
console.log("\nSelecione a operação que deseja realizar: \nExemplos(' +: -: /: *: %:').");
let operação = prompt();
let calculo2 = Number(prompt("Insira o segundo valor que deseja calcular: "));

check(calculo1);
check(calculo2);

if ((check = true)) {
    switch (operação) {
        case "+":
            resultado = calculo1 + calculo2;
            console.log("\nLogo.. seu resultado vai ser: " + resultado);
            break;
        case "-":
            resultado = calculo1 - calculo2;
            console.log("\nLogoo.. seu resultado vai ser: " + resultado);
            break;
        case "/":
            if (calculo2 == 0) {
                console.log("\nNão foi possivel dividir o seu calculo igual a 0, tente novamente!");
                break;
            } else {
                resultado = calculo1 / calculo2;
                console.log("\nLogoo... seu resultado vai ser: " + resultado);
                break;
            }
        case "*":
            resultado = calculo1 * calculo2;
            console.log("\nLogoo.. seu resultado vai ser: " + resultado);
            break;
        case "%":
            resultado = (calculo1 * calculo2) / 100;
            console.log("\nLogoo.. seu resultado vai ser: " + resultado);
            break;
        default:
            console.log("\nVocẽ não insiriu uma operação válida.");
            break;
    }
}
