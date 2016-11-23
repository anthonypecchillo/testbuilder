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
  var prefix = cardNumber[0] + cardNumber[1];
  var dcPrefixes = ["38", "39"];
  var aePrefixes = ["34", "37"];
  var mcPrefixes = ["51", "52", "53", "54", "55"];
  var visaLengths = [13, 16, 19];

  var testPrefix = function(element) {
  	return element === prefix;
  };

  var testVisaLength = function(element) {
  	return element === cardNumber.length;
  };

  if (cardNumber.length === 14 && dcPrefixes.some(testPrefix)) {
 		return "Diner's Club";
  } else if (cardNumber.length === 15 && aePrefixes.some(testPrefix)) {
    return "American Express";
  } else if (visaLengths.some(testVisaLength) && prefix[0] === "4") {
  	return "Visa";
  } else if (cardNumber.length === 16 && mcPrefixes.some(testPrefix)) {
    return "Mastercard";
  }
};