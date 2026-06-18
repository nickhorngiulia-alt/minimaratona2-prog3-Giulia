function verificar(){
    let parenteses = document.querySelector("parenteses").value.split();
    let mensagem = "";
    for (let i = 0; i < parenteses.length; i++){
        let contador = 0;
        if (parenteses[i] == "("){
            contador++;
            for (let j = 1; j < parenteses.length; j++){
                if (parenteses[i] == ")"){
                    contador--;
                    break;
                } else if (parenteses[i] == ")") {
                    mensagem = "Inválido";
                    } else {
                        mensagem = "Válido"; //seguindo o exemplo, vazio = válido;
                    }
            }
        }
    }
}
document.querySelector("#executar").addEventListener("click", verificar);