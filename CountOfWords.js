let = "Hello Ramu Hello Ramu Hello Ramu Hello Ramu Ramu rey rev is"
let words = let.split(" ");



let count = {};

for(let i=0; i<words.length; i++){
    let word = words[i];
    if(count[word]){
        count[word]++;
    } else {
        count[word] = 1;
    }   
    
}

console.log(count);