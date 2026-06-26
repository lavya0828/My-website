// PSP STORE

console.log("PSP STORE Loaded");

const shopBtn = document.querySelector(".shop");

if(shopBtn){

shopBtn.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(".features").scrollIntoView({

behavior:"smooth"

});

});

}

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.8)";

}else{

header.style.background="rgba(0,0,0,.55)";

}

});
