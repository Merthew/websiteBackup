var dungeonRoom = ["Room", "Hallway", "Big Room", "Side Cave Room", "Staircase"];
var dungeonDeadEnd = ["Yes", "No", "No", "No"];
var dungeonTrapType = ["Loot", "Creature and Trap", "Creature", "Creature", "Trap", "Trap", "Empty", "Empty", "Creature and Trap", "Creature", "Creature", "Trap", "Trap", "Empty", "Empty"];
var dungeonDanger = ["Easy", "Easy", "Moderate", "Moderate", "Moderate", "Moderate", "Dangerous", "Dangerous", "Dangerous", "Deadly"];

function generateDungeon() {
	document.getElementById("Dungeon").innerHTML = "Room Type: <b>" + dungeonRoom[randomMinMax(0 , dungeonRoom.length-1)] + "</b>\nIs a dead end: <b>" + dungeonDeadEnd[randomMinMax(0 , dungeonDeadEnd.length-1)] +
												   "</b>\nTrap Status: <b>" + dungeonTrapType[randomMinMax(0 , dungeonTrapType.length-1)] + "</b>\nDanger Status: <b>" + dungeonDanger[randomMinMax(0 , dungeonDanger.length-1)] + "</b>";
}


var lootLevel = ["Equipment, Ammunition, Silver/Copper 3d4", "GP 3d6, Rations, Kits, Armor, Arcane Foci, Gems", 
				"Jewlery, GP 5d8, Pp 3d6, trinket, armor, coated weapons", "Uncommon, Rare, Very Rare 6%ish, Legendary 1/4096, Artifact 1/8192"];
var magicLoot = ["Weapon", "Armor", "Casting", "Potion", "Other"];

function generateLoot() {
	let leel = "";
	let vl = 0;
	let tasva = "";
	let temp = randomMinMax(1, 128);
	if(temp <= 2){
		leel = "Magic";
		vl = 3;
	}else if(temp <= 8){
		leel = "Wealthy";
		vl = 2;
	}else if(temp <= 64){
		leel = "Moderate";
		vl = 1;
	}else {
		leel = "Poor";
	}
	tasva += "Loot Level: <b>" + leel + "</b>\nLoot Table: <b>" + lootLevel[vl] + "</b>";
	let lete = "";
	if(vl == 3){
		temp = randomMinMax(1, 8192);
		if(temp <= 2){
			lete = "Artifact";
		}else if(temp <= 512){
			lete = "Legendary";
		}else if(temp <= 2048){
			lete = "Very Rare";
		}else if(temp <= 4096){
			lete = "Rare";
		}else {
			lete = "Uncommon";
		}
		tasva += "\nMagic Level: <b>" + lete + "</b>\nMagic Loot Type: <b>" + magicLoot[randomMinMax(0 , magicLoot.length-1)] + "</b>";
	}
	
	document.getElementById("Loot").innerHTML = tasva;
}







function randomMinMax(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}