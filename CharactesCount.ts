let str: string = "Hello World";
var cou: number = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'l') {
        cou++;
    }
}

console.log(cou);