function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

async function getData() {
    const apiKey = "5c68707b"; 
    const movieTitle = document.getElementById("movieSearch").value;
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        if (json.Response === "True") {
            displayData(json.Search);
        } else {
            document.getElementById("results").innerHTML = `<p>Movie not found!</p>`;
        }
    } catch (error) {
        console.error(error.message);
        document.getElementById("results").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayData(movies) {
    const result = document.getElementById("results");
    result.innerHTML = ""; 

    movies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.innerHTML = `
            <h2>${movie.Title} (${movie.Year})</h2>
            <p><strong>Type:</strong> ${movie.Type}</p>
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}" alt="Poster">
            <button class="favBtn">Add to Favorites</button>
        `;
        result.appendChild(movieDiv);
        movieDiv.querySelector(".favBtn").addEventListener("click", () => addToFavorites(movie));
    });
}

document.querySelector("#search-button").addEventListener("click", getData);

function addToFavorites(movie) {
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const isFavorite = favoriteMovies.some(favMovie => favMovie.imdbID === movie.imdbID);

    if (!isFavorite) {
        favoriteMovies.push(movie);
        localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));

        console.log(`Added ${movie.Title} to favorites!`);
    } else {
        console.log(`${movie.Title} is already in favorites.`);
    }
}
