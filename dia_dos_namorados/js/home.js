const canvas =
document.getElementById("fireworks");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const particles = [];

class Particle{

    constructor(x,y,color){

        this.x = x;
        this.y = y;

        this.color = color;

        this.radius =
        Math.random() * 3 + 2;

        this.speedX =
        (Math.random() - .5) * 8;

        this.speedY =
        (Math.random() - .5) * 8;

        this.alpha = 1;
    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        this.alpha -= 0.015;
    }

    draw(){

        ctx.save();

        ctx.globalAlpha =
        this.alpha;

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
        this.color;

        ctx.fill();

        ctx.restore();
    }

}

function createFirework(){

    const x =
    Math.random() * canvas.width;

    const y =
    Math.random() * canvas.height * .6;

    const colors = [
        "#ff4d9a",
        "#ffd700",
        "#00e5ff",
        "#9d4dff",
        "#ffffff",
        "#ff7b00"
    ];

    for(let i=0;i<80;i++){

        particles.push(

            new Particle(
                x,
                y,
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ]
            )

        );

    }
}

let animationRunning = true;

function animate(){

    ctx.fillStyle =
    "rgba(255,255,255,.15)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(
        (particle,index)=>{

        particle.update();
        particle.draw();

        if(
            particle.alpha <= 0
        ){

            particles.splice(
                index,
                1
            );

        }

    });

    if(animationRunning){

        requestAnimationFrame(
            animate
        );

    }

}

animate();

const fireworkInterval =
setInterval(() => {

    createFirework();

},300);

setTimeout(() => {

    clearInterval(
        fireworkInterval
    );

    animationRunning = false;

    document
    .getElementById("voucher")
    .classList
    .remove("hidden");

    document
    .getElementById("voucher")
    .classList
    .add("show");

},15000);

document
.getElementById("btnQuestionario")
.addEventListener(
    "click",
    () => {

        window.location.href =
        "../pages/pergunta1.html";

    }
);