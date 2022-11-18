/**
 * converts from celcius to fahrenheit
 * @params {number} celcius - celcius value
 * @returns {number} - fahrenheit value
 */
function toFahrenheit(celcius) {
  //const toFahrenheit = celcius => celcius * 9/5 + 32;
  return celcius * (9 / 5) + 32;
}

/**
 * converts from fahrenheit to celcius
 * @params {number} fahrenheit - fahrenheit value
 * @returns {number} celcius value
 */
function toCelcius(fahrenheit) {
  //const toCelcius = fahrenheit => (fahrenheit - 32) * 5/9;

  const celcius = ((fahrenheit - 32) * 5) / 9;

  return celcius;
}

/**
 * adds the first character of the string
 * as a first and last character to the same string
 * @param {string} str - string to operate on
 * @returns {string} - updated string
 */
function addFrontBack(str) {
  const first = str[0];
  //console.log(first);
  console.log(first + str + first);
  return `${first}${str}${first}`;
}

/**
 * removes the character at position i
 * from the string
 * throw an error if i is outside of the bounds of the string
 * @param {string} str - string to operate
 * @param {number} i - position to remove
 * @throws {Error} - error message
 * @returns {string} - updated string //('w3resource', 5)
 */
function removeChar(str, i) {
  if (i > str.length || i < 0) {
    throw new Error("out of bound");
  }

  return str.slice(0, i) + str.slice(i + 1);
}

//const str = "w3resource", i=5;

/**
 * check if a given number is between range 40-60
 * @param {number} num - number to check
 * @returns {boolean} - true if inside the range, else false
 */
function checkInRange(num) {
  // return (num >= 40 && num <= 60);

  if (num >= 40 && num <= 60) {
    return true;
  } else {
    return false;
  }
}

/**
 * find the biggest number inside range 40-60
 * @param {number} num1 - first number
 * @param {number} num2 - second number
 * @returns {number|string} - biggest one or 'not in range' message
 */
function biggestinRange(num1, num2) {
  // if (num1 > 40 || (num2 > 40 && num1 < 60) || num2 < 60) {
  if (checkInRange(num1) && checkInRange(num2)) {
    // return Math.max(num1, num2);
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return "not in range";
    }
  }
}

/**
 * converts the first number of characters to lowercase
 * in a given string
 * @param {string} str - string to operate on
 * @param {number} num - how many characters to make lowercase
 * @returns {string} - updated string
 */
function firstnCharToLower(str, num) {
  // return str.charAt(0).toLowerCase() + str.substring(num).toLowerCase(num);
  return str.substring(0, num).toLowerCase() + str.substring(num);
}

/**
 * Makes the first character uppercase of a given string 
 * @param {string} word 
 * @returns {string}
 */
function wordToUppercase(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

/**
 * converts every first character of every word in a given string to uppercase
 * @param {string} str - string to operate on
 * @returns {string} - updated string
 */
function capFirstLetters(str) {
  const words = str.split(" ");
  const result = words.map(wordToUppercase);
  //let result = "";
  //for (let i = 0; i < words.length; i++) {
    //words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    //const word = words[i];
    //result += word.charAt(0).toUpperCase() + word.substring(1) + " ";
  //}
  return result.join(" ");
}

console.log(toFahrenheit(30));
console.log(toCelcius(86));
console.log(addFrontBack("Swift"));
console.log(removeChar("w3resource", 5));
console.log(checkInRange("70"));
console.log(biggestinRange(40, 59));
console.log(firstnCharToLower("PYTHon", 3));
console.log(capFirstLetters("the quick brown fox"));
