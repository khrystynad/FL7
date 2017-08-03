function Casino(slotMachinesCount, initialAmountCasino){

	if (isNaN(slotMachinesCount) || (slotMachinesCount < 0) || isNaN(initialAmountCasino) || (initialAmountCasino < 0)) {
		console.log("Please, input proper values to create Casino.");
		return;
	}
	this.slotMachineArray = [];
	this.casinoAmount = initialAmountCasino;
	this.machinesCount = slotMachinesCount;

	var amountForMachine = Math.floor(initialAmountCasino / slotMachinesCount);
	var amountForFirst = initialAmountCasino % slotMachinesCount;
	var luckyMachine = randomNumber(slotMachinesCount, 0)

	for (var i = 0; i < slotMachinesCount; i++) {
		this.slotMachineArray.push(new SlotMachine(amountForMachine));
		this.slotMachineArray[i].id = i + 1;
	}

	if (amountForFirst) {
		this.slotMachineArray[0].amount += amountForFirst;
	}

	this.slotMachineArray[luckyMachine].lucky = true;

	this.getTotalAmount = function() {
		return this.casinoAmount;
	}

	this.getTotalMachisesCount = function() {
		return this.machinesCount;
	}

	this.addMachine = function() {
		var idForNewMachine = 1;
		var idArray = [];
		var maxAmount = this.slotMachineArray.reduce(function(accumulator, el, index){
			if (el.amount > accumulator.amount) {
				accumulator.amount = el.amount;
				accumulator.index = index;
			}
			return accumulator;
		}, {amount: this.slotMachineArray[0].amount, index: 0});
		this.slotMachineArray.push(new SlotMachine(maxAmount.amount / 2));
		this.slotMachineArray.forEach(function(el) {
			idArray.push(el.id);
		});
		while (idArray.includes(idForNewMachine)) {
			idForNewMachine++;
		}
		this.slotMachineArray[this.slotMachineArray.length - 1].id = idForNewMachine;
		this.slotMachineArray[maxAmount.index].amount /= 2;
		this.machinesCount++;
		console.log("New slot machine added.");
	}

	this.removeMachineById = function(uniqueId) {
		var amountForEveryMachine = 0;
		var indexToRemove = 0;
		var machineToRemove = this.slotMachineArray.filter(function(el, i) {
			if (el.id == uniqueId) {
				indexToRemove = i;
				return el;
			} 
		})[0];
		if (!machineToRemove) {
			console.log("There is no slot machine with such number.");
		} else {
			this.slotMachineArray.splice(indexToRemove, 1);
			amountForEveryMachine = Math.round(machineToRemove.amount / this.slotMachineArray.length);
			this.slotMachineArray.forEach(function(el) {
				el.amount += amountForEveryMachine; 
			});
			this.machinesCount--;
			// if removed lucky machine, choosing new lucky
			if (machineToRemove.lucky) {
				var luckyMachine = randomNumber(this.machinesCount, 0);
				this.slotMachineArray[luckyMachine].lucky = true;
			}
		}
	}

	this.takeMoneyFromCasino = function(amountToTake) {
		var takenAmount = 0;
		var richestMachine = this.slotMachineArray[0];
		var richestIndex = 0;		
		if (isNaN(amountToTake) || amountToTake <= 0) {
			console.log("Please, input a proper value.");
			return;
		}
		if (amountToTake > this.getTotalAmount()) {
			console.log("Sorry, not enough money in Casino.")
			return;
		}
		this.casinoAmount -= amountToTake;
		while (amountToTake) {
			this.slotMachineArray.forEach(function(el, i){
				if (el.amount > richestMachine.amount) {
					richestMachine = el;
					richestIndex = i;
				}
			});
			if ((richestMachine.amount - amountToTake) >= 0) {
				takenAmount = amountToTake;
				this.slotMachineArray[richestIndex].amount -= takenAmount;
			} else {
				takenAmount = richestMachine.amount;
				this.slotMachineArray[richestIndex].amount = 0;
			}
			amountToTake -= takenAmount;
		}
		return this;
	}

	// Print slot machine array
	this.print = function() {
		console.log("Slot machines in Casino: ");
		this.slotMachineArray.forEach(function(el) {
			el.printSlotMachine();
		})
	}

	function randomNumber(max, min) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}

function SlotMachine(initialAmountSlot){
	if (isNaN(initialAmountSlot) || (initialAmountSlot < 0)) {
		console.log("Please, input a proper value.");
		return;
	}

	this.amount = initialAmountSlot;
	this.lucky = false;
	this.id = 1;

	this.getTotalAmount = function() {
		return this.amount;
	}

	this.takeMoney = function(amountToTake) {
		if (amountToTake > this.amount) {
			console.log("There are not enough money to take");
		} else if (isNaN(amountToTake) || amountToTake < 0) {
			console.log("Plese, input a proper value.");
		} else {
			this.amount -= amountToTake;
		}
	}

	this.putMoney = function(amountToPut) {
		if (isNaN(amountToPut) || amountToPut < 0) {
			console.log("Plese, input a proper value.");
		} else {
			this.amount += amountToPut;
		}
	}

	this.play = function(amountToPlay) {
		if (amountToPlay <= 0 || isNaN(amountToPlay)) {
			console.log("Please, input a proper amount.");
			return;
		} else if (this.amount + amountToPlay < 5 * amountToPlay) {
			console.log("Please, input a smaller amount of money.");
			return;
		} else {
			console.log("The game: ");
			var randomNumer = 0;
			var moneyWon = 0;
			this.amount += amountToPlay;
			randomNumer = Math.floor((Math.random() * 900) + 100);
			while (this.lucky && randomNumer === 777) {
				randomNumer = Math.floor((Math.random() * 900) + 100);
			}
			console.log(`The number is ${randomNumer}`);
			if (randomNumer === 777) {
				moneyWon = this.amount;
				console.log("Congratulations, you won " + moneyWon);
				this.takeMoney(moneyWon);
				return moneyWon;
			}
			if (comparison(randomNumer) === 2) {
				moneyWon = amountToPlay * 2;
			} else if (comparison(randomNumer) === 3) {
				moneyWon = amountToPlay * 5;
			} else {
				console.log("Unfortunately, you lost.");
				return 0;
			}
			console.log("Congratulations, you won " + moneyWon);
			this.takeMoney(moneyWon);
			return moneyWon;
		}
	}

	function comparison(randomNumer) {
		var numbers = randomNumer.toString();
		var countOfSame = 0;
		if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {
			countOfSame = 3;
		} else if (numbers[0] === numbers[1] || numbers[0] === numbers[2] || numbers[1] === numbers[2]) {
			countOfSame = 2;
		}
		return countOfSame;
	}

	// For demonstration
	this.printSlotMachine = function() {
		console.log(`SlotMachine: id = ${this.id}, amount = ${this.amount}, lucky = ${this.lucky}.`);
	}
}

function showResults() {

	// Casino class testing
	var casino = new Casino(5, 1002); // creating Casino, first machine has the biggest amount, and one of the machines is lucky
	casino.print();
	console.log(`Count of slot machines in Casiono: ${casino.getTotalMachisesCount()}.`);
	console.log(`Total amount of money in Casino: ${casino.getTotalAmount()}.`);
	casino.print();
	casino.removeMachineById(4); // removed machine with id = 4 and amount = 200 (added 40 to amount of every machine)
	casino.print();
	casino.removeMachineById(20); // there is no slot machine with such number
	casino.takeMoneyFromCasino(300); // - 240 from machine with id = 2, - 60 from machine with id = 3.
	casino.print();
	casino.takeMoneyFromCasino(-200); // Please, input a proper value.
	console.log(`Count of slot machines in Casino = ${casino.getTotalMachisesCount()} .` ); // 5 slot machines in Casino.
	var casino2 = new Casino(-2, 100); // Not a proper value of slot machines count.


	// SlotMachine testing
	console.log(`Amount of money in 1 slot machine = ${casino.slotMachineArray[0].getTotalAmount()} .`);
	casino.slotMachineArray[3].play(20); // the game
	casino.slotMachineArray[0].play(100); // Please, input a smaller amount of money.
	casino.slotMachineArray[0].putMoney(300); // slotMachine[0] amount + 300
	casino.slotMachineArray[0].printSlotMachine();
	casino.slotMachineArray[0].takeMoney(-20); // not a proper value
	casino.slotMachineArray[0].takeMoney(150);
	casino.slotMachineArray[0].printSlotMachine(); // slotMachine[0] amount - 150
	casino.slotMachineArray[3].play(-13); // Please, input a proper amount.
}

module.exports = {
  Casino: Casino,
  SlotMachine: SlotMachine,
  showResults: showResults
}