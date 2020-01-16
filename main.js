function onLoad(){
	var raw = "";
	$.get( "http://merthew.surge.sh/docs/posts.txt", function( data ) {
		var text = data;
		raw = data;
		console.log(text);
	});
	
	console.log(raw);
}