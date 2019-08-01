var dungeonRoom = ["Room", "Hallway", "Big Room", "Side Cave Room", "Staircase"];
var dungeonDeadEnd = ["Yes", "No", "No", "No"];
var dungeonTrapType = ["Loot", "Creature and Trap", "Creature", "Creature", "Trap", "Trap", "Empty", "Empty", "Creature and Trap", "Creature", "Creature", "Trap", "Trap", "Empty", "Empty"];
var dungeonDanger = ["Easy", "Easy", "Moderate", "Moderate", "Moderate", "Moderate", "Dangerous", "Dangerous", "Dangerous", "Deadly"];

function generateDungeon() {
	document.getElementById("Dungeon").innerHTML = "Room Type: " + dungeonRoom[randomMinMax(0 , dungeonRoom.length-1)] + "\nIs a dead end: " + dungeonDeadEnd[randomMinMax(0 , dungeonDeadEnd.length-1)] +
												   "\nTrap Status: " + dungeonTrapType[randomMinMax(0 , dungeonTrapType.length-1)] + "\nDanger Status: " + dungeonDanger[randomMinMax(0 , dungeonDanger.length-1)];
}


var lootLevel = ["Poor", "Moderate", "Wealthy", "Magic"];

function generateLoot() {
	let leel = "";
	let temp = randomMinMax(1, 2049);
	if(temp <= 2){
		leel = "Magic";
	}else if(temp <= 128){
		leel = "Wealthy";
	}else if(temp <= 512){
		leel = "Moderate";
	}else {
		leel = "Poor";
	}
	
	document.getElementById("Loot").innerHTML = "Loot Level: " + leel;
}







function randomMinMax(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}