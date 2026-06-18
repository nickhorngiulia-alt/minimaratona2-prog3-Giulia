function solucao(){
    let texto = document.querySelector("#input").value;
    let vetor = [];
    let contador = 1;
    for (let i = 1; i < texto.length; i++){
        let j = i - 1;
        if (texto[i] == texto[j]){
            contador++;
        } else {
            if (contador == 1){
                vetor.push(texto[j]);
            } else {
                vetor.push(texto[j] + contador);
            }
            contador = 1;
        }
    }
    let ultimoIndice = texto.length - 1;
    if (contador == 1) {
        vetor.push(texto[ultimoIndice]);
    } else {
        vetor.push(texto[ultimoIndice] + contador);
    }
document.querySelector("#saida").innerHTML = vetor.join("");
}
document.querySelector("#executar").addEventListener("click", solucao);
