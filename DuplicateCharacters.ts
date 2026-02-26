let word = "Hello World Bharath";
let duplicateChars: string[] = [];

for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
        if (word[i] === word[j] && !duplicateChars.includes(word[i])) {
            duplicateChars.push(word[i]);
        }   
    }
}

console.log("Duplicate characters in the string: " + duplicateChars.join(", "))