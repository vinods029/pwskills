
let input = "Aurelia" ;

let count = 0;

for (let i=0; i < input.length; i++){
    if (input[i] === "a" || input[i] === "A" || input[i] === "e" || input[i] === "E" || input[i] === "i" || input[i] === "I" || input[i] === "o" || input[i] === "O" || input[i] === "u" || input[i] === "U" )
    count = count +1;
   
}

console.log(count);



