function calcPrime() {
	var p = document.getElementById("primeOne").value;
	var q = document.getElementById("primeTwo").value;
	
	var n = p*q;
	var phi = lcm(p-1, q-1);
	var e = getE(phi);
	
	let temp = 0;
	let i = 0;
	do{
		temp = (e*i) -1;
		i ++;
	}while(temp%phi != 0);
	var d = i-1;
	
	document.getElementById("PrimeOut").innerHTML = "N: " + n + "<br>E: " + e + "<br>D: " + d + "<br><br>Public Key: (" + n + ", " + e + ")<br>Private Key: (" + d + ")";
	
}

function genPrime() {
	let ex1 = getRandInt(2,4);
	let ex2 = getRandInt(2,4);
	
	var prime1 = Math.pow(getRandInt(2,9),ex1);
	var prime2 = Math.pow(getRandInt(2,9),ex2);
	
	while (!isPrime(prime1)){
		prime1 ++;
	}
	
	while (!isPrime(prime2) || (prime2 == prime1)){
		prime2 ++;
	}
	
	document.getElementById("primeOne").value = prime1;
	document.getElementById("primeTwo").value = prime2;
	
}

function encode() {
	var n = document.getElementById("inputKeyN").value;
	var e = document.getElementById("inputKeyE").value;
	var message = document.getElementById("inputMessage").value;
	console.log("Message: " + message);
	console.log(message.trim());
	var cMessage = "";
	message = message.trim();
	
	
	for(var index = 0; index < message.length; index ++){
		let temp = message.charCodeAt(index);
		console.log(message.charAt(index) + " " + message.charCodeAt(index));
		temp = Math.pow(temp, e);
		temp = temp % n;
		cMessage += temp + " ";
	}
	
	console.log("cMessage: " + cMessage);
}

function decode() {
	if(decodeEmpty()){
		var n = document.getElementById("inputKeyN").value;
		var e = document.getElementById("inputKeyE").value;
		var d = document.getElementById("inputKeyD").value;
		var message = document.getElementById("inputMessage").value;
		
		var cstr = message.split(" ");
		var cMessage = "";
		
		for(let i = 0; i+1 < cstr.length; i ++) {
			var temp = Number(cstr[i].trim());
			console.log("temp: " + temp);
			temp = Math.pow(temp, d) % n;
			console.log("temp: " + temp);
			cMessage += String.fromCharCode(temp);
		}
		
		console.log("cMessage: " + cMessage);
		
	}
	else {
		
	}
}










function decodeEmpty() {
	if(document.getElementById("inputKeyN").value === "")
		return false;
	if(document.getElementById("inputKeyE").value === "")
		return false;
	if(document.getElementById("inputKeyD").value === "")
		return false;
	return true;
}


function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function gcd(a , b){
	if(a==0)
		return b;
	return gcd(b%a, a);
}

function lcm(a, b){
	return (a*b)/gcd(a, b);
}

function getE(phi) {
	var e = 3;
	for (let i = 3; i < phi; i ++){
		if(gcd(i, phi) == 1) {
			e = i;
			break;
		}
	}
	return e;
}