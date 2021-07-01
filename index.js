/*let colors = ['yellow', 'red', 'blue', 'violet', 'green'];        // selecting color of balloon
let windowWidth = window.innerWidth;                              // Inner width of browser screen
let windowHeight = window.innerHeight;                            // Inner height of browser screen
let body = document.body;
let scores = document.querySelectorAll('.score');                 // selecting span block with class name score
let num = 0;                                                      // Inital score and it is incremented when balloon is popped
let total = 100;                                                  // total numbers needed to be popped
let currentBallon = 0;
let gameOver = false;
let totalShadow = document.querySelector('.total-shadow');
let startBtn = document.querySelector('.start-game-button');

function createBalloon() {
	let div = document.createElement('div');                      // creating div block for balloon
	let rand = Math.floor(Math.random()*colors.length);           // for random color balloon generation, calculating random index for colors array
	div.className = 'balloon balloon-'+colors[rand];              // appending the class name

	rand = Math.floor(Math.random() * (windowWidth - 100));       // for generating balloon at randow position along width of screen
	div.style.left = rand + 'px';                                 // adding left: __px to change position of balloon
	div.dataset.number = currentBallon;                           // giving every balloon a seperate number to uniquely identify it
	currentBallon++;

	body.appendChild(div);                                        // adding created balloon to body documnet
	animateBalloon(div);
}

// By changing value of top , each balloon will float from bottom to top

function animateBalloon(elem){
	let pos = 0;
	let random = Math.floor(Math.random() * 6 - 3);
	let interval = setInterval(frame, 12 - Math.floor(num / 10) + random); // the speed of balloon increses after popping 10 balloons each time

	function frame(){
		// when balloon goes beyond screen
		if(pos >= (windowHeight + 200) && (document.querySelector('[data-number="'+elem.dataset.number+'"]') !== null)) {
			clearInterval(interval);
			gameOver = true;
		} else{
			pos++; // current position of balloon increses by 1px
			elem.style.top = windowHeight - pos + 'px'; // decresing the top px by pos
		}
	}
}

function deleteBalloon(elem){
		elem.remove();
		num++;
		updateScore();   // to update score after popping
		playBallSound();
}

function playBallSound(){
	let audio = document.createElement('audio');
	audio.src = 'sounds/pop.mp3';
	audio.play();
}

function updateScore(){
	for(let i = 0; i < scores.length; i++){
		scores[i].textContent = num;  // updating score when balloon is popped
	}
}

function startGame(){
	restartGame();
	let timeout = 0;

	let loop = setInterval(function(){
		timeout = Math.floor(Math.random() * 600 - 100);
		if(!gameOver && num !== total){
			createBalloon();
		} else if(num !== total) {
			clearInterval(loop);
			totalShadow.style.display = 'flex';
			totalShadow.querySelector('.lose').style.display = 'block';
		} else {
			clearInterval(loop);
			totalShadow.style.display = 'flex';
			totalShadow.querySelector('.win').style.display = 'block';
		}
		
	}, 800 + timeout);
}

function restartGame(){
	let forRemoving = document.querySelectorAll('.balloon');
	for(let i = 0; i < forRemoving.length; i++){
		forRemoving[i].remove();
	}
	gameOver = false;
	num = 0;
	updateScore();
}

document.addEventListener('click', function(event){
	if(event.target.classList.contains('balloon')){
		deleteBalloon(event.target);
	}
})

document.querySelector('.restart').addEventListener('click', function(){
	totalShadow.style.display = 'none';
	totalShadow.querySelector('.win').style.display = 'none';
	totalShadow.querySelector('.lose').style.display = 'none';

	startGame();
});

document.querySelector('.cancel').addEventListener('click', function(){
	totalShadow.style.display = 'none';
	
});

startBtn.addEventListener('click', function() {
	startGame();
	document.querySelector('.bg-music').play();
	document.querySelector('.start-game-window').style.display = 'none';
});*/



let colors = ['yellow', 'red', 'blue', 'violet', 'green'];
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let body = document.body;
let scores = document.querySelectorAll('.score');
let num = 0;
let total = 10;
let currentBallon = 0;
let gameOver = false;
let totalShadow = document.querySelector('.total-shadow');
let startBtn = document.querySelector('.start-game-button');

function createBalloon() {
	let div = document.createElement('div');
	let rand = Math.floor(Math.random()*colors.length);
	div.className = 'balloon balloon-'+colors[rand];

	rand = Math.floor(Math.random() * (windowWidth - 100));
	div.style.left = rand + 'px';
	div.dataset.number = currentBallon;
	currentBallon++;

	body.appendChild(div);
	animateBalloon(div);
}

function animateBalloon(elem){
	let pos = 0;
	let random = Math.floor(Math.random() * 6 - 3);
	let interval = setInterval(frame, 12 - Math.floor(num / 10) + random);

	function frame(){
		if(pos >= (windowHeight + 200) && (document.querySelector('[data-number="'+elem.dataset.number+'"]') !== null)) {
			clearInterval(interval);
			gameOver = true;
		} else{
			pos++;
			elem.style.top = windowHeight - pos + 'px';
		}
	}
}

function deleteBalloon(elem){
		elem.remove();
		num++;
		updateScore();
		playBallSound();
}

function playBallSound(){
	let audio = document.createElement('audio');
	audio.src = 'sounds/pop.mp3';
	audio.play();
}

function updateScore(){
	for(let i = 0; i < scores.length; i++){
		scores[i].textContent = num;
	}
}

function startGame(){
	restartGame();
	let timeout = 0;

	let loop = setInterval(function(){
		timeout = Math.floor(Math.random() * 600 - 100);
		if(!gameOver && num !== total){
			createBalloon();
		} else if(num !== total) {
			clearInterval(loop);
			totalShadow.style.display = 'flex';
			totalShadow.querySelector('.lose').style.display = 'block';
		} else {
			clearInterval(loop);
			totalShadow.style.display = 'flex';
			totalShadow.querySelector('.win').style.display = 'block';
		}
		
	}, 800 + timeout);
}

function restartGame(){
	let forRemoving = document.querySelectorAll('.balloon');
	for(let i = 0; i < forRemoving.length; i++){
		forRemoving[i].remove();
	}
	gameOver = false;
	num = 0;
	updateScore();
}

document.addEventListener('click', function(event){
	if(event.target.classList.contains('balloon')){
		deleteBalloon(event.target);
	}
})

document.querySelector('.restart').addEventListener('click', function(){
	totalShadow.style.display = 'none';
	totalShadow.querySelector('.win').style.display = 'none';
	totalShadow.querySelector('.lose').style.display = 'none';

	startGame();
});

document.querySelector('.cancel').addEventListener('click', function(){
	totalShadow.style.display = 'none';
	restartGame();
});

startBtn.addEventListener('click', function() {
	startGame();
	document.querySelector('.new_bg').play();
	document.querySelector('.start-game-window').style.display = 'none';
});















