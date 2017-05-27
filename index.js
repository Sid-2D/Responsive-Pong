function $(id) {
	return document.getElementById(id)
}

window.onload = () => {
	var paddleB = $('paddleB')
	var paddleA = $('paddleA')
	document.addEventListener('keydown', event => {
		console.log(event)
		switch (event.key) {
			case 'ArrowUp':
				var top = getComputedStyle(paddleB)['top']
				console.log(top)
				paddleB.style.top = parseInt(top) - 5 + 'px'
				break
			case 'ArrowDown': 	
				var top = getComputedStyle(paddleB)['top']
				paddleB.style.top = parseInt(top) + 5 + 'px'
				break
			case 'w':
				var top = getComputedStyle(paddleA)['top']
				console.log(top)
				paddleA.style.top = parseInt(top) - 5 + 'px'
				break
			case 's': 	
				var top = getComputedStyle(paddleA)['top']
				paddleA.style.top = parseInt(top) + 5 + 'px'
				break
		}
	})
}