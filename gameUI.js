// game.js
$(document).keydown(function (e){
	switch(event.which){
		case 37: //L
		if (moveLeft()) {
			if(!isGameOver())
				{
					randNumber();
					isGameOver();
				}else{
					alert("GG");
				};
		}
		break;

		case 38: //U
		if (moveUp()) {
			if(!isGameOver())
				{
					randNumber();
					isGameOver();
				}else{
					alert("GG");
				};
		}
		break;
		case 39: //R
		if (moveRight()) {
			if(!isGameOver())
				{
					randNumber();
					isGameOver();
				}else{
					alert("GG");
				};
		}
		break;

		case 40: //D
		if (moveDown()) {
			if(!isGameOver())
				{
					randNumber();
					isGameOver();
				}else{
					alert("GG");
				};
		}
		break;
		default:
	}
})

function moveLeft(){
	var canMoveLeft = false;
	// console.log("in moveLeft");
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 3; j++){
			if( board[i][j] > 0 && board[i][j] == board[i][j+1] ){
				// console.log("-- case 2");
				// console.log("@ i="+i+", j"+(j+1));
				canMoveLeft = true;
				animateToLeft_two(i,j+1);
			}
		}
	}
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 3; j++){
			if( board[i][j] == 0 && board[i][j+1] > 0 ){
				// console.log("-- case 1");
				// console.log("@ i="+i+", j="+(j+1));
				canMoveLeft = true;
				animateToLeft_one(i,j+1);
			}
		}
	}
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 3; j++){
			if( board[i][j] > 0 && board[i][j] == board[i][j+1] ){
				// console.log("-- case 2");
				// console.log("@ i="+i+", j"+(j+1));
				canMoveLeft = true;
				animateToLeft_two(i,j+1);
			}
		}
	}
	return canMoveLeft;
}

function moveUp(){
	// console.log("in moveUp");
	var canMoveUp = false;
	for (var j = 0; j < 4; j++) {
		for (var i = 0; i < 3; i++){
			if( board[i+1][j] > 0 && board[i+1][j] == board[i][j] ){
				// console.log("-- case 2");
				// console.log("@ i="+i+", j="+(j));
				canMoveUp = true;
				animateToUp_two(i,j);
			}
		}
	}
	for (var j = 0; j < 4; j++) {
		for (var i = 0; i < 3; i++){
			if( board[i][j] == 0 && board[i+1][j] > 0 ){
				// console.log("-- case 1");
				// console.log("@ i="+(i+1)+", j="+j);
				canMoveUp = true;
				animateToUp_one(i+1,j);
			}
		}
	}
	for (var j = 0; j < 4; j++) {
		for (var i = 0; i < 3; i++){
			if( board[i+1][j] > 0 && board[i+1][j] == board[i][j] ){
				// console.log("-- case 2");
				// console.log("@ i="+i+", j="+(j));
				canMoveUp = true;
				animateToUp_two(i,j);
			}
		}
	}
	return canMoveUp;
}

function moveRight(){
	// console.log("in moveRight");
	var canMoveRight = false;
	for (var i = 0; i < 4; i++) {
		for (var j = 2; j > -1; j--){
			if( board[i][j] > 0 && board[i][j] == board[i][j+1] ){
				// console.log("-- case 2");
				console.log("@ i="+i+", j="+(j));
				canMoveRight = true;
				animateToRight_two(i,j);
			}
		}
	}
	for (var i = 0; i < 4; i++) {
		for (var j = 2; j > -1; j--){
			if( board[i][j+1] == 0 && board[i][j] > 0 ){
				// console.log("-- case 1");
				// console.log("@ i="+i+", j="+j);
				canMoveRight = true;
				animateToRight_one(i,j);
			}
		}
	}
	for (var i = 0; i < 4; i++) {
		for (var j = 2; j > -1; j--){
			if( board[i][j] > 0 && board[i][j] == board[i][j+1] ){
				// console.log("-- case 2");
				// console.log("@ i="+i+", j="+(j));
				canMoveRight = true;
				animateToRight_two(i,j);
			}
		}
	}
	return canMoveRight;
}

function moveDown(){
	// console.log("in moveDown");
	var canMoveDown = false;
	for (var j = 0; j < 4; j++) {
		for (var i = 3; i > 0; i--){
			if( board[i-1][j] > 0 && board[i-1][j] == board[i][j] ){
				// console.log("-- case 2");
				// console.log("@ i="+(i-1)+", j="+(j));
				canMoveDown = true;
				animateToDown_two(i-1,j);
			}
		}
	}
	for (var j = 0; j < 4; j++) {
		for (var i = 3; i > 0; i--){
			if( board[i][j] == 0 && board[i-1][j] > 0 ){
				// console.log("-- case 1");
				// console.log("@ i="+(i-1)+", j="+j);
				canMoveDown = true;
				animateToDown_one(i-1,j);
			}
		}
	}
	for (var j = 0; j < 4; j++) {
		for (var i = 3; i > 0; i--){
			if( board[i-1][j] > 0 && board[i-1][j] == board[i][j] ){
				// console.log("-- case 2");
				// console.log("@ i="+(i-1)+", j="+(j));
				canMoveDown = true;
				animateToDown_two(i-1,j);
			}
		}
	}
	return canMoveDown;
}

function isGameOver(){
	var gg = true;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j]==0){
				gg = false;
			}
		}
	}
	console.log("gg="+gg);
	return gg;
}