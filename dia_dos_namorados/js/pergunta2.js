const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");
const formulario = document.getElementById("formulario");
const botoes = document.getElementById("botoes");

const selectHorario = document.getElementById("horario");

for (let hora = 13; hora <= 23; hora++) {

    const option =
    document.createElement("option");

    option.value =
    `${hora}:00`;

    option.textContent =
    `${hora}:00`;

    selectHorario.appendChild(option);

}

const meiaNoite =
document.createElement("option");

meiaNoite.value = "00:00";
meiaNoite.textContent = "00:00";

selectHorario.appendChild(meiaNoite);

btnSim.addEventListener(
    "click",
    () => {

        botoes.style.display = "none";

        formulario.classList.remove(
            "hidden"
        );

    }
);

function fugir() {

    const largura =
    window.innerWidth -
    btnNao.offsetWidth -
    20;

    const altura =
    window.innerHeight -
    btnNao.offsetHeight -
    20;

    const posX =
    Math.random() * largura;

    const posY =
    Math.random() * altura;

    btnNao.style.position =
    "fixed";

    btnNao.style.left =
    `${posX}px`;

    btnNao.style.top =
    `${posY}px`;

    btnNao.style.zIndex =
    "9999";
}

btnNao.addEventListener(
    "mouseenter",
    fugir
);

btnNao.addEventListener(
    "click",
    (e) => {

        e.preventDefault();

        fugir();

    }
);

btnNao.addEventListener(
    "touchstart",
    (e) => {

        e.preventDefault();

        fugir();

    }
);

formulario.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        const horario =
        document.getElementById(
            "horario"
        ).value;

        const local =
        document.getElementById(
            "local"
        ).value.trim();

        if (!horario) {

            alert(
                "Escolha um horário ❤️"
            );

            return;
        }

        if (!local) {

            alert(
                "Digite o local ❤️"
            );

            return;
        }

        console.log(
            "Horário:",
            horario
        );

        console.log(
            "Local:",
            local
        );

        localStorage.setItem(
            "horarioDate",
            horario
        );

        localStorage.setItem(
            "localDate",
            local
        );

        window.location.href =
        "pergunta3.html";

    }
);