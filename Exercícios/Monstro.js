var scene;      //Mundo Virual
var camera;     //Área de Visualização
var renderer;   //Responsável por renderizar

var elementos = [];

var velocidade = 0.5;

var criaMonstro = function(){
    let puppet = [];

    let green  = new THREE.Color("rgb(22,222,208)");
    let pink   = new THREE.Color("rgb(200,33,81)");
    let purple = new THREE.Color("rgb(148,0,211)");

    let tronco = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 2), new THREE.MeshPhongMaterial({color: 0x008080}));
    puppet["tronco"] = tronco;

    let cabeca = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshPhongMaterial({color: 0xAFEEEE}));
    puppet["cabeca"] = cabeca;
    tronco.add(cabeca);
    cabeca.position.y = tronco.position.y + 6;


    // Lado direito

    // Ombro direito
    let ombroD =  new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshPhongMaterial({color: 0xAFEEEE}));
    puppet["ombroD"] = ombroD;
    tronco.add(ombroD);
    ombroD.position.x = tronco.position.y + 3;
    ombroD.position.y = tronco.position.y + 3;

    let pivotOmbroD = new THREE.Group();
    puppet["pivotOmbroD"] = pivotOmbroD;
    ombroD.add(pivotOmbroD);

    // Braço direito
    let bracoD = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshPhongMaterial({color: 0x08E8DE}));
    puppet["bracoD"] = bracoD;
    pivotOmbroD.add(bracoD);
    bracoD.position.y -= 2.2;

    // Cotovelo direito
    let cotoveloD =  new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshPhongMaterial({color: 0xAFEEEE}));
    puppet["cotoveloD"] = cotoveloD;
    bracoD.add(cotoveloD);
    cotoveloD.position.y = bracoD.position.y;

    let pivotCotoveloD = new THREE.Group();
    puppet["pivotCotoveloD"] = pivotCotoveloD;
    cotoveloD.add(pivotCotoveloD);

    // Antebraço direito
    let antebracoD = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshPhongMaterial({color: 0x08E8DE}));
    puppet["antebracoD"] = antebracoD;
    pivotCotoveloD.add(antebracoD);
    antebracoD.position.y -= 2.2;


    // Coxa direita
    let coxaD = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshPhongMaterial({color: 0x08E8DE}));
    puppet["coxaD"] = coxaD;
    tronco.add(coxaD);
    coxaD.position.x = tronco.position.y + 1.5;
    coxaD.position.y = tronco.position.y - 5;

    // Joelho direito
    let joelhoD =  new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshPhongMaterial({color: 0xAFEEEE}));
    puppet["joelhoD"] = joelhoD;
    coxaD.add(joelhoD);
    joelhoD.position.y = coxaD.position.y + 3;

    let pivotJoelhoD = new THREE.Group();
    puppet["pivotJoelhoD"] = pivotJoelhoD;
    joelhoD.add(pivotJoelhoD);

    //Canela direita
    let canelaD = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshPhongMaterial({color: 0x08E8DE}));
    puppet["canelaD"] = canelaD;
    pivotJoelhoD.add(canelaD);
    canelaD.position.y -= 2.2;


    // Lado esquerdo

    // Ombro esquerdo
    let ombroE =  new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshPhongMaterial({color: 0xAFEEEE}));
    puppet["ombroE"] = ombroE;
    tronco.add(ombroE);
    ombroE.position.x = tronco.position.y - 3;
    ombroE.position.y = tronco.position.y + 3;

    let pivotOmbroE = new THREE.Group();
    puppet["pivotOmbroE"] = pivotOmbroE;
    ombroE.add(pivotOmbroE);

    // Braço esquerdo
    let bracoE = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshPhongMaterial({color: 0x08E8DE}));
    puppet["bracoE"] = bracoE;
    pivotOmbroE.add(bracoE);
    bracoE.position.y -= 2.2;

    // Cotovelo esquerdo
    let cotoveloE =  new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshPhongMaterial({color: 0xAFEEEE}));
    puppet["cotoveloE"] = cotoveloE;
    bracoE.add(cotoveloE);
    cotoveloE.position.y = bracoE.position.y;

    let pivotCotoveloE = new THREE.Group();
    puppet["pivotCotoveloE"] = pivotCotoveloE;
    cotoveloE.add(pivotCotoveloE);

    // Antebraço esquerdo
    let antebracoE = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshPhongMaterial({color: 0x08E8DE}));
    puppet["antebracoE"] = antebracoE;
    pivotCotoveloE.add(antebracoE);
    antebracoE.position.y -= 2.2;


    // Coxa esquerda
    let coxaE = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshPhongMaterial({color: 0x08E8DE}));
    puppet["coxaE"] = coxaE;
    tronco.add(coxaE);
    coxaE.position.x = tronco.position.y - 1.5;
    coxaE.position.y = tronco.position.y - 5;

    // Joelho esquerdo
    let joelhoE =  new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshPhongMaterial({color: 0xAFEEEE}));
    puppet["joelhoE"] = joelhoE;
    coxaE.add(joelhoE);
    joelhoE.position.y = coxaE.position.y + 3;

    let pivotJoelhoE = new THREE.Group();
    puppet["pivotJoelhoE"] = pivotJoelhoE;
    joelhoE.add(pivotJoelhoE);

    //Canela esquerda
    let canelaE = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshPhongMaterial({color: 0x08E8DE}));
    puppet["canelaE"] = canelaE;
    pivotJoelhoE.add(canelaE);
    canelaE.position.y -= 2.2;




    elementos["puppet"] = puppet;
    scene.add(tronco);
}


var init = function(){
    console.log("Teste");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.background = new THREE.Color(0xDCDCDC);

    const color = 0xFFFFFF;
    const intensity = 1;
    const light1 = new THREE.DirectionalLight(color, intensity);
    const light2 = new THREE.DirectionalLight(color, intensity);
    light1.position.set(5, 0, 15);
    light2.position.set(5, -5, 5);
    scene.add(light1);    
    //scene.add(light2);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 40; //Profundidade: (+)Aproximando e (-)Afastando

    criaMonstro();

    animation();

    // Verificar como está o monstro
    document.addEventListener('mousewheel', onMouseWheel);
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mousedown', onMouseClick);
	document.addEventListener('mouseup', onMouseUp);

};


// Verificar como está o monstro
var clicando = false;
var mouserPosAnterior = {
	x:0,
	y:0
}

var onMouseMove = function(e){
	let diferencaMovimento = {
		x: e.offsetX - mouserPosAnterior.x,
		y: e.offsetY - mouserPosAnterior.y
	}

	if (clicando){

		 let angulosQuaternion = new THREE.Quaternion().setFromEuler(
		 	new THREE.Euler (	paraRadianos(diferencaMovimento.y)*0.5,
		 					    paraRadianos(diferencaMovimento.x)*0.5,
		 						0,
		 						'XYZ')
		 );
		 elementos["puppet"]["tronco"].quaternion.multiplyQuaternions(angulosQuaternion, elementos["puppet"]["tronco"].quaternion);
	}
	mouserPosAnterior = {
		x: e.offsetX,
		y: e.offsetY
	}
};

var onMouseClick = function(e){
	clicando = true;
};

var onMouseUp = function(e){
	clicando = false;
};

var onMouseWheel = function (e){
	elementos["puppet"]["tronco"].scale.x+= (e.deltaY > 0)?-0.1:0.1;
	elementos["puppet"]["tronco"].scale.y+= (e.deltaY > 0)?-0.1:0.1;
	elementos["puppet"]["tronco"].scale.z+= (e.deltaY > 0)?-0.1:0.1;
}




var count = 0;
velocidadeOmbroDireitoC = -0.1;
velocidadeOmbroDireitoL = -0.1;
var animation = function (){

    requestAnimationFrame(animation); //Adiciona o método na fila de renderização

    /* Rotacionando o cubo 
    elementos["cubo1"].rotation.x += 0.02;
    elementos["cubo1"].rotation.z += 0.02;

    elementos["cubo2"].rotation.x += 0.02;
    elementos["cubo2"].rotation.z += 0.02; */

    /* Movimentando o cubo
    elementos["cubo1"].position.x += 0.5;
	elementos["cubo2"].position.x -= velocidade;
	if (elementos["cubo2"].position.x < -30){
        velocidade *= -1;
    } */
    
    /*
    if(key_space){ // movimento para frente
        if(elementos["puppet"]["pivotOmbroD"].position.x < -2.83 || elementos["puppet"]["pivotOmbroD"].position.x > 1.3){
            velocidadeOmbroDireitoC *= -1;
        }
        elementos["puppet"]["pivotOmbroD"].position.x += velocidadeOmbroDireitoC;
        console.log(elementos["puppet"]["pivotOmbroD"].position.x);
        
    }
    if(key_r){ // movimento para o lado
        if(elementos["puppet"]["pivotOmbroD"].position.x < 0 || elementos["puppet"]["pivotOmbroD"].position.x > 1.4){
            velocidadeOmbroDireitoL *= -1;
        }
        elementos["puppet"]["pivotOmbroD"].position.z += velocidadeOmbroDireitoL;
        console.log(elementos["puppet"]["pivotOmbroD"].position.x);

    } */

    renderer.render(scene, camera);
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init