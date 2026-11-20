
// Movie list
let movies = [
    {
        title: "Inception",
        genre: "Sci-Fi",
        year: "2010",
        status: "Watched"
    },
    {
        title: "The Batman",
        genre: "Action",
        year: "2022",
        status: "Plan to Watch"
    }
];

// Get saved movies
const savedMovies = localStorage.getItem("movievaultMovies");

if (savedMovies !== null) {
    movies = JSON.parse(savedMovies);
}

// Get the form and table
const movieForm = document.getElementById("movie-form");
const movieList = document.getElementById("movie-list");
const movieCount = document.getElementById("movie-count");
const emptyMessage = document.getElementById("empty-message");

// Show movies in the table
function displayMovies() {

    movieList.textContent = "";

    movieCount.textContent = movies.length;

    if (movies.length === 0) {
        emptyMessage.textContent = "No movies added yet.";
    } else {
        emptyMessage.textContent = "";
    }

    for (let i = 0; i < movies.length; i++) {

        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        const genreCell = document.createElement("td");
        const yearCell = document.createElement("td");
        const statusCell = document.createElement("td");

        titleCell.textContent = movies[i].title;
        genreCell.textContent = movies[i].genre;
        yearCell.textContent = movies[i].year;
        statusCell.textContent = movies[i].status;

        row.appendChild(titleCell);
        row.appendChild(genreCell);
        row.appendChild(yearCell);
        row.appendChild(statusCell);

        movieList.appendChild(row);
    }
}

// Add a new movie
movieForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get the form values
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;
    const status = document.getElementById("status").value;

    // Check the fields
    if (title === "" || genre === "" || year === "" || status === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create a movie
    const movie = {
        title: title,
        genre: genre,
        year: year,
        status: status
    };

    // Add it to the list
    movies[movies.length] = movie;

    // Save movies
    localStorage.setItem("movievaultMovies", JSON.stringify(movies));

    // Update the table
    displayMovies();

    // Clear the form
    document.getElementById("title").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("year").value = "";
    document.getElementById("status").value = "";

});

// Show the movie list
displayMovies();
