const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_TurnRight = false;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	// cheat / hack to test car in any position
	/*carX = mouseX;
	carY = mouseY;
	carSpeedX = 4;
	carSpeedY = -4;*/
}

function keyPressed(evt) {
	if(evt.keyCode == KEY_A) {
		keyHeld_TurnLeft = true;
	}
	if(evt.keyCode == KEY_D) {
		keyHeld_TurnRight = true;
	}
	if(evt.keyCode == KEY_W) {
		keyHeld_Gas = true;
	}
	if(evt.keyCode == KEY_S) {
		keyHeld_Reverse = true;
	}
}

function keyReleased(evt) {
	if(evt.keyCode == KEY_A) {
		keyHeld_TurnLeft = false;
	}
	if(evt.keyCode == KEY_D) {
		keyHeld_TurnRight = false;
	}
	if(evt.keyCode == KEY_W) {
		keyHeld_Gas = false;
	}
	if(evt.keyCode == KEY_S) {
		keyHeld_Reverse = false;
	}
}