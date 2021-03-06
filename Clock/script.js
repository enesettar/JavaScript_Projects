const secondHand=document.querySelector('.hand_second');
const minsHand = document.querySelector('.hand_minute');
const hourHand = document.querySelector('.hand_hour');



function setDate(){
    const now=new Date();

    const seconds=now.getSeconds();
    const secondDegrees=(seconds/60)*360;
    secondHand.style.transform=`rotate(${secondDegrees}deg)`

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


}

setDate();

setInterval(setDate,1000);