function onLoad(){
	$.get( "https://merthew.surge.sh/docs/faq.txt", function( data ) {
		var text = data;
		console.log(text);
		document.getElementById("faq").innerHTML = text;
	});
}