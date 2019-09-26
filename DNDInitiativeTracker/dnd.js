let names = [];
let val = [];

function addElement(){
	var name = document.getElementById("inputName").value;
	var ini = document.getElementById("inputIni").value;
	document.getElementById("inputName").value = "";
	document.getElementById("inputIni").value = "";
	
	var itemList = document.getElementById("itemList");
	
	names.push("Name: " + name + "\t\tInititive: ");
	val.push(ini);
	
	var list = [];
	for (var j = 0; j < names.length; j++) 
		list.push({'name': names[j], 'age': val[j]});

	//2) sort:
	list.sort(function(a, b) {
		return ((Number(a.age) > Number(b.age)) ? -1 : ((Number(a.age) == Number(b.age)) ? 0 : 1));
		//Sort could be modified to, for example, sort on the age 
		// if the name is the same.
	});

	//3) separate them back out:
	for (var k = 0; k < list.length; k++) {
		names[k] = list[k].name;
		val[k] = list[k].age;
	}
	
	const myNode = document.getElementById("itemList");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	
	for(let i = 0; i < names.length; i ++){
		var node = document.createElement("LI");
		node.id="L" + i;
		var textn = document.createTextNode(names[i] + val[i] + "\t");
		var bDel = document.createElement("INPUT");
		bDel.type="button";
		bDel.value = "Delete";
		bDel.onclick = function() {
				itemList.removeChild(document.getElementById("L" + i));
				names.pop(names[i]);
		};
		node.appendChild(textn);
		node.appendChild(bDel);
		itemList.appendChild(node);
	}
}

function removeElement(input){
	console.log(input);
	//document.getElementById("itemList").removeChild(input);
}