var PONG = {
	pressedKeys: [],
	ball: {
		speed: 5,
		x: 150,
		y: 150,
		directionX: 1,
		directionY: 1
	}
}

var KEYS = {
	UP: 38,
	S: 83,
	W: 87,
	DOWN: 40
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
	moveBall()
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

function moveBall() {
	var playRoomHeight = parseInt(document.getElementById('playroom').offsetHeight)
	var playRoomWidth = parseInt(document.getElementById('playroom').offsetWidth)
	var ball = PONG.ball
	if (ball.y + ball.speed * ball.directionY > playRoomHeight) {
		ball.directionY = -1
	}
	if (ball.y + ball.speed * ball.directionY < 0) {
		ball.directionY = 1
	}
	if (ball.x + ball.speed * ball.directionX > playRoomWidth) {
		ball.directionX = -1
	}
	if (ball.x + ball.speed * ball.directionX < 0) {
		ball.directionX = 1
	}

	// Collision detection
	var paddleA = document.getElementById('paddleA')
	var paddleB = document.getElementById('paddleB')

	// Left Paddle
	var paddleAX = parseInt(getComputedStyle(paddleA)['left']) + parseInt(getComputedStyle(paddleA)['width'])
	var paddleAYTop = parseInt(getComputedStyle(paddleA)['top'])
	var paddleAYBottom = paddleAYTop + parseInt(getComputedStyle(paddleA)['height'])
	if (ball.x + ball.speed * ball.directionX < paddleAX) {
		if (ball.y + ball.speed * ball.directionY <= paddleAYBottom &&
		    ball.y + ball.speed * ball.directionY >= paddleAYTop) {
			ball.directionX = 1
			console.log('Collision with A')
		}
	}

	// Right Paddle
	var paddleBX = parseInt(getComputedStyle(paddleB)['left']) - 15
	var paddleBYTop = parseInt(getComputedStyle(paddleB)['top'])
	var paddleBYBottom = paddleBYTop + parseInt(getComputedStyle(paddleB)['height'])
	if (ball.x + ball.speed * ball.directionX >= paddleBX) {
		if (ball.y + ball.speed * ball.directionY <= paddleBYBottom &&
		    ball.y + ball.speed * ball.directionY >= paddleBYTop) {
			ball.directionX = -1
			console.log('Collision with B')
		}
	}

	ball.x += ball.speed * ball.directionX
	ball.y += ball.speed * ball.directionY

	document.getElementById('ball').style.left = ball.x + 'px'
	document.getElementById('ball').style.top = ball.y + 'px'
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