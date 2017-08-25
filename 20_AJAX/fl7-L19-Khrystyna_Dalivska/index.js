// Task 1
function getJSON(url) {
	return new Promise(function(resolve, reject) {
    	var xhr = new XMLHttpRequest();
    	xhr.open('GET', url);
    	xhr.onload = function() {
    		if (xhr.status === 200) {
    			var info = JSON.parse(xhr.responseText);
        		resolve(info);
    		} else {
    			reject('Error ' + xhr.status + ': ' + xhr.statusText);
    		}    	
    	}
    	xhr.onerror = function(err) {
    		reject('Error ' + xhr.status + ': ' + xhr.statusText);
    	}
    	xhr.send();
 	});
}

// Invocation example:
// var getAstros = getJSON('http://api.open-notify.org/astros.json');
// console.log(typeof getAstros);
// getAstros
//   .then(function(data) {
// 	console.log(data.message);
//   }, function(error) {
// 	console.log(error);
// });


//Task 2
var count = 0;
var page = 1;
var next = true;
var previous = true;
var currentPageData;
var index = 0;

function jsonp(url) {
    return new Promise( function(resolve, reject) {
    	var id = index++;
        var callback = 'callback' + id;
        window[callback] = function(data) {
            delete window[callback];
            document.getElementById(id).remove();
            resolve(data);
        }
        var newScript = document.createElement('script');     
        newScript.setAttribute('src', url + '&callback=' + callback);
        newScript.setAttribute('id', id);
        newScript.onerror = reject;
        document.body.appendChild(newScript);
    });
}

function dateFormating(date) {
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();
	return `${monthNames[monthIndex]} ${day}, ${year}`;
}

function showWeather(data) {
	var temperature = Math.round((data.results[count].min_temp_fahrenheit + data.results[count].max_temp_fahrenheit) / 2);
	var windPower = data.results[count].wind_speed ? data.results[count].wind_speed : "--";
	var windDirection = data.results[count].wind_direction ? data.results[count].wind_direction : "--";
	var date = dateFormating(new Date(data.results[count].terrestrial_date));
	document.getElementsByClassName('temperature')[0].innerHTML = `${temperature}&#176; F`;
	document.getElementsByClassName('wind-power-span')[0].innerHTML = `${windPower}`;
	document.getElementsByClassName('wind-direction-span')[0].innerHTML = `${windDirection}`;
	document.getElementsByClassName('date-span')[0].innerHTML = `${date}`;
	if (!data.previous && count === 0) {
		next = false;
		document.getElementsByClassName('next')[0].classList.add("not-active");
		document.getElementsByClassName('next')[0].classList.remove("active");
	} else {
		if (document.getElementsByClassName('next')[0].classList.contains("not-active")) {
			document.getElementsByClassName('next')[0].classList.remove("not-active");
			document.getElementsByClassName('next')[0].classList.add("active");
			next = true;
		}
	}
	if (!data.next && !data.results[count + 1]) {
		previous = false;
		document.getElementsByClassName('previous')[0].classList.add("not-active");
		document.getElementsByClassName('previous')[0].classList.remove("active");
	} else {
		if (document.getElementsByClassName('previous')[0].classList.contains("not-active")) {
			document.getElementsByClassName('previous')[0].classList.add("active");
			document.getElementsByClassName('previous')[0].classList.remove("not-active");
			previous = true;
		}
	}
}

document.getElementsByClassName('next')[0].addEventListener("click", function() {
	if (!next) {
		alert("It's the latest data!");
	} else {
		count--;
		if (count >= 0) {
			showWeather(currentPageData);
		} else {
			page--;
			count = 9;
			load();
		}
	}
});

document.getElementsByClassName('previous')[0].addEventListener("click", function() {
	if (!previous) {
		alert("Sorry, there's no previous data!");
	} else {
	    count++;
	    if (count <= 9) {
	    	showWeather(currentPageData);
	    } else {
	    	page++;
	    	count = 0;
	    	load();
	    }
	}
});

function load() {
	document.getElementsByClassName('information')[0].style.display = 'none';
	document.getElementsByClassName('loader')[0].style.display = 'block';
	jsonp(`http://marsweather.ingenology.com/v1/archve/?page=${page}&format=jsonp`).then(function(data) {
		document.getElementsByClassName('error')[0].style.display = 'none';
		currentPageData = Object.assign({}, data);
		showWeather(currentPageData);
		document.getElementsByClassName('loader')[0].style.display = 'none';
		document.getElementsByClassName('information')[0].style.display = 'block';
	}).catch(function(err) {
		document.getElementsByClassName('error')[0].style.display = 'block';
		document.getElementsByClassName('loader')[0].style.display = 'none';
	});     
};

load();