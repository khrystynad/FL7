var a = parseFloat(prompt("a =", ""));
var b = parseFloat(prompt("b =", ""));
var c = parseFloat(prompt("c =", ""));

var D = Math.pow(b,2) - 4 * a * c;
var res1 = ((-b) + Math.sqrt(D)) / (2 * a);
var res2 = ((-b) - Math.sqrt(D)) / (2 * a);

console.log(`Рівняння ${a}x\xb2 + ${b}x + ${c} = 0 має розв’язки: x1 = ${res1}, x2 = ${res2}`);