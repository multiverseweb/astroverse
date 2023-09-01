// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.opacity="1";
  } else {
    mybutton.style.opacity="0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*
window.addEventListener("load", function() {
  var loader = document.getElementById("loader");
  var loaderText = document.getElementById("loader-text");
  var preloader = document.getElementById("preloader");
  // Delay in milliseconds before hiding the preloader (5 seconds in this example)
  var delayInMilliseconds = 900;

  // Hide the preloader after the specified delay
  setTimeout(function() {
    loader.style.display = "none";
    loaderText.style.display = "none";
    preloader.style.display = "none";
    hidden.style.display="initial";
  }, delayInMilliseconds);
   
});
*/
