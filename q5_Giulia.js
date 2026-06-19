function solucao(){
    let vetor = document.querySelector("#input").value.split(",").map(Number);
    let atual = 1;
    let maior = atual; 
    for (let i = 1; i < vetor.length; i++){
        if (vetor[i] > vetor[i-1]){
            atual++;
        } else {
            atual = 1;
        }
        if (atual > maior) {
            maior = atual;
          }
    }
    document.querySelector("#saida").innerHTML = maior;
}
document.querySelector("#executar").addEventListener("click", solucao)


/*Mantenha dois contadores: atual (comprimento da sequência corrente)
e maior (o maior já visto).
Percorra o vetor comparando cada elemento com o anterior.
Quando o próximo é maior, incremente atual . Senão, reinicie atual
para 1 .
Atualize maior sempre que atual superar maior . */