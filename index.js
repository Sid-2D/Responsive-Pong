var PONG = {
	pressedKeys: []
}

var KEYS = {
	'UP': 38,
	'S': 83,
	'W': 87,
	'DOWN': 40
}


function refactor() {
	PONG.timer = setInterval(gameLoop, 30)
	document.addEventListener('keydown', event => {
		PONG.pressedKeys[event.keyCode] = true
	})
	document.addEventListener('keyup', event => {
		PONG.pressedKeys[event.keyCode] = false
	})
}

function gameLoop() {
	movePaddles()
}

function movePaddles() {
	var paddleB = document.getElementById('paddleB')
	var paddleA = document.getElementById('paddleA')
	if (PONG.pressedKeys[KEYS.UP]) {
		var top = getComputedStyle(paddleB)['top']
		paddleB.style.top = parseInt(top) - 5 + 'px'
	}
	if (PONG.pressedKeys[KEYS.DOWN]) {
		var top = getComputedStyle(paddleB)['top']
		paddleB.style.top = parseInt(top) + 5 + 'px'
	}
	if (PONG.pressedKeys[KEYS.S]) {
		var top = getComputedStyle(paddleA)['top']
		paddleA.style.top = parseInt(top) + 5 + 'px'
	}
	if (PONG.pressedKeys[KEYS.W]) {
		var top = getComputedStyle(paddleA)['top']
		paddleA.style.top = parseInt(top) - 5 + 'px'
	}
}

function oldModel() {
	var paddleB = document.getElementById('paddleB')
	var paddleA = document.getElementById('paddleA')
	document.addEventListener('keydown', event => {
		console.log(event)
		switch (event.key) {
			case 'ArrowUp':
				var top = getComputedStyle(paddleB)['top']
				paddleB.style.top = parseInt(top) - 5 + 'px'
				break
			case 'ArrowDown': 	
				var top = getComputedStyle(paddleB)['top']
				paddleB.style.top = parseInt(top) + 5 + 'px'
				break
			case 'w':
				var top = getComputedStyle(paddleA)['top']
				paddleA.style.top = parseInt(top) - 5 + 'px'
				break
			case 's': 	
				var top = getComputedStyle(paddleA)['top']
				paddleA.style.top = parseInt(top) + 5 + 'px'
				break
		}
	})
}

window.onload = refactor