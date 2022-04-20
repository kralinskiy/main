
// https://www.codewars.com/kata/5a4e3782880385ba68000018


function balancedNum(number) {
  const numbers = String(number);
  const middle = Math.floor(numbers.length / 2);
  if(numbers.length <= 2 || numbers[0] === numbers[numbers.length - 1] && numbers.length === 3) return "Balanced"; 
  else return "Not Balanced";
 
  const left = numbers.slise(numbers[0], numbers[numbers[middle]-1]);
  const right = numbers.slise(numbers[numbers[middle]-1], numbers[numbers.length - 1]);
    
}
  
