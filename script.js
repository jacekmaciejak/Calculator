/*
-----------------------------------------------------
---------------DETECTION OF KEY PRESSING  -- TO ADD -------------
-----------------------------------------------------
*/
var container = document.querySelector(".textview");

var setContainerContents = function (key) {
	var charFromCode = String.fromCharCode(key);
	container.textContent = charFromCode;
}
var onKeyPress = function (ev) {
	var keyCode = ev.key;
	setContainerContents(key);
}
document.addEventListener("keypress", onKeyPress);

/*--------------------------------------------------
----------------------------------------------------*/

var resultValue = "";
var newValue = "";
var decimalClicked = false;

function insert(num) {

	if (resultValue) {
		newValue = num;
		resultValue = "";
	} else {
		if (num === '.') {
			if (decimalClicked != true) {
				newValue += num;
				decimalClicked = true;
			}
		} else {
			newValue += num;
		}
	}
	document.form.textview.value = newValue;
}

function equal() {
	var exp = document.form.textview.value;
	if (exp) {
		document.form.textview.value = eval(exp);
	}
}

function clean() {
	newValue = "";
	resultValue = "";
	decimalClicked = false;
	document.form.textview.value = "0";
}

function back() {
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length - 1);
}
