// animation.js
function animate(i, j, randNum){
	var numberCell = $("#number_"+i+"-"+j);
	numberCell.css("background-color", getNumberBackgroundColor(randNum));
	numberCell.css("color", getNumberColor(randNum));
	numberCell.text(randNum);
	numberCell.animate({
		width: "100px",
		height: "100px",
		top: getPosTop(i,j),
		left: getPosLeft(i,j)
	},200);
}

function updateNumCell(i,j,dest_i,dest_j){
	var oriCell = $("#number_"+i+"-"+j);
	var destCell = $("#number_"+dest_i+"-"+dest_j);
	oriCell.css("background-color", "#b5d1e3");
	oriCell.text("");
	destCell.css("background-color", getNumberBackgroundColor(board[dest_i][dest_j]));
	destCell.css("color", getNumberColor(board[dest_i][dest_j]));
	destCell.text(board[dest_i][dest_j]);
	destCell.animate({
		width: "100px",
		height: "100px",
		top: getPosTop(dest_i,dest_j),
		left: getPosLeft(dest_i,dest_j)
	},50);
	oriCell.animate({
		width: "100px",
		height: "100px"
	},50);
}

function animateToLeft_one(i,j){
	console.log("animateToLeft_one");
	// where sould this block goes to
	var dest_i = i;
	var dest_j;
	switch(j){
		case 1:
			dest_j = j-1;
		break;
		case 2:
			dest_j = board[i][j-2]==0 ? j-2: j-1; 
		break;
		case 3:
			dest_j = board[i][j-3]==0&&board[i][j-2]==0&&board[i][j-1]==0 ? j-3: board[i][j-2]&&board[i][j-1]==0==0 ? j-2 : j-1;
		break;
	}
	board[dest_i][dest_j]=board[i][j];
	board[i][j]=0;
	updateNumCell(i,j,dest_i,dest_j);
	// moveLeft();
}

function animateToLeft_two(i,j){
	console.log("animateToLeft_two");
	var dest_i = i;
	var dest_j = j-1;
	board[dest_i][dest_j]=board[i][j]*2;
	board[i][j]= 0;
	updateNumCell(i,j,dest_i,dest_j);
	// moveLeft();
}

function animateToRight_one(i,j){
	console.log("animateToRight_one");
	// where sould this block goes to
	var dest_i = i;
	var dest_j;
	switch(j){
		case 0:
			dest_j = board[i][j+3]==0&&board[i][j+2]==0&&board[i][j+1]==0 ? j+3: board[i][j+2]==0&&board[i][j+1]==0 ? j+2 : j+1;
		break;
		case 1:
			dest_j = board[i][j+2]==0&&board[i][j+1]==0 ? j+2: j+1; 
		break;
		case 2:
			dest_j = j+1;
		break;
	}
	board[dest_i][dest_j]=board[i][j];
	board[i][j]=0;
	updateNumCell(i,j,dest_i,dest_j);
	// moveRight();
}

function animateToRight_two(i,j){
	console.log("animateToRight_two");
	var dest_i = i;
	var dest_j = j+1;
	board[dest_i][dest_j]=board[i][j]*2;
	board[i][j]= 0;
	updateNumCell(i,j,dest_i,dest_j);
	// moveRight();
}

function animateToUp_one(i,j){
	console.log("animateToUp_one");
	// where sould this block goes to
	var dest_i;
	var dest_j = j;
	switch(i){
		case 3:
			dest_i = board[i-3][j]==0&&board[i-2][j]==0&&board[i-1][j]==0 ? i-3 : board[i-2][j]==0&&board[i-1][j]==0 ? i-2 : i-1;
		break;

		case 2:
			dest_i = board[i-2][j]==0&&board[i-1][j]==0 ? i-2: i-1; 
		break;

		case 1:
			dest_i = i-1;
		break;
	}
	board[dest_i][dest_j]=board[i][j];
	board[i][j]=0;
	updateNumCell(i,j,dest_i,dest_j);
	// moveUp();
}

function animateToUp_two(i,j){
	console.log("animateToUp_two");
	var dest_i = i;
	var dest_j = j;
	i++;
	board[dest_i][dest_j]=board[i][j]*2;
	board[i][j]= 0;
	updateNumCell(i,j,dest_i,dest_j);
	// moveUp();
}

function animateToDown_one(i,j){
	console.log("animateToUp_Down");
	var dest_i;
	var dest_j = j;
	switch(i){
		case 0:
			dest_i = board[i+3][j]==0&&board[i+2][j]==0&&board[i+1][j]==0 ? i+3 : board[i+2][j]==0&&board[i+1][j]==0 ? i+2 : i+1;
		break;

		case 1:
			dest_i = board[i+2][j]==0&&board[i+1][j]==0 ? i+2: i+1; 
		break;

		case 2:
			dest_i = i+1;
		break;
	}
	board[dest_i][dest_j]=board[i][j];
	board[i][j]=0;
	updateNumCell(i,j,dest_i,dest_j);
}

function animateToDown_two(i,j){
	console.log("animateToDown_two");
	var dest_i = i+1;
	var dest_j = j;
	board[dest_i][dest_j]=board[i][j]*2;
	board[i][j]= 0;
	updateNumCell(i,j,dest_i,dest_j);
}