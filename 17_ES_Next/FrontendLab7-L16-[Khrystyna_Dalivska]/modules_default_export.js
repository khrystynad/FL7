var arg1 = process.argv[2];
var arg2 = process.argv[3];

import program from './modules_default_export_math';

console.log(program.PI);
console.log(program.sqrt(+arg1));
console.log(program.square(+arg2));