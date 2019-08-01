var dungeonRoom = ["Room", "Hallway", "Big Room", "Side Cave Room", "Staircase"];
var dungeonDeadEnd = ["Yes", "No"];
var dungeonTrapType = ["Loot", "Creature and Trap", "Creature", "Creature", "Trap", "Trap", "Empty", "Empty", "Creature and Trap", "Creature", "Creature", "Trap", "Trap", "Empty", "Empty"];
var dungeonDanger = ["Easy", "Easy", "Moderate", "Moderate", "Moderate", "Moderate", "Dangerous", "Dangerous", "Dangerous", "Deadly"];

function generateDungeon() {
	document.getElementById("Dungeon").innerHTML = "Room Type: " + dungeonRoom[randomMinMax(0 , dungeonRoom.length-1)] + "\nIs a dead end: " + dungeonDeadEnd[randomMinMax(0 , dungeonDeadEnd.length-1)] +
												   "\nTrap Stattus: " + dungeonTrapType[randomMinMax(0 , dungeonTrapType.length-1)] + "\nDanger Status: " + dungeonDanger[randomMinMax(0 , dungeonDanger.length-1)];
}









function randomMinMax(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}