function processArray(numbers) {

  const result = [];
    
    
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (number % 2 === 0) {
      
        result.push(number **2);
      } else {
     
        result.push(number ** 3);
      }
    }
    
    
    return result;
 }
  
  var my_array = [1, 2, 3, 4, 5];
    var my_array1 = processArray(my_array);
    console.log(my_array1);
 
  




function formatArrayStrings(strings, mynumbers) {
  for (let i = 0; i < strings.length; i++) {
      if (mynumbers[i] % 2 === 0) {
          
          strings[i] = strings[i].toUpperCase();
      } else {
         
          strings[i] = strings[i].toLowerCase();
      }
  }
  return strings;
}

const test = ["enoch", "kuuku", "christian", "ama", "beatrice", "elvis"];
const testt = [1, 2, 3, 4, 5, 6];

// Create modifiedNames correctly
const modifiedNames = formatArrayStrings([...test], testt); // Spread test into a new array

// Corrected require.main check
if (require.main === module) { 
console.log(modifiedNames); 
}

// Corrected module export
module.exports = { 
test, 
modifiedNames 
};