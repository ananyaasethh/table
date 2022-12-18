console.log("his is working");

document.getElementById("menu").addEventListener("click",openMenu);

function openMenu(){
     
    document.getElementById("drop_down").classList.toggle("active");
}