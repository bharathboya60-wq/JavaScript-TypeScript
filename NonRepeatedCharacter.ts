let Word = "Hello HWorld";
let nonRepeatedChars: string[] = [];

for (let i = 0; i < Word.length; i++) {
    let isRepeated = false;
    for (let j = 0; j < Word.length; j++) {
        if (i !== j && Word[i] === Word[j]) {
            isRepeated = true;
            break;
        }
    }
    if (!isRepeated) {
        console.log("The first non-repeated character is: " + Word[i]);
        break;
    }
}
