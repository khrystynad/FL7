/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__output_js__ = __webpack_require__(2);



Object(__WEBPACK_IMPORTED_MODULE_0__interface__["a" /* createInterface */])();
document.getElementsByClassName('button-container')[0].addEventListener('click', function(event){
	if (event.target.nodeName === 'BUTTON') {
		Object(__WEBPACK_IMPORTED_MODULE_1__output_js__["a" /* resultOutput */])(event.target);
	}
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createInterface;
function createInterface() {
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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resultOutput;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operations__ = __webpack_require__(3);


function resultOutput(target) {
	let result;
	let firstNumber = parseFloat(document.getElementsByClassName('first-number')[0].value);
	let secondNumber = parseFloat(document.getElementsByClassName('second-number')[0].value);
	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		alert('Input two numbers to perform operations.');
		return;
	}
	switch (target.innerHTML) {
        case '+':
            result = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].add(firstNumber, secondNumber);
            break;
        case '-':
            result = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].subtract(firstNumber, secondNumber);
            break;
        case '*':
            result = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].multiply(firstNumber, secondNumber);
            break;
        case '/':
        	if (secondNumber === 0) {
        		alert(`You can't divide by zero`);
        		return;
        	}
            result = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].divide(firstNumber, secondNumber);
            break;
        default:
            break;
    }
    document.getElementsByClassName('result')[0].value = `= ${result}`;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add,
	subtract: subtract,
	multiply: multiply,
	divide: divide
});

/***/ })
/******/ ]);