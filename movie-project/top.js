async function getMovieDetails(imdbID) {
    const apiKey = "5c68707b";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const movieDetails = await response.json();
        return movieDetails;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

async function getTopRatedMovies() {
    const apiKey = "5c68707b";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=top&type=movie&r=json`;

    const loadingElement = document.getElementById("loading");
    loadingElement.style.display = "block"; 

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        if (json.Response === "True") {
            const filteredMovies = [];
            for (const movie of json.Search) {
                const movieDetails = await getMovieDetails(movie.imdbID);
                if (movieDetails && parseFloat(movieDetails.imdbRating) >= 4.0) {
                    filteredMovies.push(movieDetails);
                }
            }
            displayTopRatedMovies(filteredMovies);
        } else {
            document.getElementById("top-movies").innerHTML = `<p>No top rated movies found!</p>`;
        }
    } catch (error) {
        console.error(error.message);
        document.getElementById("top-movies").innerHTML = `<p>Error: ${error.message}</p>`;
    } finally {
        loadingElement.style.display = "none"; 
    }
}

function displayTopRatedMovies(movies) {
    const topMoviesSection = document.getElementById("top-movies");

    movies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie";
        movieDiv.innerHTML = `
            <h2>${movie.Title} (${movie.Year})</h2>
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}" alt="Poster">
        `;
        topMoviesSection.appendChild(movieDiv);
    });
}

document.addEventListener("DOMContentLoaded", getTopRatedMovies);
