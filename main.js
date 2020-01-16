function onLoad(){
	var raw = "";
	$.get( "http:Merthew.surge.sh/docs/posts.txt", function( data ) {
		var text = data;
		raw = data;
		console.log(text);
	});
	
	console.log(raw);
}