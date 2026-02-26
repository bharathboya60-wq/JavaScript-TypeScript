let numbers = [3, 5, 7, 2, 8, 1, 33,47, 890, -56, 3456 ];

let largest = numbers[0];
let smallest = numbers[0];

for(let i=0 ;i<numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }

    if(numbers[i] < smallest){
        smallest = numbers[i];
    }
}

console.log("Largest number: " + largest);
console.log("Smallest number: " + smallest);

