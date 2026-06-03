let food = document.querySelector(".food");

let indian = document.querySelector("#indian");
let Canadian = document.querySelector("#Canadian");
let American = document.querySelector("#American");
let Thai = document.querySelector("#Thai");
let British = document.querySelector("#British");
let Russian = document.querySelector("#Russian");

let recipe;
//fething data from api

const fetchData = async (area) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
  );
  const data = await response.json();
  recipe = data.meals;
  console.log("My recipe = ", recipe);

  showData(recipe);
};

//searchRecipe

const search = () => {
  let input = document.querySelector("#search");

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputVal = input.value;

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`,
      );

      const data = await response.json();
      recipe = data.meals;

      showData(recipe);
    }
  });
};

search();

fetchData("Canadian");

let showData = (recipe) => {
  food.innerHTML = recipe
    .map(
      (meal) => `
    <div style="text-align:center">
      <div>
        <img src="${meal.strMealThumb}" class="img"/>
      </div>
      <h5 style="margin:10px">${meal.strMeal}</h5>
    </div>
    `,
    )
    .join("");
};

Italy.addEventListener("click", () => {
  fetchData("Italy");
});
Canadian.addEventListener("click", () => {
  fetchData("Canadian");
});
Australian.addEventListener("click", () => {
  fetchData("American");
});
Thai.addEventListener("click", () => {
  fetchData("Thai");
});
British.addEventListener("click", () => {
  fetchData("British");
});
Russian.addEventListener("click", () => {
  fetchData("Russian");
});
