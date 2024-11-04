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





//REVEAL ON SCROLL

// ScrollReveal().reveal(".grid-wrapper > div", {
//     delay: 200,
//     distance: "50px",
//     interval: 100,
//     origin: "bottom",
//     scale: 0.9,
// });

