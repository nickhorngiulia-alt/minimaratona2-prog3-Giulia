function verificar() {
    let parenteses = document.querySelector("input").value.split("");
    let contador = 0;
    let mensagem = "Válido";

    for (let i = 0; i < parenteses.length; i++) {
        if (parenteses[i] == "(") {
            contador++;
        } else if (parenteses[i] == ")") {
            contador--;
        }
            if (contador < 0) {
            mensagem = "Inválido";
            break;
        }
    }
    if (contador != 0) {
        mensagem = "Inválido";
    }
    document.querySelector("#saida").innerHTML = mensagem;
}
document.querySelector("#executar").addEventListener("click", verificar);