// YOUR CODE BELOW
function isPalindrome(str) {
  str = str.toLowerCase();

  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("Kayak"));
console.log(isPalindrome("NEVERODDOREVEN"));
console.log(isPalindrome("Tacocat"));
console.log(isPalindrome("SELFLESS"));
