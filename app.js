let api="https://www.omdbapi.com/?apikey=514a8616&t=";
let poster=document.querySelector(".poster");
let movieName=document.querySelector(".movieName");
let description=document.querySelector(".description");
let actor=document.querySelector("#actors");
let director=document.querySelector("#directors");
let award=document.querySelector("#awards");
let collection=document.querySelector("#collections");
let rating=document.querySelector("#ratings");
let language=document.querySelector("#languages");
let genre=document.querySelector("#genre");
let error=document.querySelector(".error");
let container=document.querySelector("#container");
container.classList.add("hidden");
let suggestion=document.querySelector(".suggestion");
function searchMovie()
{
   let movieInput=document.querySelector("#movieName");
   let query=api+movieInput.value;
   error.innerText="";
   fetch(query).then((data)=>{
    return data.json();
   }).then((data)=>{
    if(data.Error ==='Movie not found!')
      {
        container.classList.add("hidden");
        error.innerText="Movie Not Found!";
      }
      else
      {
    container.classList.remove("hidden");
    movieName.innerText=data.Title;
    genre.innerText=data.Genre;
    poster.src=data.Poster;
    description.innerText=data.Plot;
    actor.innerText=data.Actors;
    director.innerText=data.Director;
    award.innerText=data.Awards;
    collection.innerText=data.BoxOffice;
    rating.innerText=data.imdbRating;
    language.innerText=data.Language;
    if(data.imdbRating>7)
      {
        suggestion.innerText="Worth Watching";
        suggestion.classList.remove("red","orange");
        suggestion.classList.add("green");
      }
      else if(data.imdbRating >6 && data.imdbRating< 7)
        {
          suggestion.innerText="can watch";
          suggestion.classList.remove("red","green");
          suggestion.classList.add("orange");
        }
        else{
          suggestion.innerText="Time waste";
          suggestion.classList.remove("green","orange");
          suggestion.classList.add("red");
        }
      }
  })
}


