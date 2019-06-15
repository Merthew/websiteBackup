let suffixes = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", 
					"Septillion", "Octillion", "Nonillion", "Decillion", "Undecillion", "Duodecillion", "Tredecillion",
					"Quattuordecillion", "Quindecillion", "Sexdecillion", "Septendecillion", "Octodecillion", 
					"Novemdecillion", "Vigintillion", "Unvigintillion", "Duovigintillion", "Trevigintillion",
					"Quattuorvigintillion", "Quinvigintillion", "Sexvigintillion", "Septenvigintillion", "Octovigintillion",
					"Novemvigintillion", "Trigintillion", "Untrigintillion", "Duotrigintillion", "Trestrigintillion",
					"Quattuortrigintillion", "Quinquatrigintillion", "Sestrigintillion", "Septentrigintillion",
					"Octotrigintillion", "Noventrigintillion", "Quadragintillion", "Unquadragintillion", "Duoquadragintillion",
					"Trequadragintillion", "Quattuorquadragintillion", "Quinquadragintillion", "Sexquadragintillion",
					"Septenquadragintillion", "Octoquadragintillion", "Novemquadragintillion", "Quinquagintillion"];
var isStartupScreen = false;
var startupSec = 0;

var game = {
	//resources
	cash: 15,
	matter: 0,
	infinity: 0,
	researchPoints: 0,
	
	//production stuff
	researchLevel1: 0,
	researchLevel2: 0,
	researchTicks1: 60*20,
	researchTicks2: 60*20,
	researchCurrT1: 0,
	researchCurrT2: 0,
	researchLevelPrice1: 15,
	researchLevelPrice2: 5000,
	researchPower1: 1,
	researchPower2: 10,
	researchCashCost: 1,
	researchPowerIndex: 0,
	
	researchLowerFlux: 0.2,
	researchUpperFlux: 0.2,
	researchLowerBound: 0.5,
	researchUpperBound: 2,
	researchPriceTrend: 1,
	
	//statistics
	gameTime: 0,
	
};
const defaultgame = game;


			
function clearStartupScreen(){
	var element = document.getElementById("topBar");
	element.style.display = "block";
	
	element = document.getElementById("bottomBar");
	element.style.display = "block";
	
	element = document.getElementById("screen1");
	element.style.display = "block";
	
	var fadeTarget = document.getElementById("screenStartup");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
			fadeTarget.style.display = "none";
			
			
        }
    }, 10);
}

function startup(){
	var element = document.getElementById("screen1");
	element.style.display = "none";
	
	element = document.getElementById("screen2");
	element.style.display = "none";
	
	element = document.getElementById("screen3");
	element.style.display = "none";
			
	element = document.getElementById("screenA");
	element.style.display = "none";
			
	element = document.getElementById("screenS");
	element.style.display = "none";
	
	element = document.getElementById("topBar");
	element.style.display = "none";
	
	element = document.getElementById("bottomBar");
	element.style.display = "none";
	
	pullSave();
	isStartupScreen = true;
}

function pullSave(){
	if (typeof(Storage) !== "undefined") {
		let save = localStorage.getItem("save")
		if (save) game = JSON.parse(save);
		
		console.log("Pulled data from save.");
	} else {
		window.alert("This browser does not support save data.");
	}
}

function pushSave(){
	localStorage.setItem("save", JSON.stringify(game))
}

function clearSave(){
	if(confirm("Are you sure?")){
		game = defaultgame;
		pushSave();
		location.reload();
	}
}

function swapDisp(num){
	switch(num){
		case 1:
			var element = document.getElementById("screen1");
			element.style.display = "block";
	
			element = document.getElementById("screen2");
			element.style.display = "none";
			
			element = document.getElementById("screen3");
			element.style.display = "none";
			
			element = document.getElementById("screenA");
			element.style.display = "none";
			
			element = document.getElementById("screenS");
			element.style.display = "none";
			break;
		case 2:
			var element = document.getElementById("screen1");
			element.style.display = "none";
	
			element = document.getElementById("screen2");
			element.style.display = "block";
			
			element = document.getElementById("screen3");
			element.style.display = "none";
			
			element = document.getElementById("screenA");
			element.style.display = "none";
			
			element = document.getElementById("screenS");
			element.style.display = "none";
			break;
		case 3:
			var element = document.getElementById("screen1");
			element.style.display = "none";
	
			element = document.getElementById("screen2");
			element.style.display = "none";
			
			element = document.getElementById("screen3");
			element.style.display = "block";
			
			element = document.getElementById("screenA");
			element.style.display = "none";
			
			element = document.getElementById("screenS");
			element.style.display = "none";
			break;
		case 4:
			var element = document.getElementById("screen1");
			element.style.display = "none";
	
			element = document.getElementById("screen2");
			element.style.display = "none";
			
			element = document.getElementById("screen3");
			element.style.display = "none";
			
			element = document.getElementById("screenA");
			element.style.display = "block";
			
			element = document.getElementById("screenS");
			element.style.display = "none";
			break;
		case 5:
			var element = document.getElementById("screen1");
			element.style.display = "none";
	
			element = document.getElementById("screen2");
			element.style.display = "none";
			
			element = document.getElementById("screen3");
			element.style.display = "none";
			
			element = document.getElementById("screenA");
			element.style.display = "none";
			
			element = document.getElementById("screenS");
			element.style.display = "block";
			break;
	}
}

var FPS = 60;
var frame = 0;
setInterval(() => {
	if(frame >= FPS){
		pushSave();
		frame = 0;
		if(isStartupScreen){
			startupSec ++;
		}
		callStock();
	}
	if(frame % 10 == 0){
		updateNumbers();
	}
	
	if(startupSec >= 2){
		clearStartupScreen();
		startupSec = 0;
		isStartupScreen = false;
	}

	update();
	frame ++;
}, 1000/FPS);

function updateNumbers(){
	//Resource Bar
	document.getElementById("cashDisp").innerHTML = "<b>$</b>" + getShortenedCash(Number(game.cash));
	document.getElementById("matterDisp").innerHTML = getShortenedNum(game.matter) + " <b>Matter</b>";
	document.getElementById("infinityDisp").innerHTML = getShortenedNum(game.infinity) + " <b>Δ∞</b>";
	
	//Research Lab Screen
	document.getElementById("researchLevel1").innerHTML = "<b>Level: </b>" + ((game.researchLevel1 > 0) ? game.researchLevel1 : "0");
	document.getElementById("researchLevel2").innerHTML = "<b>Level: </b>" + ((game.researchLevel2 > 0) ? game.researchLevel2 : "0");
	document.getElementById("researchPoints").innerHTML = getShortenedNum(game.researchPoints) + " <b>RP</b>";
	document.getElementById("researchPointPrice").innerHTML = "<b>Price: $</b>" + getShortenedCash(game.researchCashCost);
	document.getElementById("researchBar1CurrentSpeed").innerHTML = (game.researchTicks1/60).toFixed(1) + " <b>Seconds</b>";
	document.getElementById("researchBar2CurrentSpeed").innerHTML = (game.researchTicks2/60).toFixed(1) + " <b>Seconds</b>";
	
	//Matter creation lab
	
	//Infinity room
}

function getShortenedCash(num){
	if(num < 1){
		return num.toFixed(2);
	}
	if(num < 1000){
		return num.toFixed(2) + " " + suffixes[Math.floor(Math.log10(num) / 3)];
	}
	var temp = (Math.pow(10, Math.floor(Math.log10(num)) % 3) * (num / Math.pow(10, Math.floor(Math.log10(num))))).toFixed(3);
	return temp + " " + suffixes[Math.floor(Math.log10(num) / 3)];
}

function getShortenedNum(num){
	var temp = 0;
	if(num == 0) 
		return "0";
	if(num < 1) 
		return num.toFixed(3);
	if(num < 1000) 
		temp = Math.pow(10, Math.floor(Math.log10(num)) % 3) * (num / Math.pow(10, Math.floor(Math.log10(num))));
	temp = (Math.pow(10, Math.floor(Math.log10(num)) % 3) * (num / Math.pow(10, Math.floor(Math.log10(num))))).toFixed(3);
	return temp + " " + suffixes[Math.floor(Math.log10(num) / 3)]
}

function update(){
	game.gameTime ++;
	
	calculateResearchTicks();
	calculateResearchCosts();
	calculateResearchTime();
	updateBars();
	updateTooltips();
}

function updateBars(){
	var widthR1 = (game.researchCurrT1 / game.researchTicks1) * 100;
	if(game.researchTicks1 <= 3){
		widthR1 = 100;
	}
	
	document.getElementById("researchBar1Progress").style.width = widthR1 + "%";
	document.getElementById("researchBar1Text").innerHTML = widthR1.toFixed(0) + "%";
	
	var widthR2 = (game.researchCurrT2 / game.researchTicks2) * 100;
	if(game.researchTicks2 <= 3){
		widthR2 = 100;
	}
	document.getElementById("researchBar2Progress").style.width = widthR2 + "%";
	document.getElementById("researchBar2Text").innerHTML = widthR2.toFixed(0) + "%";
}

function updateTooltips(){
	if(game.researchLevel1 < 64 || game.researchLevel2 < 64){
		document.getElementById("I_Researchlevel_tooltip").innerHTML = "<b>Cost: $</b>" + getShortenedCash((game.researchLevel1 < 64) ? game.researchLevelPrice1 : game.researchLevelPrice2)
																		+ "<p>Research Level directly affects the speed at which the bar fills.<p>The maximum level for each bar is 64.";
	}
	else{
		document.getElementById("I_Researchlevel_tooltip").innerHTML = "Research is at maximum level.";
	}
}

function calculateResearchTicks(){
	if(game.researchLevel1 > 0){
		game.researchCurrT1 ++;
	}
	if(game.researchCurrT1 >= game.researchTicks1){
		game.researchCurrT1 = 0;
		game.researchPoints += game.researchPower1;
	}
	
	if(game.researchLevel2 > 0){
		game.researchCurrT2 ++;
	}
	if(game.researchCurrT2 >= game.researchTicks2){
		game.researchCurrT2 = 0;
		game.researchPoints += game.researchPower2;
	}
}

function calculateResearchCosts(){
	game.researchLevelPrice1 = 15;
	for(let i = 1; i <= game.researchLevel1; i ++){
		game.researchLevelPrice1 += Math.trunc(Math.pow(Math.trunc(game.researchLevelPrice1 * 0.1), 1.0001));
	}
	
	game.researchLevelPrice2 = 5000;
	for(let i = 1; i <= game.researchLevel2; i ++){
		game.researchLevelPrice2 += Math.trunc(Math.pow(Math.trunc(game.researchLevelPrice2 * 0.1), 1.0001));
	}
}

function calculateResearchTime(){
	game.researchTicks1 = 60*20;
	game.researchTicks2 = 60*20;
	
	for(let i = 2; i <= game.researchLevel1; i ++){
		game.researchTicks1 /= 1.1;
	}
	
	for(let i = 2; i <= game.researchLevel2; i ++){
		game.researchTicks2 /= 1.1;
	}
	
}

function buyResearchLevel(){
		
	if(game.researchLevelPrice1 <= game.researchLevelPrice2 && game.researchLevel1 < 64){
		if(game.researchLevel1 < 64){
			if(game.cash >= game.researchLevelPrice1){
				document.getElementById("I_Researchlevel").src = "images/icons/I_Researchlevel_d.png";
				setTimeout(function(){ document.getElementById("I_Researchlevel").src = "images/icons/I_Researchlevel_U.png"; }, 60);
				game.cash -= game.researchLevelPrice1;
				game.researchLevel1 ++;
			}
		}
	}
	else {
		if(game.researchLevel2 < 64){
			if(game.cash >= game.researchLevelPrice2){
				document.getElementById("I_Researchlevel").src = "images/icons/I_Researchlevel_d.png";
				setTimeout(function(){ document.getElementById("I_Researchlevel").src = "images/icons/I_Researchlevel_U.png"; }, 60);
				game.cash -= game.researchLevelPrice2;
				game.researchLevel2 ++;
			}
		}
	}
}

function sellResearch(){
	game.cash = (game.cash || 0) + (game.researchPoints * game.researchCashCost);
	game.researchPoints = 0;
}