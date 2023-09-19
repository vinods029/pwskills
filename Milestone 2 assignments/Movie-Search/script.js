
const searchButton = document.getElementById("searchButton")
const mainDiv = document.getElementById("main-div")

searchButton.addEventListener("click",async()=>{

    mainDiv.innerHTML=""

    const movieInput = document.getElementById("input-movie").value;
    movie = movieInput
    api = "c58a43cf"
    url = `http://www.omdbapi.com/?apikey=${api}&s=${movie}`



    try{
        const response = await fetch(url)

        if(response.ok){
           const data = await response.json();
            
           if(data.Response == "True"){

            const movieList = data.Search;

            
            movieList.forEach(movie => {

               const movieDiv = document.createElement("div");
               movieDiv.classList.add("movieDiv")
            
               if(movie.Poster && movie.Poster !=="N/A"){
                const movieImage = document.createElement("img");
                movieImage.src = movie.Poster
                movieDiv.appendChild(movieImage)

               }else {
                const movieImage = document.createElement("img");
                movieImage.classList.add("blank")
                movieImage.src = 'no-photo.png'
                movieDiv.appendChild(movieImage)
                
               }

               const movieTitle = document.createElement("h2")
               movieTitle.innerText = movie.Title

               const watchButton = document.createElement("button")
               watchButton.innerText = "Watch"

               movieDiv.appendChild(movieTitle)
               movieDiv.appendChild(watchButton)

               if(mainDiv){
                mainDiv.appendChild(movieDiv)

               }else{
                console.log("it does not exist");
               }

    
            });
           }else {
            const noResult = "Could not find movie with the keywords provided"
            const notFound = document.createElement('h2')
            notFound.classList.add("not-found")
            notFound.innerText = noResult

            mainDiv.appendChild(notFound)
          


           }
           
        }else{
            console.log("Could not fetch the data");

        } 
    }catch(error){
        console.log(error);
}

    
})

