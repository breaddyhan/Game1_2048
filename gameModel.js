// support.js
function getPosTop(i,j){
	return i*120+20;
}

function getPosLeft(i,j){
	return j*120+20;
}

function getNumberBackgroundColor(num){
	switch(num){
		case 2: return "#90bbd5"; break;
		case 4: return "#7eafce"; break;
		case 8: return "#6ba4c7"; break;
		case 16: return "#5998c0"; break;
		case 32: return "#468db9"; break;
		case 64: return "#3f7fa6"; break;
		case 128: return  "#386f94"; break;
		case 256: return "#316181"; break;
		case 512: return "#2a536f"; break;
		case 1024: return "#23455c"; break;
		case 2048: return "#1c374a"; break;
		case 4096: return "#152937"; break;
	}
}

function getNumberColor(num){
	return "#edf4f8";
	// switch(num){
	// 	case 2:
	// 	case 8:
	// 	case 32:
	// 	case 128:
	// 	case 512:
	// 	case 2048: 
	// 		return "#c8ddea";
	// 		break;
	// 	default: return "#a3c6dc";
	// }
}