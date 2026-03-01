let Str: string;
Str = "Hello World";
let reversedWord: string = "";

for(let i:number = Str.length - 1; i >= 0; i--) {
    reversedWord += Str[i];
}

console.log("Reversed string: " + reversedWord);