/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let hobbies = ["swimming", "cooking", "eating"];
for (i=0; i<hobbies.length; i++){
     console.log (`${i+1}. ${hobbies[i]}`);
}
console.log (`I have ${hobbies.length} hobbies.`);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
let colors = ["green", "blue", "teal green", "teal blue"];
let tealCount = 0;
for (let colorsItems of colors){
     if (colorsItems.includes('teal')){
          tealCount += 1;
     }
}
console.log (`Colors include ${colors}`);
console.log(`There are ${tealCount} colors include "teal".`);


// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */
let numbersArray = [1, 3, 4, 6, 2, 8, 9];
let oddNumbers = [];
let evenNumbers = [];
for (let numbersItems of numbersArray){
     if (numbersItems % 2 === 0){
          evenNumbers.push(numbersItems);
     }
     else {
          oddNumbers.push(numbersItems);
     }
}
console.log(`Nubers are ${numbersArray}`);
console.log(`Odd numbers are ${oddNumbers}`);
console.log(`Even numbers are ${evenNumbers}`);

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */
let booleanArray = [true, false, false, true, false, false];
let oppositeArray = [];
for (let booleanItems of booleanArray){
     if (booleanItems === true){
          oppositeArray.push (false);
     }
     else {
          oppositeArray.push (true);
     }
}
console.log (`The original array is: ${booleanArray}`);
console.log (`The false array is: ${oppositeArray}`);

// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */
let zerosIncludedArray = [3, 0, 2, 8, 0, 0, 0];
console.log (`Before loop, the array is ${zerosIncludedArray}`);
for (let i=zerosIncludedArray.length-1; i>=0; i--) {
     if (zerosIncludedArray[i] === 0){
          zerosIncludedArray.pop();
     }
     else {
          break;
     }
}
console.log(`After loop, the array is ${zerosIncludedArray}`);

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */
let largishArray = [2, 2, -3, 7, 4, 1, 7, 12, 8];
let lowest = largishArray[0];
let highest = largishArray[0];
for (let largishArrayItems of largishArray){
     if (lowest >= largishArrayItems){
          lowest = largishArrayItems;
     }
     if (highest <= largishArrayItems){
          highest = largishArrayItems;
     }
}
console.log (`The lowest number is ${lowest}`);
console.log (`The highest number is ${highest}`);

// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
