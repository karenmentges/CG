
function calculaPrimo(a){

    var vetor = [];
    var vetoraux = [];
    var cont = 0;
    
    for(i=1; i <= a; i++){
        for(u=2; u <= i/2; u++){
            if(i % u == 0){
                cont++;
                break;
            }
        }
        if(cont==0){
            vetor[n] = i;
            n++;
        }
        cont = 0;
    }
    return vetor;
}