document.querySelector(".hamburger").addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".nav-links").classList.toggle("active");
});
