function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

window.sr = ScrollReveal({
  reset: false,
  duration: 500,
  timing: 'ease-out',
  delay: 500,
  distance: '200px'
});

sr.reveal('.bo', {
  origin: 'right'
}, 100)

sr.reveal('.year', {
  origin: 'bottom'
}, 100)

sr.reveal('.since', {
  origin: 'top'
}, 100)

sr.reveal('.client', {
  origin: 'right'
}, 100)

sr.reveal('.year', {
  origin: 'right'
}, 100)
