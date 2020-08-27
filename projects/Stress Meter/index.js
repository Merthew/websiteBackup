setInterval(()=>{
	updateBar();
}, 30/1000);

function updateBar(){
	var temp = 100 - document.getElementById("progressRange").value;
	document.getElementById("progress").style.width = temp + "%";
}