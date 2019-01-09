const addForm = document.getElementById("movie-form");
const inputTitle = document.querySelector("#title");
const inputDirector = document.querySelector("#director");
const inputURL = document.querySelector("#url");

// starting UI object
const ui = new UI();

// load all events
eventListeners();

function eventListeners(){
    addForm.addEventListener("submit", addMovie);
}

// for adding new movie
function addMovie(e){
    const title = inputTitle.value;
    const director = inputDirector.value;
    const url = inputURL.value;

    if(title === "" || director === "" || url === ""){

    }
    else{
        const newMovie = new Movie(title, director, url);
        // for adding movie to UI
        ui.addMovieToUI(newMovie);
    }

    e.preventDefault();
}