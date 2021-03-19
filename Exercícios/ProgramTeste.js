
var scene;      //Mundo Virual
var camera;     //Área de Visualização
var renderer;   //Responsável por renderizar

var elementos = [];

var velocidade = 0.5;

var criaCubo = function(){
    let geometria = new THREE.BoxGeometry(10, 10, 10);

    let pink   = new THREE.Color("rgb(200,33,81)");
    let green  = new THREE.Color("rgb(64,224,208)");
    let purple = new THREE.Color(148,0,211);

    let material = [new THREE.MeshBasicMaterial({color: pink}),
                    new THREE.MeshBasicMaterial({color: green}),
                    new THREE.MeshBasicMaterial({color: purple}),
                    new THREE.MeshBasicMaterial({color: pink}),
                    new THREE.MeshBasicMaterial({color: green}),
                    new THREE.MeshBasicMaterial({color: purple}),]

    let cubo = new THREE.Mesh(geometria, material); //Mesh(malha), junta a geometria e o material, criando uma malha de triângulos
    cubo.position.x = -20;
    elementos["cubo1"] = cubo;

    let cubo2 = new THREE.Mesh(geometria, material);
    cubo2.position.x = 60;
    cubo2.position.y = 20;
    elementos["cubo2"] = cubo2;

    scene.add(cubo);
    scene.add(cubo2);
};


var init = function(){
    console.log("Teste");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.x = 20;
    camera.position.y = 10;
    camera.position.z = 80; //Profundidade: (+)Aproximando e (-)Afastando

    criaCubo();

    animation();

    document.addEventListener('keypress', apertouBotao);
    document.addEventListener('keydown', pressionouBotao);
    document.addEventListener('keyup', soltouBotao);
    
};

//Função para utilizar uma tecla por vez
var apertouBotao = function(e) {

    if(e.keyCode == 114){ // tecla 'R'
        elementos["cubo1"].rotation.x += 0.02;
        elementos["cubo1"].rotation.z += 0.02;
    }
    if(e.keyCode == 32){ // tecla 'espaço'
        elementos["cubo1"].position.y += 1;
    }

    //console.log(e); Imprime a tecla que estou apertando
} 

//Funções para utilizar mais de uma tecla por vez
var r = false;
var space = false;

var pressionouBotao = function(e) {
    if(e.keyCode == 82){ // tecla 'R'
        r = true;
    }
    if(e.keyCode == 32){ // tecla 'espaço'
        space = true;
    }
}

var soltouBotao = function(e) {
    if(e.keyCode == 82){ // tecla 'R'
        r = false;
    }
    if(e.keyCode == 32){ // tecla 'espaço'
        space = false;
    }
}

var animation = function (){

    requestAnimationFrame(animation); //Adiciona o método na fila de renderização

    /* Como a rotação funciona com matrix (para conhecimento) 
    var count = 0; // vai fora da animação
    if(++count >= 120){
        let rotationMat = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0,1,1), Math.PI/6);
        elementos["cubo1"].applyMatrix(rotationMat);
        count = 0; 
    } */

    /* Como a rotação funciona com quaterninho (para conhecimento) 
    let rotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.01,0,0.01,'XYZ'));
    elementos["cubo1"].quaternion.multiplyQuaternions(rotation, elementos["cubo1"].quaternion); */
    
    if(space){
        elementos["cubo1"].position.x += 0.2;
    }
    if(r){
        elementos["cubo1"].rotation.x += 0.02;
        elementos["cubo1"].rotation.z += 0.02;

    }

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
		
    renderer.render(scene, camera);
}


window.onload = this.init