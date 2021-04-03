var scene;      //Mundo Virual
var camera;     //Área de Visualização
var renderer;   //Responsável por renderizar

var elementos = [];

var velocidade = 0.5;

var criaMonstro = function(){
    let puppet = [];

    let tronco = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 2), new THREE.MeshBasicMaterial({color: 0x0000ff}));
    puppet["tronco"] = tronco;

    let cabeca = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({color: 0x0000ff}));
    puppet["cabeca"] = cabeca;
    tronco.add(cabeca);
    cabeca.position.y = tronco.position.y + 6;

    // Braço direito
    let ombroD =  new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0x0000ff}));
    puppet["ombroD"] = ombroD;
    tronco.add(ombroD);
    ombroD.position.x = tronco.position.y + 3;
    ombroD.position.y = tronco.position.y + 3;

    let pivotOmbroD = new THREE.Group();
    puppet["pivotOmbroD"] = pivotOmbroD;
    ombroD.add(pivotOmbroD);

    let bracoD = new THREE.Mesh(new THREE.SphereGeometry(1, 4, 1), new THREE.MeshBasicMaterial({color: 0x0000ff}));
    puppet["bracoD"] = bracoD;
    pivotOmbroD.add(bracoD);
    bracoD.position.y -= 2.7;



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

    camera.position.x = 0;
    camera.position.y = 2;
    camera.position.z = 80; //Profundidade: (+)Aproximando e (-)Afastando

    criaMonstro();

    animation();

};

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

    }

    renderer.render(scene, camera);
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init