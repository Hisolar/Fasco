let menuButton = document.getElementById("menuButton")
let menuContainer = document.getElementById("menuContainer")

function showToggle(){
    menuContainer.classList.toggle("show")
}
menuButton.addEventListener("click", showToggle)