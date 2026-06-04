let movies = document.querySelector(".movies");

let Action = document.querySelector("#Action");
let Comedy = document.querySelector("#Comedy");
let Horror = document.querySelector("#Horror");
let SciFi = document.querySelector("#SciFi");

let films;

// Fetching data from API
const fetchData = async (area) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f3c647b2902608947898423358ed44d9&query=${area}`,
  );

  const data = await response.json();

  // Movies array
  films = data.results;

  console.log("My films =", films);

  // Screen pe show karo
  showData(films);
};

const search = () => {
  let input = document.querySelector("#search");

  input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

      let inputVal = input.value;

      fetchData(inputVal);
    }
  });
};

search();






// Default movies load
fetchData("Comedy");


// Show movies on screen
let showData = (films) => {
  movies.innerHTML = films.map(
    (films) => `<div class="movie-card">
  
  <img src ="https://image.tmdb.org/t/p/w500${films.poster_path}"
  class="movie-img"/>
  <h5 class = "movie-title">
  ${films.original_title}
  </h5>
  <p class = "movie-rating">
  ${films.vote_average}
  </p>
   <p class="movie-date">
        ${films.release_date}
        </p>

      </div>
  
  
  
  `
)
.join("");
};

Action.addEventListener("click", () => {
  fetchData("Action");
});
Comedy.addEventListener("click", () => {
  fetchData("Comedy");
});
Horror.addEventListener("click", () => {
  fetchData("Horror");
});
SciFi.addEventListener("click", () => {
  fetchData("SciFi");
});