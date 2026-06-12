const usuarioCorreto = "useradmin@master";
const senhaCorreta = "2457";

const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

const MAX_TENTATIVAS = 3;

let tentativas = 0;
let bloqueado = false;

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (bloqueado) {
        return;
    }

    const usuarioDigitado = usuario.value.trim();
    const senhaDigitada = senha.value.trim();

    if (
        usuarioDigitado === usuarioCorreto &&
        senhaDigitada === senhaCorreta
    ) {

        mensagem.style.color = "green";
        mensagem.innerText = "Login realizado com sucesso ❤️";

        setTimeout(() => {
            window.location.href = "./pages/home.html";
        }, 1500);

        return;
    }

    tentativas++;

    mensagem.style.color = "red";
    mensagem.innerText =
        `Login incorreto. Tentativa ${tentativas}/${MAX_TENTATIVAS}`;

    if (tentativas >= MAX_TENTATIVAS) {
        bloquearSistema();
    }
});

function bloquearSistema() {

    bloqueado = true;

    usuario.disabled = true;
    senha.disabled = true;

    document.querySelector("button").disabled = true;

    let tempo = 30;

    mensagem.style.color = "red";

    const timer = setInterval(() => {

        mensagem.innerText =
            `🔒 Muitas tentativas. Aguarde ${tempo}s`;

        tempo--;

        if (tempo < 0) {

            clearInterval(timer);

            tentativas = 0;
            bloqueado = false;

            usuario.disabled = false;
            senha.disabled = false;

            document.querySelector("button").disabled = false;

            usuario.value = "";
            senha.value = "";

            mensagem.style.color = "green";
            mensagem.innerText =
                "❤️ Bloqueio encerrado. Tente novamente!";
        }

    }, 1000);
}

function criarCoracoes(event) {

    const rect = event.target.getBoundingClientRect();

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left =
            rect.left + rect.width / 2 + "px";

        heart.style.top =
            rect.top + rect.height / 2 + "px";

        heart.style.setProperty(
            "--x",
            `${Math.random() * 300 - 150}px`
        );

        heart.style.setProperty(
            "--y",
            `${Math.random() * 300 - 150}px`
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}

usuario.addEventListener("focus", criarCoracoes);
senha.addEventListener("focus", criarCoracoes);