

console.log(findFirstNonRepeatingCharacter('hello world')); 
function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
}
let str = prompt("Enter a string");
alert(findFirstNonRepeatingCharacter(str));