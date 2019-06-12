function changeIFrame(num){
	
	var iframe = document.getElementById("Frame");
	
	switch(num){
	case 0:
		iframe.src = "Home/home.html";
		break;
	case 1:
		iframe.src = "VectorWork/vectorwork.html";
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
	}
}