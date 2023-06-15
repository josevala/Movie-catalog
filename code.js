
console.log("Movies:", movies);
console.log("MovieDetails:", movieDetails);

const movieArr = movieDetails.map(eachmovie => {
    let matchMovie = movies.find(movie => movie.title === eachmovie.title && movie.year ===
        parseInt(eachmovie.release_date)) 
        return {...structuredClone(eachmovie), ...structuredClone(matchMovie)}
})

let mybutton = document.getElementById("myBtn");
let slideShow = document.querySelector("#slideShow");
let eachmovie= document.createElement(`div`)
let containerElement = document.querySelector("#container")
let n = []

mybutton.addEventListener('click',function(){
        containerElement.scrollTop = 0;
})
containerElement.onscroll = function(){btnScroll()}
mybutton.style.display= 'none'

function btnScroll(){
if (containerElement.scrollTop > 60 ){
        mybutton.style.display = 'block'
}
else{
        mybutton.style.display = 'none'
}
}


      
let intro = function (slideShow){
        let slide;
        let img

        for(i = 0; i <= 4; i++){
            n.push(Math.floor(Math.random() * 600))
             slide = document.createElement("div")
            slide.classList.add(`slides-${[i]}`)
            img = document.createElement('img')
            img.src=`${movieArr[n[i]].imageUrl}`
            slide.append(img)
            slideShow.append(slide)  
           
}   
          let slide1 = document.querySelector("slides-0");
          let slide2 = document.querySelector("slides-1");
          let slide3 = document.querySelector("slides-2");
          let slide4 = document.querySelector("slides-3");
          let slide5 = document.querySelector("slides-4");

          setInterval(function(){
            
          }, 5000)
           console.log(n);

           
           
        }

intro(slideShow)



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

