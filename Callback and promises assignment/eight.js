// 8. Get Data from API and Display it on the browser console.
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
// the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
// of posts, and then display them to the browser console.

let link = 'https://jsonplaceholder.typicode.com/posts'

async function retData(){
    let response = await fetch(link)
    let responseJson = await response.json()
    console.log(responseJson);
}


retData()


