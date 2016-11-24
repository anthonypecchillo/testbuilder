// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix01 = cardNumber[0] + cardNumber[1];
  var prefix2 = cardNumber[2];
  var prefix3 = cardNumber[3];
  var dcPrefixes = ["38", "39"];
  var aePrefixes = ["34", "37"];
  var mcPrefixes = ["51", "52", "53", "54", "55"];
  var discPrefixes = ["65", "644", "645", "646", "647", "648", "649", "6011"];
  var maesPrefixes = ["5018", "5020", "5038", "6304"];
  var visaLengths = [13, 16, 19];
  var discLengths = [16, 19];
  var maesLengths = [12, 13, 14, 15, 16, 17, 18, 19];

  // var testPrefix = function(element) {
  // 	return element === prefix;
  // };

  var testPrefix = function(element) {
  	if (element.length === 2) {
  		return element === prefix01;
  	} else if (element.length === 3) {
  		return element === prefix01 + prefix2;
  	} else {
  		return element === prefix01 + prefix2 + prefix3;
  	}
  };  

  var testLength = function(element) {
  	return element === cardNumber.length;
  };

  if (cardNumber.length === 14 && dcPrefixes.some(testPrefix)) {
 		return "Diner\'s Club";
  } else if (cardNumber.length === 15 && aePrefixes.some(testPrefix)) {
    return "American Express";
  } else if (visaLengths.some(testLength) && prefix01[0] === "4") {
  	return "Visa";
  } else if (cardNumber.length === 16 && mcPrefixes.some(testPrefix)) {
    return "MasterCard";
  } else if (discLengths.some(testLength) && discPrefixes.some(testPrefix)) {
    return "Discover";
  } else if (maesLengths.some(testLength) && maesPrefixes.some(testPrefix)) {
    return "Maestro";
  }
};


// New Idea: Store information in a 'creditCards' object.