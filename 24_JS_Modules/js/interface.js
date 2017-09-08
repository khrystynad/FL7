export function createInterface() {
	let signs = ['+', '-', '*', '/'];
	let btnClasses = ['add', 'substract', 'multiple', 'divide'];

	let container = document.getElementsByClassName('container')[0];
	let inputFirst = document.createElement('input');
	inputFirst.setAttribute('type', 'number');
	inputFirst.setAttribute('placeholder', 'first number');
	inputFirst.classList.add('first-number');
	let inputSecond = document.createElement('input');
	inputSecond.setAttribute('type', 'number');
	inputSecond.setAttribute('placeholder', 'second number');
	inputSecond.classList.add('second-number');
	let buttonContainer = document.createElement('div');
	buttonContainer.classList.add('button-container');
	for (let i = 0; i < btnClasses.length; i++) {
		let button = document.createElement('button');
		button.classList.add(btnClasses[i]);
		button.innerHTML = signs[i];
		button.classList.add('btn');
		buttonContainer.appendChild(button);
	}
	let result = document.createElement('input');
	result.classList.add('result');
	result.setAttribute('type', 'text');
	result.readOnly = true;
	document.getElementsByClassName('container')[0].appendChild(result);
	
	container.appendChild(inputFirst);
	container.appendChild(inputSecond);
	container.appendChild(buttonContainer);
	container.appendChild(result);
}