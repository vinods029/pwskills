// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.


 url = ["https://jsonplaceholder.typicode.com/todos/1"]

 async function getData(url){
    let response = await fetch(url)
    let jsondat =  await response.json()
    console.log(jsondat);

 }

getData(url)
