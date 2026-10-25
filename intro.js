const bgMusic = new Audio("../sounds/bg.mp3");
bgMusic.loop = true;

const clickSound = new Audio("../sounds/click.mp3");

const character = document.getElementById("character");
const dialogue = document.getElementById("dialogue");

let canvas = document.getElementById("c");
let ctx= canvas.getContext("2d")
canvas.width = 800;
canvas.height = 500;

let wave1 = new Image();
let wave2 = new Image();

wave1.src = assets/wave1.png;
wave2.src = assets/wave2.png;

let waveImage = [wave1, wave2];

function waveLoop() {
    update();
    draw();
    requestAnimationFrame(waveLoop);
}
 
waveLoop();
