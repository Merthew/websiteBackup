let list = [];

function addElement(){
	var name = document.getElementById("inputName").value;
	var ini = document.getElementById("inputIni").value;
	document.getElementById("inputName").value = "";
	document.getElementById("inputIni").value = "";
	
	var itemList = document.getElementById("itemList");
	
	list.push("Name: " + name + "\t\tInititive: " + ini + "\t");
	
	const myNode = document.getElementById("itemList");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	
	for(let i = 0; i < list.length; i ++){
		var node = document.createElement("LI");
		node.id="L" + i;
		var textn = document.createTextNode(list[i]);
		var bDel = document.createElement("INPUT");
		bDel.type="button";
		bDel.value = "Delete";
		bDel.onclick = function() {
				itemList.removeChild(document.getElementById("L" + i));
				list.pop(list[i]);
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