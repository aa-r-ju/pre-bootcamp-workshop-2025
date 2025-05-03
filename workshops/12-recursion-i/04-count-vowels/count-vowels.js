// YOUR CODE BELOW
function countVowels(str) {
  if (str.length === 0) return 0;

  const vowels = "aeiouAEIOU";
  const firstChar = str[0];
  const isVowel = vowels.includes(firstChar) ? 1 : 0;

  return isVowel + countVowels(str.slice(1));
}
