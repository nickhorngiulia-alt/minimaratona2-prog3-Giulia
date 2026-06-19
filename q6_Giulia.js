function solucao(){
    let vetor1 = document.querySelector("#vetor1").value.split(",").map(Number);
    let vetor2 = document.querySelector("#vetor2").value.split(",").map(Number);
    let vetor = [];
    let percorrer = vetor1.length;
    if (percorrer < vetor2.length){
        percorrer = vetor2.length;
    }
    let i = 0;
    let j = 0;
    for (let x = 0; x < percorrer; x++){
        if (vetor1[i] < vetor2[j]){
            vetor.push(vetor1[i]);
            i++;
            //vetor.push(vetor2[j]);
        } else if (vetor1[i] > vetor2[j]){
            vetor.push(vetor2[j]);
            j++
            //vetor.push(vetor1[i]);
        } else {
            vetor.push(vetor1[i]);
            vetor.push(vetor2[j]);
            i++;
            j++
        }
    }
    document.querySelector("#saida").innerHTML = vetor;
}
document.querySelector("#executar").addEventListener("click", solucao);