const iconActive = document.getElementById("icon");

const navigationListMobil = document.querySelector(".navigation-list-mobil");

iconActive.addEventListener("click", () => {
  iconActive.classList.toggle("active");
  navigationListMobil.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    iconActive.classList.remove("active");
    navigationListMobil.classList.remove("active");
  })
);

/* Icon arrow-up--------------------------------------------- */

const scrollToTop = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    scrollToTop.style.display = "inline-block";
  } else {
    scrollToTop.style.display = "none";
  }
});
