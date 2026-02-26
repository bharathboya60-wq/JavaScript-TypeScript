var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for(var i = 0; i < Days.length; i++) {
    Days[i] = Days[i].substring(0, 3);
}

console.log(Days);

for(let day of Days){
    console.log(day);
}