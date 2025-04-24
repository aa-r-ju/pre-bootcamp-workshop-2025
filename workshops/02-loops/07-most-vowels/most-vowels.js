function mostVowels(sentence) {
  let words = sentence.split(" ");
  let vowels = "aeiouAEIOU";
  let maxVowelCount = 0;
  let wordWithMostVowels = "";

  for (let word of words) {
    // Remove punctuation using regex
    let cleanWord = word.replace(/[^a-zA-Z]/g, "");

    let count = 0;
    for (let char of cleanWord) {
      if (vowels.includes(char)) {
        count++;
      }
    }

    if (count > maxVowelCount) {
      maxVowelCount = count;
      wordWithMostVowels = cleanWord;
    }
  }

  return maxVowelCount > 0 ? wordWithMostVowels : "";
}
