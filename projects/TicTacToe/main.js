var canPlay = true;
var Xwins = 0;
var Owins = 0;
var plays = 0;
var buttonClicks = 0;

setInterval( () => {
	if(plays >= 10 && document.getElementById("redButtonWrapper").style.display != "inherit"){
		fadeIn(document.getElementById("redButtonWrapper"));	
	}
}, 1000/30);


function gReset(){
	canPlay = true;
	for(var i = 1; i <= 9; i ++){
		var l = document.getElementById("g" + i);
		l.innerHTML = "";
		l.style.cursor = "pointer";
	}
	//document.getElementById("reset").style.display = "NONE";
	fadeOut(document.getElementById("reset"));
	document.getElementById("reset").style.cursor = "auto";
}

function onGridClick(num){
	if(canPlay){
		var c = document.getElementById("g" + num);
		if(c.innerHTML != "X" && c.innerHTML != "O"){
			c.innerHTML = "X";
			if(!winCheck(1)){
				play();
				winCheck(0);
			}
		}		
	}
}

function play(){
	for(var i = 1; i <= 9; i ++){
		var c = document.getElementById("g" + i);
		if(c.innerHTML != "X" && c.innerHTML != "O"){
			c.innerHTML = "O";
			break;
		}
	}
}

function winCheck(who){
	var c = new Array();
	for(let i = 1; i <= 9; i ++){
		var l = document.getElementById("g" + i);
		if(l.innerHTML == "X"){
			c.push(1);
		}
		else if(l.innerHTML == "O"){
			c.push(2);
		}
		else{
			c.push(0);
		}
	}
	if(c[0] == c[1] && c[0] == c[2] && c[0] != 0){
		//horizontal row 1
		playerWon(who);
		return true;
	}
	else if(c[3] == c[4] && c[3] == c[5] && c[3] != 0){
		//horizontal row 2
		playerWon(who);
		return true;
	}
	else if(c[6] == c[7] && c[6] == c[8] && c[6] != 0){
		//horizontal row 3
		playerWon(who);
		return true;
	}
	else if(c[0] == c[3] && c[0] == c[6] && c[0] != 0){
		//vericle row 1
		playerWon(who);
		return true;
	}
	else if(c[1] == c[4] && c[1] == c[7] && c[1] != 0){
		//vericle row 2
		playerWon(who);
		return true;
	}
	else if(c[2] == c[5] && c[2] == c[8] && c[2] != 0){
		//vericle row 3
		playerWon(who);
		return true;
	}
	else if(c[0] == c[4] && c[0] == c[8] && c[0] != 0){
		//diagnal 1
		playerWon(who);
		return true;
	}
	else if(c[2] == c[4] && c[2] == c[6] && c[2] != 0){
		//diagnal 2
		playerWon(who);
		return true;
	}
	else if(c[0] != 0 && c[1] != 0 && c[2] != 0 && c[3] != 0 && c[4] != 0 && c[5] != 0 && c[6] != 0 && c[7] != 0 && c[8] != 0 && c[9] != 0){
		//Tie case
		playerWon(-1);
	}
	else {
		//There are still plays to be made.
		return false;
	}
}

function playerWon(num) {
	//Can play being the flag for clickable gridspaces.
	canPlay = false;
	plays ++;
	
	//show scoreboard
	if(document.getElementById("scoreboardWrapper").style.display != "inherit"){
		fadeIn(document.getElementById("scoreboardWrapper"));
	}
	
	//Do something for either side winning.
	switch(num){
	case 0:
		Owins ++;
		document.getElementById("scoreboardO").innerHTML = "O: " + Owins;
		document.getElementById("scoreboardX").innerHTML = "X: " + Xwins;
		console.log("O wins.");
		if(plays >= 5){
			var statusTag = document.getElementById("gameStatusTag");
			statusTag.innerHTML = "Loss";
			fadeInOut(statusTag, 2);
		}
		break;
	case 1:
		Xwins ++;
		document.getElementById("scoreboardX").innerHTML = "X: " + Xwins;
		document.getElementById("scoreboardO").innerHTML = "O: " + Owins;
		console.log("X wins.");
		if(plays >= 5){
			var statusTag = document.getElementById("gameStatusTag");
			statusTag.innerHTML = "Won";
			fadeInOut(statusTag, 2);
		}
		break;
	case -1:
		document.getElementById("scoreboardX").innerHTML = "X: " + Xwins;
		document.getElementById("scoreboardO").innerHTML = "O: " + Owins;
		console.log("Tie Game.");
		if(plays >= 5){
			var statusTag = document.getElementById("gameStatusTag");
			statusTag.innerHTML = "Tie";
			fadeInOut(statusTag, 2);
		}
		break;
	}
	for(let i = 1; i <= 9; i++){
		var l = document.getElementById("g" + i);
		l.style.cursor = "auto";
	}
	
	//document.getElementById("reset").style.display = "inherit";
	fadeIn(document.getElementById("reset"));
	document.getElementById("reset").style.cursor = "pointer";
}

function fadeIn(element){
	element.style.opacity = "0";
	element.style.display = "inherit";
	var opa = 0;
	var fade = setInterval( () => {
		opa += 0.01;
		element.style.opacity = opa;
		if(opa >= 1){
			clearInterval(fade);
		}
	}, 10);
}

function fadeOut(element){
	element.style.opacity = "1";
	var opa = 1;
	var fade = setInterval( () => {
		opa -= 0.01;
		element.style.opacity = opa;
		if(opa <= 0){
			clearInterval(fade);
			element.style.display = "NONE";
		}
	}, 1);
}

function fadeInOut(element, delay){
	element.style.opacity = "0";
	element.style.display = "inherit";
	var opa = 0;
	var fade = setInterval( () => {
		opa += 0.01;
		element.style.opacity = opa;
		if(opa >= 1){
			clearInterval(fade);
			
			setTimeout(() => { 
				
				element.style.opacity = "1";
				var opa = 1;
				var fade = setInterval( () => {
					opa -= 0.01;
					element.style.opacity = opa;
					if(opa <= 0){
						clearInterval(fade);
						element.style.display = "none";
					}
				}, 1);
			
			}, delay * 1000);
		}
	}, 10);
}

function redButtonClick(){
	var buttonTop = document.getElementById("redButtonTop");
	buttonClicks ++;
	
	
	buttonTop.style.top = "10px";
	setTimeout(() => {
		buttonTop.style.top = "0px";
	}, 100);
}