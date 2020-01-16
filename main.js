function onLoad(){
	var reader = new FileReader();
	var posts = new File([""], ".\docs\posts.txt");
	reader.readAsText(posts);
	reader.onload = function() {
		console.log(reader.result);
	};
	//console.log(reader.result);
}