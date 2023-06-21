// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.


function manipulateString(string, callback){
    return callback(string)

}

function logString(str){
    let upperVer = str.toUpperCase()
    console.log("The manipulated string is : ", upperVer);
}

string = 'hello, world'
manipulateString(string,logString)
