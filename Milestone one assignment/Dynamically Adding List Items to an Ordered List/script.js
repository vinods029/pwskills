
Array = ["HTML and Semantics","Starting with CSS","Working Template", "Mobile responsive webpages","Grid and Flex-box in CSS","Projects using HTML & CSS","Version Control and Git","Getting Started with JavaScript","Advance JavaScript",
"Working with DOM","Making Projects using HTML, CSS and JavaScript","Understanding Fundamental of Computer Science","Getting Started with Database","Understanding the Database","Starting with NodeJS and Express",
"Understanding React and its Fundamentals","Understanding Hooks and Routers","Starting and Completing Full Fledge Projects"]


let counter = 0;

function display(){
    const list =document.getElementById("list-item")

    if (counter < Array.length){
        const newItem = document.createElement('li');
        newItem.textContent = Array[counter];
        list.appendChild(newItem)
        counter++; 
    }else{
        alert("All item have been added")
    }
}