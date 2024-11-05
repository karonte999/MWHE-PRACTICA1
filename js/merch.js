window.addEventListener("scroll", reveal);

// REVEAL ON SCROLL LIBRARY---------------------

function reveal() {

    console.log("invisible");
  
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}


// AOS-------------------------

AOS.init();




// VENTANA MODAL -------------------------

const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
  backdrop: 'static', // Evita que el modal se cierre al hacer clic fuera
  keyboard: false     // Evita que el modal se cierre con la tecla "Esc"
});

let modalShown = false; // Variable de estado para rastrear si el modal se ha mostrado

window.addEventListener('scroll', () => {
  // Mostrar el modal cuando se haya hecho scroll hacia abajo al menos 200 píxeles
  if (window.scrollY > 200 && !modalShown) {
      myModal.show(); // Muestra el modal
      modalShown = true; // Actualiza la variable de estado
  }
});

// Escucha el evento de cierre del modal
document.getElementById('exampleModal').addEventListener('hidden.bs.modal', () => {
  modalShown = true; // Mantiene la variable en true para no volver a mostrar el modal
});









// GSAP ----------------------------------------

gsap.from(".mymusiccard", { duration: 2, x: 100, opacity: 0 });

