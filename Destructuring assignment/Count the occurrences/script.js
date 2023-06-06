// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.


const myMap = new Map()
words = "pwskills is pwskills"
wordarray = words.split("")

wordarray.forEach(element => {
    if (myMap.has(element)){
        myMap.set(element, myMap.get(element) + 1)
    }else{
        myMap.set(element, 1)
    }
    
});



console.log(myMap)