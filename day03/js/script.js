/*////
///// Notes //////

var myName = "Dann Garnica";

console.log(myName);

//.length [Find the length of the given string]

console.log(myName.length);

//.charAt() [Find the character at index]

console.log(myName.charAt(10));

//.indexOf() [Find the index of the FIRST given character found in string]

console.log(myName.indexOf('c'));
console.log(myName.indexOf('D'));

//.lastIndexOf() [Find the index of the LAST given character found in string]

console.log(myName.lastIndexOf('n'));

//multiple instances

//.concat() ['tack on' new words to string]

console.log(myName.concat(' woohoo'));

//.substring() [return a string within a string starting at index, end before 2nd given number (start, end)]

console.log(myName.substring(0, 6));

//.substr() [return string within string by given number (start, amount)]

console.log(myName.substr(0, 3));
console.log(myName.substr(5, 2));
console.log(myName.substr(2));

// //.toUpperCase() [changes string to upper case]
console.log(myName.toUpperCase());

//.toLowerCase() [changes string to lower case]

console.log(myName.toLowerCase());

// //.trim() [remove characters]

var newUser = "   yoda   ";

console.log(newUser);
console.log(newUser.trim());
//////
//////*/

// Array - identified by []. Based on zero index.

var sodas = ['Pepsi', 'Coke', 'Mountain Dew'];

// console.log(sodas);
// console.log(Array.isArray(sodas));

var colors = ['Red', 'Orange', 'Purple'];

// .push() [add item to end of array]

var arrLength = colors.push('Green');

// console.log("the new array is ", colors);
// console.log("the array length is ", arrLength);

//.unshift() [add item to beginning of array]

arrLength = colors.unshift('Pink');
// console.log("the new array length is now ", arrLength);
// console.log("the new array is ", colors);

//.pop() [remove and return last item from array]

var item = colors.pop();
// console.log("Item is ", item);
// console.log("The new array length is ", colors.length);

//.shift() [remove and return first item from array]

item = colors.shift();
// console.log("Item is ", item);
// console.log("The new array is ", colors);

arrLength = colors.length;
// console.log("The new array length is ", arrLength);

//.splice() [add/remove particular items(s) starting at X, removing Y item(s), modifies original]

var removeItem = colors.splice(1, 2);
// console.log(colors);
// console.log(removeItem);

var addItems = colors.splice(2, 0, 'Green', 'Blue');
// console.log(colors);

var newColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// newColors = newColors.splice(newColors.indexOf('green'), 1, 'indigo');
// console.log(newColors);

//.slice() [grab a copy of a portion of an array. Does NOT modify the original array]

var moreColors = newColors.slice();

//.reverse() [reverses the order of the items within the array. Will affect original array.]

var revColors = newColors.slice().reverse();

//.sort() [sorts the array]

var names = ['Matt', 'Dann', 'macy', 'donnie']
names.sort();
console.log(names);

// Bubble Sorting Example (low to high numerical)

var points = [4, 2, 5, 1, 3];
points.sort(function(a, b){
  return a - b;
});

console.log(points);

// for() loop
/*
for(var i = 0; i < newColors.length; i++) {
  console.log('My favorite color is ', newColors[i]);
}
*/

//.map() [Name the element (e), and/or its index (i)]

var modColors = newColors.map(function(e, i){
  // console.log(e);
  // console.log(i);
  console.log('my favorite color is', e);
});

console.log(modColors);

var modPoints = points.map(function(e){
  return e * 2;
});

console.log(points);
console.log(modPoints);
