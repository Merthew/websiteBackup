var FPS = 1;
var frame = 0;
setInterval(() => {
	var input1 = document.getElementById("input_one").value;
	var input2 = document.getElementById("input_two").value;
	
	if(input1.charAt(0) == "<" && input2 === ""){
		
		var a = Number(input1.substring(1, input1.indexOf(",")));
		input1 = input1.substring(input1.indexOf(",") + 1);
		var b = Number(input1.substring(0, input1.indexOf(",")));
		input1 = input1.substring(input1.indexOf(",") + 1);
		var c = Number(input1.substring(0, input1.indexOf(">")));
		
		var length = Math.sqrt(a*a + b*b + c*c);
		document.getElementById("output").innerHTML = "|V| = " + length.toFixed(4) + "     sqrt(" + (length*length).toFixed(2) + ")";
	}
	
	
	
	if(input1.charAt(0) == "<" && input2.charAt(0) == "<"){
		var a1 = Number(input1.substring(1, input1.indexOf(",")));
		input1 = input1.substring(input1.indexOf(",") + 1);
		var b1 = Number(input1.substring(0, input1.indexOf(",")));
		input1 = input1.substring(input1.indexOf(",") + 1);
		var c1 = Number(input1.substring(0, input1.indexOf(">")));
		
		var a2 = Number(input2.substring(1, input2.indexOf(",")));
		input2 = input2.substring(input2.indexOf(",") + 1);
		var b2 = Number(input2.substring(0, input2.indexOf(",")));
		input2 = input2.substring(input2.indexOf(",") + 1);
		var c2 = Number(input2.substring(0, input2.indexOf(">")));
		
		var dot = a1*a2 + b1*b2 + c1*c2;
		var cross1 = b1*c2 - b2*c1;
		var cross2 = a2*c1 - a1*c2;
		var cross3 = a1*b2 - a2*b1;
		
		var length1 = Math.sqrt(a1*a1 + b1*b1 + c1*c1);
		var length2 = Math.sqrt(a2*a2 + b2*b2 + c2*c2);
		
		var anglerad = Math.acos(dot/(length1*length2));
		var angledeg = anglerad * (180/Math.PI);
		
		var crosslength = Math.sqrt(cross1*cross1 + cross2*cross2 + cross3*cross3);
		
		var coeff = dot/(length2*length2);
		var pro1 = a2*coeff;
		var pro2 = b2*coeff;
		var pro3 = c2*coeff;
		
		document.getElementById("output").innerHTML = "Length 1: " + length1.toFixed(3) + "<br>Length 2: " + length2.toFixed(3) +"<br>Dot Product: " + dot + "<br>Angle between vectors: " + anglerad.toFixed(3) 
		+ " rad. " + angledeg.toFixed(3) + " degrees." + "<br>Cross Product: <" + cross1 + "," + cross2 + "," + cross3 + "><br>Cross Product Length: " + crosslength.toFixed(4) + 
		"     sqrt(" + (crosslength*crosslength).toFixed(2) + ")" + "<br>Projected vector A onto B: <" + pro1.toFixed(3) + "," + pro2.toFixed(3) + "," + pro3.toFixed(3) + ">";
		
	}
	
	frame ++;
	
}, 1000/FPS);



