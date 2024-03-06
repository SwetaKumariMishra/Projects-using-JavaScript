const movieBox = document.querySelector("#movie-box");

let moviesData;

const getMovies = async (api) => {
  const response = await fetch("./fakeMoviesApi.json");
  moviesData = await response.json();
  moviesData = moviesData.result;
  showMovies();
};

document.getElementById("search").addEventListener("keyup", function (event) {
  const searchInput = event.target.value;
  if (!searchInput) getMovies();
  const searchedMovie = moviesData.filter((item) =>
    item.Title.toLowerCase().includes(searchInput.toLowerCase())
  );
  searchedMovie.length === 0 ? getMovies() : (moviesData = searchedMovie);
  showMovies();
});

document.getElementById("search").addEventListener("click", function (event) {
  getMovies();
});

getMovies();

const showMovies = () => {
  movieBox.innerHTML = "";
  moviesData.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
                <img src="${item.Poster}" alt="" />
                <div class="overlay">
                <div class="title">
                  <h2>${item.Title}</h2>
                  <span>${item.Runtime}</span>
                </div>
                    <h3>Overview:</h3>
                    <p>${item.Overview}</p>
                </div> 
        `;
    movieBox.appendChild(box);
  });
};
