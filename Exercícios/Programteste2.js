
var scene;      //Mundo Virual
var camera;     //Área de Visualização
var renderer;   //Responsável por renderizar

var elementos = [];

var velocidade = 0.5;

var criaSisSolar = function(){

    let sol = new THREE.Mesh(new THREE.SphereGeometry(8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffff00})); 
    sol.position.x = 20;
    sol.position.y = 10;
    elementos["sol"] = sol;

    let pivot = new THREE.Group();
    sol.add(pivot);
    elementos["pivot"] = pivot;

    let terra = new THREE.Mesh(new THREE.SphereGeometry(1.5, 6, 6), new THREE.MeshBasicMaterial({color: 0x0000ff}));
    pivot.add(terra);
    terra.position.x += pivot.position.x + 20;
    elementos["terra"] = terra;

    let marte = new THREE.Mesh(new THREE.SphereGeometry(2, 6, 6), new THREE.MeshBasicMaterial({color: 0xff0000}));
    pivot.add(marte);
    marte.position.x += pivot.position.x + 15;
    elementos["marte"] = marte;

    scene.add(sol);
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

    criaSisSolar();

    animation();

    //document.addEventListener('keypress', apertouBotao);
    document.addEventListener('keydown', pressionouBotao);
    document.addEventListener('keyup', soltouBotao);
    
};

//Função para utilizar uma tecla por vez
/* var apertouBotao = function(e) {

    if(e.keyCode == 114){ // tecla 'R'
        elementos["sphere1"].rotation.x += 0.02;
        elementos["sphere1"].rotation.z += 0.02;
    }
    if(e.keyCode == 32){ // tecla 'espaço'
        elementos["sphere1"].position.y += 1;
    }
    

    //console.log(e); Imprime a tecla que estou apertando
} */

// COM PROBLEMA
// Função para aumetar e diminuir o cubo com a rodinha do mouse
var onMouseWheel = function(e) {

    // Função com condição ternária
    for(let el in elementos){
        elementos["sol"].scale.x += (e.deltaY > 0)?-0.1:0.1;
        elementos["sol"].scale.y += (e.deltaY > 0)?-0.1:0.1;
        elementos["sol"].scale.z += (e.deltaY > 0)?-0.1:0.1;
    }
    
    // Mesma função que a anterior so que com if
    /* if(e.deltaY > 0){
        elementos["cubo1"].scale.x -= 0.1;
        elementos["cubo1"].scale.y -= 0.1;
        elementos["cubo1"].scale.z -= 0.1;
    }
    else{
        elementos["cubo1"].scale.x += 0.1;
        elementos["cubo1"].scale.y += 0.1;
        elementos["cubo1"].scale.z += 0.1;
    } */
}

//Funções para utilizar mais de uma tecla por vez
var key_r = false;
var key_space = false;
var key_q = false;

var pressionouBotao = function(e) {
    if(e.keyCode == 82){ // tecla 'R'
        key_r = true;
    }
    if(e.keyCode == 32){ // tecla 'espaço'
        key_space = true;
    }
    if(e.keyCode == 81){ // tecla 'Q'
        key_q = true;
    }
    if(e.keyCode == 189){ // tecla '-'
        elementos["terra"].scale.x -= 0.1;
        elementos["terra"].scale.y -= 0.1;
        elementos["terra"].scale.z -= 0.1;
    }
    if(e.keyCode == 187){ // tecla '+'
        elementos["sol"].scale.x += 0.1;
        elementos["sol"].scale.y += 0.1;
        elementos["sol"].scale.z += 0.1;
    }
}

var soltouBotao = function(e) {
    if(e.keyCode == 82){ // tecla 'R'
        key_r = false;
    }
    if(e.keyCode == 32){ // tecla 'espaço'
        key_space = false;
    }
    if(e.keyCode == 81){ // tecla 'Q'
        key_q = false;
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
    
    if(key_space){
        elementos["pivot"].position.x += 0.01;
    }
    if(key_r){
        elementos["pivot"].rotation.x += 0.01;
        elementos["pivot"].rotation.z += 0.01;

    }
    if(key_q){
        elementos["pivot"].rotation.z += 0.01;
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