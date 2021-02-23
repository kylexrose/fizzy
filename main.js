/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function fizzy(num){
  let result = ""; //Set up for the return value
  if(num % 3 === 0){
      result = result + "Fizz"; //Adds "Fizz" onto empty string
  }
  if(num % 5 === 0){
      result = result + "Buzz"; //Adds "Buzz" either onto empty string or string containing "Fizz"
  }
  if(result === ""){ //Sets result to num in case the string is empty
    result = num;
  }
  return result; 
}







/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
