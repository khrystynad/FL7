var timer;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
var steps = 0;
var initialPositions = [];

function newGame() {
	$('.field').css('display','block');
	$('.loaded').css('display','none');
	var max = array.length;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			var index = getRandomInt(0, max - 1);
			$('.field').append(`<div class='grey-square' style='top:${i * 100}px; left:${j * 100}px'></div>`);
			if (array[index] === "") {
				$('.field').append(`<div class='empty'></div>`);
				$('.empty').animate({top: `${i * 100}px`, left:`${j * 100}px`}, 700);
			} else {
				$('.field').append(`<div class='square square${array[index]}'>${array[index]}</div>`);
				$(`.square${array[index]}`).animate({top: `${i * 100}px`, left:`${j * 100}px`}, 700);
			}
			var position = {top: i * 100, left: j * 100}
			initialPositions.push(position);
			array.push(array[index]);
			array.splice(index,1);
			--max;
		}
	}
}

function move(event) {
	if ($(event.target).hasClass('square')) {
		var emptyPosition = {}, targetPosition = {};
		emptyPosition.top = parseInt($('.empty').css('top'));
		emptyPosition.left = parseInt($('.empty').css('left'));
		targetPosition.top = parseInt($(event.target).css('top'));
		targetPosition.left = parseInt($(event.target).css('left'));
		if ((emptyPosition.left === targetPosition.left && Math.abs(emptyPosition.top - targetPosition.top) === 100) || (emptyPosition.top === targetPosition.top && Math.abs(emptyPosition.left - targetPosition.left) === 100)) {
			$('.empty').css({top: `${targetPosition.top}px`, left:`${targetPosition.left}px`});
			$(event.target).animate({top: `${emptyPosition.top}px`, left:`${emptyPosition.left}px`}, 300);	
			steps++;
			stepsUpdate();			
		}
		var targetIndex = array.indexOf(parseInt($(event.target).html()));
		var emptyIndex = array.indexOf("");
		array.splice(emptyIndex, 1, array[targetIndex]);
		array.splice(targetIndex, 1, "");
	}
	if (winCheck()) {
		alert("Congratulations, you won!");
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stepsUpdate() {
	$('.current-steps').html(steps);
}	

function fieldUpdate() {
	if ($('.field').children().length !== 0) {
		$('.field').empty();
	}
}

function setTimer() {
	if (timer) {
		clearInterval(timer);
	}
	var minutes = 0;
	var seconds = 0;
	timer = setInterval(function() {
		seconds++;
		minutes = (seconds > 59) ? ++minutes : minutes;
		seconds = (seconds > 59) ? 0 : seconds;
		seconds = (seconds < 10) ? '0' + seconds : seconds;
		minutes < 10 ? $('.minutes').html('0' + minutes) : $('.minutes').html(minutes);
		$('.seconds').html(seconds);
	}, 1000);
}

function winShuffle() {
	var length = initialPositions.length;
	for (var i = 0; i < initialPositions.length - 1; i++) {
		$('.square' + (i + 1)).animate({top: `${initialPositions[i].top}px`, left:`${initialPositions[i].left}px`}, 700);
	}
	$('.empty').animate({top: `${initialPositions[length - 1].top}px`, left:`${initialPositions[length - 1].left}px`}, 700);
}

function winCheck() {
	for (var i = 0; i < array.length - 1; i++) {
		if (array[i] > array[i + 1]) {
			return false;
		}
	}
	if (array[array.length - 1] !== '') {
		return false;
	}
}

$(document).ready(function() {
	$('.start').click(function() {
		$('.win').prop('disabled', false);
		$('.seconds').html('00');
		$('.minutes').html('00');
		steps = 0;
		stepsUpdate();
		fieldUpdate();
		setTimer();
		newGame();
	});
	$('.win').bind('click', winShuffle);
	$('.field').bind('click', move);
	$('.win').prop('disabled', true);
	$('.field').css('display','none');
});