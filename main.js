function onLoad(){
	$.get( "http://merthew.surge.sh/docs/posts.txt", function( data ) {
		var text = data;
		console.log(text);
		document.getElementById("updates").innerHTML = text;
	});
}