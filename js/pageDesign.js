
var pageWidth = matchMedia("(max-width: 600px)"),
body = document.getElementsByTagName("body")[0],
manuBtn = document.getElementById("menuBtn"),
    menu = document.getElementById("menu"),
header = document.getElementsByTagName("header")[0],
mainSec = document.getElementsByTagName("main")[0],
footer = document.getElementsByTagName("footer")[0];

console.log(manuBtn)
manuBtn.addEventListener("click",()=>{
    console.log(menu.display)
    if (menu.style.display === "block"){
        menu.style.display = "none";

    }
    else{
        menu.style.display = "block";

    }
})
pageWidth.addEventListener("change",()=>{
    console.log(this)
    if (pageWidth.matches){
        manuBtn.style.display = "block";
        menu.style.display ="none";
        menu.style.gridArea = "3/9/8/-1";
        header.style.gridArea = "1/1/3/-1";
        mainSec.style.gridArea = "3/1/8/-1";
        footer.style.gridArea = "8/1/-1/-1";
}else{
        manuBtn.style.display = "none"
        menu.style.display ="block";
        menu.style.gridArea = "1/9/8/-1";
        header.style.gridArea = "1/1/3/9";
        mainSec.style.gridArea = "3/1/8/9";
        footer.style.gridArea = "8/1/-1/-1";
    }
});


