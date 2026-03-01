let wordr= "Hello Team Bhan";
let reversedWords: string = "";

let wordsSplit = wordr.split(" ");

for(let k of wordsSplit) {
   let RK =  k.split("").reverse().join("");
    reversedWords += RK + " ";
}

console.log("Reversed each word in the sentence: " + reversedWords.trim());