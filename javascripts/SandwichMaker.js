var SandwichMaker = (function() {


  // Private variable to store the price
  let totalPrice = 0;


  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log("Total Price", totalPrice);
		  document.getElementById("final-sandwich-order").innerHTML = totalPrice;
    }
  };

})();