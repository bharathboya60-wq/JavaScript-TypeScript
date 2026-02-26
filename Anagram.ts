let word1 = "listen";
let word2 = "silent345";

word1 = word1.toLowerCase().split("").sort().join("");
word2 = word2.toLowerCase().split("").sort().join("");

if(word1==word2) {
    console.log("The words are anagrams.");
} else {
    console.log("The words are not anagrams.");
}