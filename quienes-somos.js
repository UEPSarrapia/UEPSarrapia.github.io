/* VARIABLES */
const btnCierra = document.querySelector("#btn-cierra");
const btnRetrocede = document.querySelector("#btn-retrocede");
const btnAdelanta = document.querySelector("#btn-adelanta");
const imagenes = document.querySelectorAll(".img-container img");
const lightbox = document.querySelector("#contenedor-ppal-img");
const imagenActiva = document.querySelector("#img-activa");
let indiceImagen = 0;

/*Abrir Lightbox*/
const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = "flex";
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};
imagenes.forEach((imagen) => {
  imagen.addEventListener("click", abreLightbox);
});

/*Cerrar lightbox*/
btnCierra.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* Adelantar imagen */
const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
};
btnAdelanta.addEventListener("click", adelantaImagen);

/* Retroceder imagen */
const retrocedeImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
};
btnRetrocede.addEventListener("click", retrocedeImagen);
