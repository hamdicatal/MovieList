function Storage(){

}

// add new movie to local storage
Storage.prototype.addMovieToStorage = function(newMovie){
    let movies = this.getMoviesFromStorage();
    movies.push(newMovie);
    localStorage.setItem(movies, JSON.stringify(movies));
}

// get movies from local storage
Storage.prototype.getMoviesFromStorage = function(){
    let movies;
    if(localStorage.getItem("movies") === null){
        movies = [];
    }
    else{
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
}