const colors=document.querySelectorAll(".colors div");
const shoeImage=document.querySelector("img");
const submit= document.querySelector(".submit");


colors.forEach((item)=>{
    item.style.background=item.getAttribute("data-color");
    item.addEventListener("click",(e)=>{
        colors.forEach((itm)=>{
            itm.style.border="none"
        });
        e.target.style.border="4px solid black"
        shoeImage.src=`images/${e.target.getAttribute("data-color")}.jpg`;
        submit.style.background=e.target.getAttribute("data-color");
    });
});