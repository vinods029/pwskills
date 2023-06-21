// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.


let arr = [ 1 , 5 , 6, 7 ,9]


function doit(arr, callback){
    return callback(arr);
}

function double(arr){
    let newarray =[]

    for (let i =0 ; i < arr.length ; i++){
                newarray.push(arr[i]+arr[i])
            }
    return newarray

}

let result = doit(arr, double)
console.log(result);
