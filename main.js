/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function fizzy(num){
  let result = "";
  if(num % 3 === 0){
      result = result + "Fizz";
  }
  if(num % 5 === 0){
      result = result + "Buzz";
  }
  if(result === ""){
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
