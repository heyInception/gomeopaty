 // Button to Top
 const scrollBtn = document.querySelector(".btn");
 const btnVisibility = () => {
     if (window.scrollY > 1000) {
         scrollBtn.style.visibility = "visible";
     } else {
         scrollBtn.style.visibility = "hidden";
     }
 };
 document.addEventListener("scroll", () => {
     btnVisibility();
 });
 scrollBtn.addEventListener("click", () => {
     window.scrollTo({
         top: 0,
         behavior: "smooth"
     });
 });

 // Sticky Menu
 window.onscroll = function() {
     mySticky()
 };

 // Get the navbar
 var navbar = document.getElementById("top");

 // Get the offset position of the navbar
 var sticky = navbar.offsetTop;

 // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
 function mySticky() {
     if (window.pageYOffset >= sticky) {
         navbar.classList.add("sticky")
     } else {
         navbar.classList.remove("sticky");
     }
 }
