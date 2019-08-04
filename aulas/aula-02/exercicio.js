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

    console.log(`Resultado Subtração: ${result}`);
}
mul();

/*ToDo 
sub
mul
div

subir pro GIT INDIVIDUALMENTE 
*/
