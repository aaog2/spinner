// UI
const spinimage = document.getElementById("spin-image");
const spinbtn = document.getElementById("spin-btn");
const messagebox = document.getElementById("message-box");
const color = document.getElementById("color");


function spinwheel(){
    // console.log("hey");

    const randomnum = (Math.round(Math.random()*10)*100)+360;
    console.log(randomnum);

    spinimage.className = "spin";
    spinimage.style.transform = `rotate(${randomnum}deg)`;
    spinimage.animate([
        {transform : 'rotate(0deg)'},
        {transform: `rotate(${randomnum}deg)`}
    ],{
        duration:5000,
        iterations:1
    });
    spinimage.style.animationTimingFunction = 'ease-in';

    switch (randomnum){
        case 360 :
            color.innerText = "Purple";
            break;
        case 460:
            color.innerText = "Orange";
            break;
        case 560 :
            color.innerText = "Black";
            break
        case 660 :
            color.innerText = "Blue";
            break;
        case 760 :
            color.innerText = "Red";
            break;
        case 860 :
            color.innerText = "Yellow";
            break;
        case 960 :
            color.innerText = "Green";
            break;
        case 1060 :
            color.innerText = "Purple";
            break;
        case 1160 :
            color.innerText = "Orange";
            break;
        case 1260 :
            color.innerText = "Black";
            break;
        case 1360 :
            color.innerText = "Skyblue";
            break;
        default :
            color.innerText = "Undefined";

    }

}

function messageshow(){
    messagebox.style.display = "flex";
}

function messagehide(){
    messagebox.style.display = "none";
}

// Event Listener
spinbtn.addEventListener('click',spinwheel);
spinbtn.addEventListener('click',function (){
    setTimeout(messageshow,5500);
    setTimeout(messagehide,10000);
});