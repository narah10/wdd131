// favorite.js

// Function to display favorite movies
function displayFavoriteMovies() {
    const favoriteMoviesSection = document.getElementById("favorite-movies");
    const loadingElement = document.getElementById("loading");

    // Retrieve favorited movies from local storage
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    // Hide loading message
    loadingElement.style.display = "none";

    // Check if there are any favorite movies
    if (favoriteMovies.length === 0) {
        favoriteMoviesSection.innerHTML = `<p>You have not yet added any movies to your favorites!</p>`;
        return;
    }

    // Clear previous content
    favoriteMoviesSection.innerHTML = "";

    // Display each favorite movie
    favoriteMovies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie";
        movieDiv.innerHTML = `
            <h2>${movie.Title} (${movie.Year})</h2>
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}" alt="Poster">
        `;
        favoriteMoviesSection.appendChild(movieDiv);
    });
}

// Call displayFavoriteMovies when the DOM content is loaded
document.addEventListener("DOMContentLoaded", displayFavoriteMovies);
