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
	},50);
}