var menuIcon = document.querySelector("#logo");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container")
var containers = document.querySelector(".list-container")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    containers.classList.toggle("large-list");
}

