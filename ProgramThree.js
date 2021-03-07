
function calculaPrimo(a){

    array = [2,3,5,7,11,13,17];
    cont = 0;
    n = 0;
    vetor[100];
    
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