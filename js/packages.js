// Scroll to top button
let scroll_btn = document.getElementById('scroll_btn');

window.onscroll = function(){scrollFunction()}

function scrollFunction(){
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        scroll_btn.style.display = "block";
    }
    else{
        scroll_btn.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Close the dropdown if the user clicks outside of it
window.onclick = function(event){
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown_one");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// Hidden navbar when scrolling
var prevScroll = window.pageYOffset;
window.onscroll = function() {
  var currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
  document.getElementById("nav_container").style.top = "0";
  document.getElementById("nav_container").style.backdropFilter = "blur(5px)";
  document.getElementById("nav_container").style.backgroundColor = "#00000055";
  }
  else {
  document.getElementById("nav_container").style.top = "-500px";
  }
  prevScroll = currentScroll;
}
