// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

	// Private variable to store the different meat prices
	let meatPrices = 0;

	//JS object that contains the ingredients as keys and their cost as the value
	let meatSelection = {"turkey": 1.00, "salami": 0.75, "ham": 1.00, "tuna": 2.00, "pepperoni": 1.25, "bacon": 1.50, "none": 0};

  // Augment the original object with another method
  maker.addMeat = function(key) {
  	meatPrices = meatSelection[key];
  	return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker);


