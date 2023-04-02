// Write your algorithm here

function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
*/
//word === word in reverse
//spell word then reverse it
//if word === palindrome
//return true;
//else return false
/*
  Add written explanation of your solution here
*/
//isPalindrome function to check wheteher word is palindrome
//split word and reverse then return true or false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("madam"));  // true
  console.log(isPalindrome("robot"));  // false
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
