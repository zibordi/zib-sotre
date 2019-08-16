const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor1 ', val1 => {
    rl.question("Digite o valor2 ", val2 => {

        console.log(`O valor1 é ${val1} e o valor2 é ${val2}`);

        rl.question("Digite a operação matematica: 1 para sum, 2 para sub, 3 para mul, 4 para div ou 5 para todas ", opcao => {

            if (opcao == 1)
                console.log(`O resultado da soma é: [${val1 + val2}]`);

            if (opcao == 2)
                console.log(`O resultado da subtração é: [${val1 - val2}]`);

            if (opcao == 3)
                console.log(`O resultado da multiplicação é: [${val1 * val2}]`);

            if (opcao == 4)
                console.log(`O resultado da divisão é: [${val1 / val2}]`);

            if (opcao == 5) {
                console.log(`O resultado da soma é: [${val1 + val2}]`);
                console.log(`O resultado da subtração é: [${val1 - val2}]`);
                console.log(`O resultado da multiplicação é: [${val1 * val2}]`);
                console.log(`O resultado da divisão é: [${val1 / val2}]`);
            }

            rl.close();
        });
    });
});
