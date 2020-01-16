const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


var world = Create2DArray(100);
generateWorld();

var map = Create2DArray(10);
var tiles = ["grass", "stone", "water", "dirt"];


for(let i = 0; i < 10; i ++){
	for(let j = 0; j < 10; j ++){
		map[i][j] = tiles[getRandomInt(tiles.length)];
	}
}

setInterval(() => {
	//refreshDraw();
	drawWorld();
}, 1000/30);

function refreshDraw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 0.2;
	
	for(let i = 0; i < 10; i ++){
		for(let j = 0; j < 10; j ++){
			var img = new Image();
			if(map[i][j] == "grass"){
				img.src = "media/tile/grass.png";
			}
			if(map[i][j] == "stone"){
				img.src = "media/tile/stone.png";
			}
			if(map[i][j] == "water"){
				img.src = "media/tile/water.png";
			}
			if(map[i][j] == "dirt"){
				img.src = "media/tile/dirt.png";
			}
			ctx.drawImage(img, i * 80, j * 80);
		}
	}
	
	for(let i = 0; i < 10; i ++){
		for(let j = 0; j < 10; j ++){
			ctx.strokeRect(i * 80, j * 80, 80, 80);
		}
	}
}

function drawWorld(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 0.2;
	
	for(let i = 0; i < 100; i ++){
		for(let j = 0; j < 100; j ++){
			var img = new Image();
			if(world[i][j] == "grass"){
				img.src = "media/tile/grass_s.png";
			}
			if(world[i][j] == "stone"){
				img.src = "media/tile/stone_s.png";
			}
			if(world[i][j] == "water"){
				img.src = "media/tile/water_s.png";
			}
			if(world[i][j] == "dirt"){
				img.src = "media/tile/dirt_s.png";
			}
			if(world[i][j] == "sky"){
				img.src = "media/tile/sky_s.png";
			}
			ctx.drawImage(img, i * 8, j * 8);
		}
	}
	
	for(let i = 0; i < 100; i ++){
		for(let j = 0; j < 100; j ++){
			//ctx.strokeRect(i * 8, j * 8, 8, 8);
		}
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

function generateWorld(){
	for(let i = 0; i < 100; i ++){
		for(let j = 0; j < 4; j ++){
			world[i][j] = "sky";
		}
	}
	for(let i = 0; i < 100; i ++){
		world[i][4] = "grass";
	}
	for(let i = 0; i < 100; i ++){
		for(let j = 5; j < 100; j ++){
			let temp = "";
			switch(getRandomInt(2)){
				case 0 : {
					temp = "stone";
					break;
				}
				case 1 : {
					temp = "dirt";
					break;
				}
			}
			world[i][j] = temp;
		}
	}
}