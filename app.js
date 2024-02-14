let header=document.querySelector(".header");
let btn=document.querySelector(".menu-icon");

let toggleFunction=()=>{
    header.classList.toggle("active");
}

btn.addEventListener("click",()=>toggleFunction());