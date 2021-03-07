
function calculaFatorial(a){

    fatorial = 1;

    for(i=0; i<a; i++){
        fatorial *= (a-i);
    }
	
	return fatorial;
} 