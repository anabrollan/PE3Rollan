let biblioteca = [];

function agregarLibro() {
  let tituloLibro = document.getElementById("nuevoLibro").value;
  let nombreAutor = document.getElementById("nuevoAutor").value;

  if (tituloLibro === "" || nombreAutor === "") {
    let errorMessageContainer = document.getElementById("errorMessage");
    errorMessageContainer.textContent = "Por favor, introduce un título y autor";
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



  biblioteca.forEach(libro => {
    let itemDeLista = document.createElement("li");
    let libroSpan = document.createElement("span");
    libroSpan.textContent = libro.titulo + " de " + libro.autor;
    itemDeLista.appendChild(libroSpan);

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {
      eliminarLibro(libro);
    };
    itemDeLista.appendChild(botonEliminar);

    listaDeLibros.appendChild(itemDeLista);
  });
}

function eliminarLibro(libro) {
  let libroIndex = biblioteca.indexOf(libro);

  if (libroIndex !== -1) {
    biblioteca.splice(libroIndex, 1);
    mostrarBiblioteca();
    saveBibliotecaToLocalStorage();
  } 
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
