// 7. Multiple requests.
// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
// a to-do task, while the second API provides post details. The function should combine the results from both APIs
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// responses from the respective APIs.

async function link(){
    const response1 = await fetch(url1);
    const todo = (await response1.json()).title

    let response2 = await fetch(url2);
    post = (await response2.json()).body
    

    return {
        todo , post
    }


}

url1 = "https://jsonplaceholder.typicode.com/todos/1"
url2 = "https://jsonplaceholder.typicode.com/posts/1"

link().then (result=>{
    console.log(result)
})
.catch(error=> {
    console.error(error);
})
