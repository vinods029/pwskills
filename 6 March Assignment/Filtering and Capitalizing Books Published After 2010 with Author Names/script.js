
// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 2012
  },
  {
    title: "1984",
    author: "George Orwell",
    publicationYear: 2009
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 2008
  },
  {
    title: "The Great Gatsby",
    author: "Scott Fitzgerald",
    publicationYear: 2007
  },
  {
    title: "The Lord of the Rings",
    author: "JRR. Tolkien",
    publicationYear: 2020
  },
  {
    title: "The Catcher in the Rye",
    author: "JD Salinger",
    publicationYear: 2023
  }]


 const filterBooks = books.filter(book => book.publicationYear <=2010).map(book=> {
    return {
        title: book.title,
        author:book.author.toUpperCase(),
        publicationYear:book.publicationYear
    }
 })

 console.log(filterBooks);