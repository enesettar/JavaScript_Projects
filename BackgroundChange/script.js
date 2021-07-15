const body= document.querySelector("body");
const button=document.querySelector("button");
const colors=["black","white","grey","green","yellow","purple"]

button.addEventListener("click",changeBackground);

function changeBackground(){

const randomColorIndex=Math.floor(Math.random()*colors.length);

const selectColor=colors[randomColorIndex];    

body.style.backgroundColor=selectColor;
}