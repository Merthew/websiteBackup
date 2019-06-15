function changeIFrame(num){
	
	var iframe = document.getElementById("Frame");
	
	switch(num){
	case 0:
		iframe.src = "Home/home.html";
		break;
	case 1:
		iframe.src = "VectorWork/vectorwork.html";
		break;
	case 2:
		iframe.src = "ThisIsAGame/TIAG.html";
		break;
	}
	
}

function shadeButton(num) {
	switch(num){
	case 0:
		var shadeButton = document.getElementById("bHome");
		shadeButton.style.backgroundColor = "#B5B5B5";
		break;
	case 1:
		var shadeButton = document.getElementById("bVectorWork");
		shadeButton.style.backgroundColor = "#B5B5B5";
		break;
	case 2:
		var shadeButton = document.getElementById("bTIAGv2");
		shadeButton.style.backgroundColor = "#B5B5B5";
		break;
	}
}

function unshadeButton(num) {
	switch(num){
	case 0:
		var shadeButton = document.getElementById("bHome");
		shadeButton.style.backgroundColor = "#FFF";
		break;
	case 1:
		var shadeButton = document.getElementById("bVectorWork");
		shadeButton.style.backgroundColor = "#FFF";
		break;
	case 2:
		var shadeButton = document.getElementById("bTIAGv2");
		shadeButton.style.backgroundColor = "#FFF";
		break;
	}
}

var r = 0;
var g = 0;
var b = 0;
var finished = true;
var goal = 0;
setInterval(() => {
	if(finished){
		console.log(goal);
		goal = Math.floor(Math.random() * 6) + 1;
		finished = false;
	}
	else{
		switch(goal){
			case 1:
				if(r <= 200){
					r ++;
				}
				if(g > 0) {
					g --;
				}
				if(b > 0) {
					b --;
				}
				
				if(r >= 200 && g <= 0 && b <= 0){
					finished = true;
				}
				break;
			case 2:
				if(r > 0){
					r --;
				}
				if(g <= 200) {
					g ++;
				}
				if(b > 0) {
					b --;
				}
				
				if(g >= 200 && r <= 0 && b <= 0){
					finished = true;
				}
				break;
			case 3:
				if(r > 0){
					r --;
				}
				if(g > 0) {
					g --;
				}
				if(b <= 200) {
					b ++;
				}
				
				if(b >= 200 && r <= 0 && g <= 0){
					finished = true;
				}
				break;
			case 4:
				if(r <= 200){
					r ++;
				}
				if(g <= 200) {
					g ++;
				}
				if(b > 0) {
					b --;
				}
				
				if(r >= 200 && g >= 200 && b <= 0){
					finished = true;
				}
				break;
			case 5:
				if(r > 0){
					r --;
				}
				if(g <= 200) {
					g ++;
				}
				if(b <= 200) {
					b ++;
				}
				
				if(b >= 200 && g >= 200 && r <= 0){
					finished = true;
				}
				break;
			case 6:
				if(r <= 200){
					r ++;
				}
				if(g > 0) {
					g --;
				}
				if(b <= 200) {
					b ++;
				}
				
				if(r >= 200 && b >= 200 && g <= 0){
					finished = true;
				}
				break;
		}
	}

	
	var sidebar = document.getElementById("sidebar");
	sidebar.style.background = "linear-gradient(to top, rgb(" + r + "," + g + "," + b +"), #000)";
	
}, 1000/30);