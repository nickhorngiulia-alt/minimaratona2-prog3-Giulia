function verificar(){
    let palavra1 = document.querySelector("#input1").value.toUpperCase().split("");
    let palavra2 = document.querySelector("#input2").value.toUpperCase().split("");
    let sim = "São anagramas";
    let nao = "Não são anagramas";
    let mensagem = "";
    let contador = palavra1.length;
    if (palavra1.join("") == palavra2.join("")){
        mensagem = nao;
    } else if (palavra1.length !== palavra2.length){
        mensagem = nao;
    } else {
        for (let i = 0; i < palavra1.length; i++){
            let letra = palavra1[i];
            for (let j = 0; j < palavra1.length; j++){
                if (letra == palavra2[j]){
                    contador--;
                    j = 0;
                    break;
                }
            }
        }

        if (contador !== 0){
            mensagem = nao;
        } else {
            mensagem = sim;
        }
    }
document.querySelector("#saida").innerHTML = mensagem;
}
document.querySelector("#executar").addEventListener("click", verificar);