let biblioteca = [];

function agregarLibro() {
    let tituloLibro = document.getElementById("nuevoLibro").value;
    let nombreAutor = document.getElementById("nuevoAutor").value;

    if (tituloLibro === "" || nombreAutor === "") {
        console.error("Por favor, introduce un título y autor");
        return;
    }

    let nuevoLibro = {
        titulo: tituloLibro,
        autor: nombreAutor
    };

    biblioteca.push(nuevoLibro);
    mostrarBiblioteca();
    clearInputFields();
    saveBibliotecaToLocalStorage();

}

function mostrarBiblioteca() {
    let listaDeLibros = document.getElementById("listaDeLibros");
    listaDeLibros.innerHTML = "";

biblioteca.forEach(function(libro) {
    let itemDeLista = document.createElement("li");
    itemDeLista.textContent = `${libro.titulo} de ${libro.autor}`;
    listaDeLibros.appendChild(itemDeLista);
});
}

function clearInputFields() {
    document.getElementById("nuevoLibro").value = "";
    document.getElementById("nuevoAutor").value = "";
}

function saveBibliotecaToLocalStorage() {
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
}

let bibliotecaAlmacenada = localStorage.getItem("biblioteca");
if (bibliotecaAlmacenada) {
    biblioteca = JSON.parse(bibliotecaAlmacenada);
    mostrarBiblioteca();
}