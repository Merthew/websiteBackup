function changeIFrame(num){
	
	var iframe = document.getElementById("VectorWorkFrame");
	
	switch(num){
	case 0:
		console.log("Case 0.");
		iframe.src = "Home/home.html";
		break;
	case 1:
		console.log("Case 1.");
		iframe.src = "VectorWork/vectorwork.html";
		break;
	}
	
}