const botoes =
document.querySelectorAll(".comida");

botoes.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            localStorage.setItem(
                "comidaDate",
                botao.innerText
            );

            window.location.href =
            "voucher-final.html";
        }
    );

});