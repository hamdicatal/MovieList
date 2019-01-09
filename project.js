const addForm = document.getElementById("movie-form");
const inputTitle = document.querySelector("#title");
const inputDirector = document.querySelector("#director");
const inputURL = document.querySelector("#url");

// starting UI object
const ui = new UI();

// create storage object
const storage = new Storage();

// load all events
eventListeners();

function eventListeners(){
    addForm.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", function(){
        let movies = storage.getMoviesFromStorage();
        ui.loadMoviesToUI(movies);
    });
}

// for adding new movie
function addMovie(e){
    const title = inputTitle.value;
    const director = inputDirector.value;
    const url = inputURL.value;

    if(title === "" || director === "" || url === ""){
        ui.showAlert("Please fill in the required fields...", "danger");
    }
    else{
        const newMovie = new Movie(title, director, url);
        // for adding movie to UI
        ui.addMovieToUI(newMovie);

        // for adding to local storage
        storage.addMovieToStorage(newMovie);

        ui.showAlert("Movie added successfully!", "success");
    }

    // for clear input values after adding
    ui.clearInputs(inputTitle, inputDirector, inputURL);
    e.preventDefault();
}