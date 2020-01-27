function onLoad(){
	$.get( "https://merthew.surge.sh/docs/faq.txt", function( data ) {
		var text = data;
		console.log(text);
		document.getElementById("faq").innerHTML = text;
	});
	
	$.get( "https://merthew.surge.sh/docs/about.txt", function( data ) {
		var text = data;
		console.log(text);
		document.getElementById("about").innerHTML = text;
	});
}