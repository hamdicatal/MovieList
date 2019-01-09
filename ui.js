function UI(){

}

UI.prototype.addMovieToUI = function(newMovie){
    // get movie list table from UI
    const movieList = document.getElementById("movies");

    movieList.innerHTML += `
        <tr>
            <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
            <td>${newMovie.title}</td>
            <td>${newMovie.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
        </tr>
    `;
}