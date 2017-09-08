import { createInterface } from './interface';
import { resultOutput } from './output.js'

createInterface();
document.getElementsByClassName('button-container')[0].addEventListener('click', function(event){
	if (event.target.nodeName === 'BUTTON') {
		resultOutput(event.target);
	}
});