let addBtn=document.querySelector("#addToDo");
let tdContainer= document.querySelector("#toDoContainer");
let inputText=document.querySelector("#inputText");
let clear=document.querySelector("#clearToDo")

addBtn.addEventListener("click",add);

function add(){
    let createP=document.createElement("p"); 
    createP.classList.add("paragraph-styling")
    tdContainer.appendChild(createP);
    createP.innerHTML=inputText.value;
    inputText.value=" ";


    createP.addEventListener("click",function(){
        createP.style.textDecoration="line-through"; 
    });

    createP.addEventListener("dblclick",function(){
        tdContainer.removeChild(createP);
    });

    clear.addEventListener("click",function(){
        createP.style.display="none";
    })
};

