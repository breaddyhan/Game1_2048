// main.js
$(function(){
	newGame();
});

var board = new Array();

function newGame(){
	init();
	updateBoardView();
	randNumber();
	randNumber();
}

function init(){
	// init data structure
	for (var i = 0; i < 4; i++) {
		board[i] = new Array();
		for (var j = 0; j < 4; j++) {
			board[i][j] = 0; // init the value in double array
			var gridCell = $("#grid_"+i+"-"+j); // fetch grid_i-j
			gridCell.css("top", getPosTop(i,j));
			gridCell.css("left", getPosLeft(i,j));

			var location = "<div id= number_"+i+"-"+j+" class='number-class'></div>";
			$("#number_"+i+"-"+j).empty();
			$("#grid").append(location);
			var numberCell = $("#number_"+i+"-"+j);
		}
	}
}

function updateBoardView(){
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			// console.log("new"+"i:"+i+",j:"+j);
			var numberCell = $("#number_"+i+"-"+j);
			if (board[i][j] == 0) {
				numberCell.css("width", "0px");
				numberCell.css("height", "0px");
				numberCell.css("top", getPosTop(i,j)+50);
				numberCell.css("left", getPosLeft(i,j)+50);
			}else{
				numberCell.css("width", "100px");
				numberCell.css("height", "100px");
				numberCell.css("top", getPosTop(i,j));
				numberCell.css("left", getPosLeft(i,j));
				numberCell.css("background-color",getNumberBackgroundColor(board[i][j]))
				numberCell.css("color", getNumberColor(board[i][j]));
				numberCell.text(board[i][j]);
			}
		}
	}
}

function randNumber(){
	// rand num @ rand position
	// position
	var randx = Math.floor(Math.random()*4);
	var randy = Math.floor(Math.random()*4);
	if (board[randx][randy] != 0) {
		console.log("same spot!");
		randNumber();
		return;
	}
	var randNum = Math.random() < 0.5 ? 2:4;
	board[randx][randy] = randNum;
	animate(randx, randy, randNum);
	console.log("-----New----");
	console.log("i:"+randx+", j:"+randy,", "+randNum);
}
