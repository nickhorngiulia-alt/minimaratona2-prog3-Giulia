function solucao(){
    let texto = document.querySelector("#input").value;
    let vetor = [];
    let contador = 1;
    for (let i = 0; i < texto.length; i++){
        let j = i + 1;
        if (texto[i] == texto[j]){
            contador++;
        } else if (contador == 1){
            vetor.push(texto[i]);
        } else {
            vetor.push(texto[i] + contador);
        }
    }
document.querySelector("#saida").innerHTML = vetor.join();
}
document.querySelector("#executar").addEventListener("click", solucao);
