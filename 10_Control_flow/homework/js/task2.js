var gameState = confirm("Do you want to start a game?");
var contin = true;
var randomNumber = 0, userNumber = 0;
var attemptCounter = 0;
var prize = 0, totalPrize = 0, prizeCoef = 1;
var maxPoint = 5;

if (gameState){
	while(contin){
		attemptCounter = 3;
		randomNumber = Math.floor(Math.random() * maxPoint) + 1;
		while (attemptCounter > 0){
			userNumber = parseInt(prompt(`Input a number from 0 to ${maxPoint}. You have ${attemptCounter} tries remain.`,""));
			if (isNaN(userNumber) || (userNumber === "")){
				alert("Be careful! You've input not a proper value.");
				attemptCounter--;
				continue;
			}
			if ( randomNumber === userNumber ){
				switch(attemptCounter){
					case 3:{
						prize = 10 * prizeCoef;
						attemptCounter = 0;
						break;
					}
					case 2:{
						prize = 5 * prizeCoef;
						attemptCounter = 0;
						break;
					}
					case 1:{
						prize = 2 * prizeCoef;
						attemptCounter = 0;
						break;
					}
				}
			}
			attemptCounter--;
		}
		totalPrize += prize;
		console.log(`You won ${prize}$.`);
		if (prize !== 0){
			maxPoint *= 2;
			prizeCoef *= 3;
			console.log(`Your total prize is ${totalPrize}$.`)
			contin = confirm("Do you want to continue the game?");
		} else{
			totalPrize = 0;
			contin = confirm("Unfortunately, you lost. Do you want to play again?");
			maxPoint = 5;
			prizeCoef = 1;
		}
		prize = 0;
	}
	console.log(`Thank's for playing, you prize is ${totalPrize}$ .`);
} else{
	console.log("Today you haven't won a million, but you could.");
}