// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.


function bookKeep(obj , callback){
    let newList = []
    obj.map((element)=>{
        newList.push(element.title)
    })
    callback(newList)
}


function print(list){
    console.log(list.sort());

}


const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925
    }
  ];
  

bookKeep(books,print)


//shorter version of the code

// const bookKeep = (obj, callback) => {
//     const newList = obj.map(element => element.title);
//     callback(newList);
//   };
  
//   const print = list => {
//     console.log(list.sort());
//   };
  