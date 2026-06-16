function alvo(){
    let vetor = document.querySelector("#vetor").value.split(',');
    let alvo = parseInt(document.querySelector("#alvo").value);
    let mensagem = '';
    for (let i = 0; i <= vetor.length; i++){
        for (let j = i + 1; j < vetor.length; j++){
        let a = parseInt(vetor[i]);
        let b = parseInt(vetor[j]);
            if (a + b == alvo){
                mensagem = `[${i}, ${j}]`
                break;
            }
        }
        if (mensagem !== ''){
            break;
        }
    }
    if (mensagem == ''){
        mensagem = 'Sem solução';
    }
    document.querySelector("#saida").innerHTML = `${mensagem}`;
}
document.querySelector("#executar").addEventListener("click", alvo);