function callStock(){
	
	if(Math.abs(Math.sin((game.gameTime * Math.random()) % 90)) <= 0.2){
		game.researchPriceTrend *= -1;
	}
	console.log(game.researchPriceTrend);
	var mod = 0.45;
    if (game.researchCashCost > game.researchUpperBound) mod = 1;
    if (game.researchCashCost < game.researchLowerBound) mod = 0.00001;
    var sig = (Math.random() >= mod) ? 1 : -1;
	
	var maxToAdd = ((sig > 0) ? game.researchUpperFlux : game.researchLowerFlux) * game.researchCashCost;
	game.researchCashCost += (Math.random() * maxToAdd * sig);
	
}