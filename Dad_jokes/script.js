const jokeEl=document.querySelector("#joke");
const get_joke=document.querySelector("#get_joke");

get_joke.addEventListener("click",generateJoke);

generateJoke()
async function generateJoke(){
    //call the API
    const jokeRes=await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    });

    const joke = await jokeRes.json();

    
    //set new joke
    jokeEl.innerHTML=joke.joke;
    

    
}