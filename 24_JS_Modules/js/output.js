import operations from './operations';

export function resultOutput(target) {
	let result;
	let firstNumber = parseFloat(document.getElementsByClassName('first-number')[0].value);
	let secondNumber = parseFloat(document.getElementsByClassName('second-number')[0].value);
	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		alert('Input two numbers to perform operations.');
		return;
	}
	switch (target.innerHTML) {
        case '+':
            result = operations.add(firstNumber, secondNumber);
            break;
        case '-':
            result = operations.subtract(firstNumber, secondNumber);
            break;
        case '*':
            result = operations.multiply(firstNumber, secondNumber);
            break;
        case '/':
        	if (secondNumber === 0) {
        		alert(`You can't divide by zero`);
        		return;
        	}
            result = operations.divide(firstNumber, secondNumber);
            break;
        default:
            break;
    }
    document.getElementsByClassName('result')[0].value = `= ${result}`;
}