const args = process.argv
    .slice(2)
    .map(arg => arg.split('='))
    .reduce((args, [value, key]) => {
        args[value] = key;
        return args;
    }, {});

sum = () => {
    const result = Number(args.value1) + Number(args.value2);

    console.log(`Resultado Soma: ${result}`);
}

sum();

sub = () => {
    const result = Number(args.value1) - Number(args.value2);

    console.log(`Resultado Subtração: ${result}`);
}
sub();

mul = () => {
    const result = Number(args.value1) * Number(args.value2);

    console.log(`Resultado Multiplicação: ${result}`);
}
mul();

div = () => {
    const result = Number(args.value1) / Number(args.value2);

    console.log(`Resultado Divisão: ${result}`);
}
div();
/*ToDo 
sub
mul
div

subir pro GIT INDIVIDUALMENTE 
*/
