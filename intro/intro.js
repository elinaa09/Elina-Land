const bgMusic = new Audio("../sounds/bg.mp3");
bgMusic.loop = true;

const clickSound = new Audio("../sounds/click.mp3");


const frames = [
    "../assets/wave1.png",
    "../assets/wave2.png"
];

frames.forEach(function (path) {
    const img = new Image();
    img.src = path;
});

const wave = document.getElementById("wave");
let current = 0;

setInterval(function () {
    current = (current + 1) % frames.length;
    wave.src = frames[current];
},420);

document.addEventListener("click", function () {
    bgMusic.play();
}, { once: true });
 
