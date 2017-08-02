function fizzBuzz() {
	var start = document.getElementById("start").value;
	var end = document.getElementById("end").value;
	var fizz = document.getElementById("fizz").value;
	var buzz = document.getElementById("buzz").value;

	if (isNaN(fizz) || isNaN(buzz) || fizz == "" || buzz == "" || end < start) {
		var error = document.getElementById("error");
		document.getElementById("output").innerHTML = "";
		error.className = "show";
		return;
	} else {
		var error = document.getElementById("error");
		error.className = "";
		document.getElementById("output").innerHTML = "";
	}

	for (i = start; i <= end; i++) {
		var newMarkup = "";

		if ((i % fizz == 0) && (i % buzz == 0)) {
			newMarkup = "<p>FizzBuzz</p>";
		} else if (i % fizz == 0) {
			newMarkup = "<p>Fizz</p>";
		} else if (i % buzz == 0) {
			newMarkup = "<p>Buzz</p>";
		} else {
			newMarkup = "<p>" + i + "</p>";
		}

		document.getElementById("output").innerHTML += newMarkup;
	}
}
