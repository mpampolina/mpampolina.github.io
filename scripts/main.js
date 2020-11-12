const navButton = document.getElementById("nav-button")
const nav = document.getElementById("menu")
navButton.addEventListener("click", navDrawer)
window.addEventListener("resize", resizeCheck)

function navDrawer(e) {
  console.log("hello")
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

/* Ensure the menu is visible even
after resizing the window */
function resizeCheck(e) {
  if (window.innerWidth > 500) {
    nav.style.display = "block"
  } else {
    nav.style.display = "none"
  }
}
