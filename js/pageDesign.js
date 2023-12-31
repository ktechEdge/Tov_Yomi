
var pageWidth = matchMedia("(max-width: 600px)"),
body = document.getElementsByTagName("body")[0],
manuBtn = document.getElementById("menuBtn"),
    menu = document.getElementById("menu"),
header = document.getElementsByTagName("header")[0],
mainSec = document.getElementsByTagName("main")[0],
footer = document.getElementsByTagName("footer")[0];

manuBtn.addEventListener("click",()=>{
    if (menu.style.display === "block")menu.style.display = "none";
    else menu.style.display = "block";
})

