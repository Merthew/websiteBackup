let names = [];
let val = [];

let pastNames = [];

function addElement(){
	var name = document.getElementById("inputName").value;
	var ini = document.getElementById("inputIni").value;
	document.getElementById("inputName").value = "";
	document.getElementById("inputIni").value = "";
	
	var itemList = document.getElementById("itemList");
	
	names.push("Name: " + name + "\t\tInititive: ");
	val.push(ini);
	if(!pastNames.includes(name)){pastNames.push(name);}
	
	sortArrays();
	
	const itemListNode = document.getElementById("itemList");
	while (itemListNode.firstChild) {
		itemListNode.removeChild(itemListNode.firstChild);
	}
	
	for(let i = 0; i < names.length; i ++){
		var node = document.createElement("LI");
		node.id="L" + i;
		var textn = document.createTextNode(names[i]);
		var iniIn = document.createElement("INPUT");
		iniIn.type = "number";
		iniIn.value = val[i];
		iniIn.className = "inputNumber";
		iniIn.onblur = function () {			
			val[i] = iniIn.value;
			changeElement();
		}
		var bDel = document.createElement("INPUT");
		bDel.type="button";
		bDel.value = "Delete";
		bDel.onclick = function() {
			itemList.removeChild(document.getElementById("L" + i));
			if(names.length == 1){
				names = [];
			}
			else{
				names = arrayRemove(names, names[i]);
			}
			if(val.length == 1){
				val = [];
			}
			else{
				val = arrayRemove(val, val[i]);
			}
		};
		node.appendChild(textn);
		node.appendChild(iniIn);
		node.appendChild(bDel);
		itemList.appendChild(node);
	}
	
	const pastNamesNode = document.getElementById("pastName");
	while (pastNamesNode.firstChild) {
		pastNamesNode.removeChild(pastNamesNode.firstChild);
	}
	
	for(let i = 0; i < pastNames.length; i ++){
		var node = document.createElement("LI");
		node.id = "N" + i;
		var bName = document.createElement("INPUT");
		bName.type = "button";
		bName.value = pastNames[i];
		bName.onclick = function() {
				document.getElementById("inputName").value = pastNames[i];
		};
		node.appendChild(bName);
		document.getElementById("pastName").appendChild(node);
	}
	
}

function changeElement() {
	var itemList = document.getElementById("itemList");

	sortArrays();
	
	const itemListNode = document.getElementById("itemList");
	while (itemListNode.firstChild) {
		itemListNode.removeChild(itemListNode.firstChild);
	}
	
	for(let i = 0; i < names.length; i ++){
		var node = document.createElement("LI");
		node.id="L" + i;
		var textn = document.createTextNode(names[i]);
		var iniIn = document.createElement("INPUT");
		iniIn.type = "number";
		iniIn.value = val[i];
		iniIn.className = "inputNumber";
		iniIn.oninput = function () {			
			val[i] = iniIn.value;
			addElement();
		}
		var bDel = document.createElement("INPUT");
		bDel.type="button";
		bDel.value = "Delete";
		bDel.onclick = function() {
			itemList.removeChild(document.getElementById("L" + i));
			if(names.length == 1){
				names = [];
			}
			else{
				names = arrayRemove(names, names[i]);
			}
			if(val.length == 1){
				val = [];
			}
			else{
				val = arrayRemove(val, val[i]);
			}
		};
		node.appendChild(textn);
		node.appendChild(iniIn);
		node.appendChild(bDel);
		itemList.appendChild(node);
	}
	
}





function sortArrays(){
	var list = [];
	for (var j = 0; j < names.length; j++) 
		list.push({'name': names[j], 'age': val[j]});

	list.sort(function(a, b) {
		return ((Number(a.age) > Number(b.age)) ? -1 : ((Number(a.age) == Number(b.age)) ? 0 : 1));
	});

	for (var k = 0; k < list.length; k++) {
		names[k] = list[k].name;
		val[k] = list[k].age;
	}
}

function arrayRemove(arr, value) {

   return arr.filter(function(ele){
       return ele != value;
   });

}

function softReset(){
	names = [];
	val = [];
	
	const itemListNode = document.getElementById("itemList");
	while (itemListNode.firstChild) {
		itemListNode.removeChild(itemListNode.firstChild);
	}
}

function hardReset(){
	names = [];
	val = [];
	pastNames = [];
	
	const itemListNode = document.getElementById("itemList");
	while (itemListNode.firstChild) {
		itemListNode.removeChild(itemListNode.firstChild);
	}
	
	const pastNamesNode = document.getElementById("pastName");
	while (pastNamesNode.firstChild) {
		pastNamesNode.removeChild(pastNamesNode.firstChild);
	}
}