// game.js
$(document).keydown(function (e){
	switch(event.which){
		case 37: //L
		if (moveLeft()) {
			// moveLeftAnimate();
			if(!isGameOver())
				{
					randNumber();
					isGameOver();
				}else{

				};
		}
		break;
		case 38: //U

		break;
		case 39: //R

		break;
		case 40: //D

		break;
		default:
	}
})

function moveLeft(){
	console.log("in moveLeft");
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++){
			if( board[i][j] > 0 && board[i][j] == board[i][j+1] ){
				// return true;
				console.log("case 1");
				return true;
			}
			if( board[i][j] == 0 && board[i][j+1] > 0 ){
				console.log("case 2");
				// $("#number_"+i+"-"+j).animate({
				// 	top: getPosTop(board[i][j]),
				// 	left: getPosLeft(board[i][j])
				// }, 200)
				return true;
			}
		}
	}
	// return false;
}

// function moveLeftAnimate(){
// // $("#number_"+i+"-"+j).animte({});
// }

function isGameOver(){
	var gg = true;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j]!=0){
				gg = false;
			}
		}
	}
	console.log("gg="+gg);
	return gg;
}