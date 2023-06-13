// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
// returned function should take another number as an argument and return true if the number is in the array, and
// false otherwise.


function numberChecker(arr){
    
    function other(number){
        if (number in arr ){
            return 'true';
        } else {
            return 'false'
        }
    }
    return other
}


const arr = [1,2,3,4,5,6]
const chekNum = numberChecker(arr);

console.log(chekNum(10));
