function guessingGame(){
	var gameState = confirm("Do you want to start a game?");	
	if (gameState) {
		game();
	} else {
		console.log("Today you haven't won a million, but you could.");
	}
};

function game(){
	var attemptCounter = 0;
	var prize = 0, totalPrize = 0, prizeCoef = 1;
	var randomNumber = 0, userNumber = 0;
	var contin = true;
	var maxPoint = 5;

	while(contin) {
		attemptCounter = 3;
		randomNumber = random(0, maxPoint);
		while (attemptCounter > 0) {
			userNumber = userInput(0, maxPoint, attemptCounter);
			if (guessed(randomNumber, userNumber)) {
				prize = prizeWon(prizeCoef, attemptCounter);
				attemptCounter = 0;
			}
			attemptCounter--;
		}
		totalPrize += prize;
		console.log(`You won ${prize}$.`);
		if (prize !== 0){
			maxPoint = doubleMaxPoint(maxPoint);
			prizeCoef = triplePrize(prizeCoef);
			contin = prizeNotNull(totalPrize);
		} else{
			totalPrize = 0;
			maxPoint = 5;
			prizeCoef = 1;
			contin = prizeNull();
		}
		prize = 0;
	}
	console.log(`Thank's for playing, you prize is ${totalPrize}$ .`);
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function userInput(min, max, attemps) {
	var value;
	while (true){
		value = parseInt(prompt(`Input a number from 0 to ${max}. You have ${attemps} tries remain.`,""));
		if ( (value <= max) && (value >= min) ) {
			return value;
		} else {
			alert("Be careful! Input a proper value.");
		}
	}
}

function guessed(randomNumb, userNumb) {
	return randomNumb === userNumb;
}

function prizeWon(prizeCoef, attemps) {
	var winFirst = 10, winSecond = 5, winThird = 2;
	switch(attemps){
		case 3:{
			return winFirst * prizeCoef;
		}
		case 2:{
			return winSecond * prizeCoef;
		}
		case 1:{
			return winThird * prizeCoef;
		}
	}
}

function doubleMaxPoint(value) {
	return value *= 2;
}

function triplePrize(value) {
	return value *= 3;
}

function prizeNotNull(total) {
	console.log(`Your total prize is ${total}$.`)
	return confirm("Do you want to continue the game?");
}

function prizeNull() {
	return confirm("Unfortunately, you lost. Do you want to play again?");
}

guessingGame();
