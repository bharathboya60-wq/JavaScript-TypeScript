let Sentence = "Hello Team I am from Java";

let reversedSentence: string = "";

let wordss = Sentence.split(" ");

for (let i = wordss.length - 1; i >= 0; i--) {
    reversedSentence += wordss[i] + " ";
}       

console.log("Reversed sentence: " + reversedSentence.trim());