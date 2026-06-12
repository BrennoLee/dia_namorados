const mensagem =
document.getElementById("mensagem");

const canvas =
document.getElementById("fireworks");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

window.addEventListener(
    "resize",
    () => {

        canvas.width =
        window.innerWidth;

        canvas.height =
        window.innerHeight;
    }
);

const particles = [];

class Particle{

    constructor(x,y,color){

        this.x = x;
        this.y = y;

        this.color = color;

        this.radius =
        Math.random()*3+2;

        this.speedX =
        (Math.random()-.5)*8;

        this.speedY =
        (Math.random()-.5)*8;

        this.alpha = 1;
    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        this.alpha -= .02;
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
            Math.PI*2
        );

        ctx.fillStyle =
        this.color;

        ctx.fill();

        ctx.restore();
    }
}

function criarFogos(){

    const colors = [
        "#ff4d9a",
        "#ffd700",
        "#00e5ff",
        "#ffffff",
        "#9d4dff"
    ];

    for(let j=0;j<8;j++){

        const x =
        Math.random()*canvas.width;

        const y =
        Math.random()*canvas.height*.6;

        for(let i=0;i<70;i++){

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

    animate();

    setTimeout(()=>{

        window.location.href =
        "pergunta2.html";

    },3000);

}

function animate(){

    ctx.fillStyle =
    "rgba(255,255,255,.1)";

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

    if(
        particles.length > 0
    ){

        requestAnimationFrame(
            animate
        );

    }
}

document
.querySelectorAll(".errada")
.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            mensagem.style.color =
            "#ff2d55";

            mensagem.innerText =
            "Ops! Essa não é a resposta correta. Tente novamente ❤️";
        }
    );

});

document
.querySelector(".correta")
.addEventListener(
    "click",
    () => {

        mensagem.style.color =
        "green";

        mensagem.innerText =
        "Parabéns! Resposta correta ❤️";

        criarFogos();
    }
);