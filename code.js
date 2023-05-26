
console.log("Movies:", movies);
console.log("MovieDetails:", movieDetails);

const movieArr = movieDetails.map(eachmovie => {
    let matchMovie = movies.find(movie => movie.title === eachmovie.title && movie.year ===
        parseInt(eachmovie.release_date)) 
        return {...structuredClone(eachmovie), ...structuredClone(matchMovie)}
})
console.log("movie Detail:", movieArr)

let eachmovie= document.createElement(`div`)
let containerElement = document.querySelector("#container")
const rendering = function(movieArr){
     containerElement.innerHTML = " ";
       for( let i = 0; i< movieArr.length; i += 1 ){
        let eachmovie= document.createElement(`div`)
        eachmovie.classList.add("movie")
        eachmovie.style.backgroundImage = `url(${movieArr[i].imageUrl})`
        eachmovie.innerHTML  =
         `<div id = "text">
         <div ><h2> ${movieArr[i].title} </h2></div>     
                <div id = "text">
                        <p><strong> Release Date:</strong> ${movieArr[i].release_date} </p>
                        <p><strong> starring:</strong> ${movieArr[i].cast}</p>
                        <p><strong> overview: </strong> ${movieArr[i].overview}</p>
            </div>`
         containerElement.append(eachmovie)
         
         }
         

 }
 rendering(movieArr)
 

 const searchByTitle = document.getElementById("titlesearch")
 searchByTitle.addEventListener("keyup", (e) => {
 let titlesearch = e.target.value
 let filterTitles = movieArr.filter(eachmovie => eachmovie.title.toLowerCase().startsWith(titlesearch.toLowerCase()))
 console.log(titlesearch)
 rendering(filterTitles)
 })

