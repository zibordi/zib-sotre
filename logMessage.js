const shortid = require('shortid');

console.log('');
console.log(`Execution ID: ${shortid.generate()}`);

const args = process.argv
    .slice(2)
    .map(arg => arg.split('='))
    .reduce((args, [value, key]) => {
        args[value] = key;
        return args;
    }, {});

const DEFAULT_HELLO_WORLD_MESSAGE = 'Hello World';

printMessage = () => {
  if (args.message) {
    console.log(args.message);
  }
  else {
    console.log(DEFAULT_HELLO_WORLD_MESSAGE);
  }
};

printMessage();

arrayUnderstanding = () => {
  // array declared as const
  const array = [];

  // possible to edit items
  array.push('item 1');
  array.push('item 2');
  array.push('item 3');

  // this would be impossible 
  // array = ['item 1', 'item 2', 'item 3'];

  console.log(array);
}

// COMMENTS... 

// DECLARAÇÃO RUDIMENTAR DE VARIÁVEL
// var message = 'Hello World';

// Forma rudimentar de criar um método
// function sayHello(message) {
//   for (var index = 0; index < 3; index++){
//     // Forma rudimentar de concatenar string
//     // console.log(index + ': ' + message)

//     // TEMPLATE STRING (ECSM6 = Ecma Script 6)
//     console.log(`${index}: ${message}`);
//   }
// }

console.log('');