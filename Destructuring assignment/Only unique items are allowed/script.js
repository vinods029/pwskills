// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.


const list = [1,2,3,4,5,1,2,5,6,8,9,6,10,4]

newArray = new Set(list)

console.log(newArray)
// output - Set(9) { 1, 2, 3, 4, 5, 6, 8, 9, 10 }

console.log([...newArray])
// output - [ 1, 2, 3,  4, 5,6, 8, 9, 10]