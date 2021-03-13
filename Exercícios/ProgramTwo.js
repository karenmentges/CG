
function classificaTriangulo(a,b,c){
	if (a <=0 || b <=0 || c <= 0)
		return 'Nulo';

	if (!(Math.abs(b-c) < a && a < b+c) || 
		!(Math.abs(a-c) < b && a < a+c) ||
		!(Math.abs(a-b) < c && a < a+b))
		return 'Não é um triângulo';

	if (a == b && b == c)
		return 'Equilátero';
        
	if (a == b || b == c || c == a)
		return 'Isósceles';
	
	return 'Escaleno'
} 