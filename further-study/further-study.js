const Queue = require("../queue");
const Stack = require("../stack");

function stringReversal(str) {
  let stack = new Stack
  let reversed = '';
  for (let letter of str) {
    stack.push(letter)
  }
  for (let letter of str) {
    reversed = reversed.concat(stack.pop(letter))
  }
  return reversed;

}

function balancedBrackets(str) {
  const stack = new Stack;
  const openBrackets = '({[';
  const closeBrackets = ')}]';

  for (let char of str){
    if (openBrackets.includes(char)){
      stack.push(char)
    } else if (closeBrackets.includes(char)){
      let top
      try{
         top = stack.pop();

      } catch (Error){
        return false;
      }
      if (!top || openBrackets.indexOf(top) !== closeBrackets.indexOf(char)){
        return false;
      }
    }
  }
  return stack.isEmpty();
}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
