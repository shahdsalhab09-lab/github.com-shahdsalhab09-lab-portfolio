
// Welcome message in the browser console
console.log("Welcome to Shahd Salhab's Portfolio!");

// Highlight the current navigation page
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")) {
    link.style.fontWeight = "bold";
    link.style.color = "#526da8";
  }
});
