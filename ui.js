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

// for clear input values after adding
UI.prototype.clearInputs = function(input1, input2, input3){
    input1.value = "";
    input2.value = "";
    input3.value = "";
}

UI.prototype.showAlert = function(message, type){
    const addForm = document.querySelector(".card-body"); // get first card-body element
    console.log(addForm);
    // create alert message
    const div = document.createElement("div");
    div.className = `alert alert-${type}`
    div.textContent = message;

    // add to UI
    addForm.appendChild(div);

    setTimeout(function(){
        div.remove();
    }, 1500);
}