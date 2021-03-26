
var scene;      //Mundo Virual
var camera;     //Área de Visualização
var renderer;   //Responsável por renderizar

var elementos = [];

var velocidade = 0.5;

var criasphere = function(){

    let pink   = new THREE.Color("rgb(200,33,81)");
    let green  = new THREE.Color("rgb(64,224,208)");

    let sphere1 = new THREE.Mesh(new THREE.SphereGeometry(10, 10, 10), new THREE.MeshBasicMaterial({color: pink})); //Mesh(malha), junta a geometria e o material, criando uma malha de triângulos
    sphere1.position.x = -10;
    elementos["sphere1"] = sphere1;

    let sphere2 = new THREE.Mesh(new THREE.SphereGeometry(10, 10, 10), new THREE.MeshBasicMaterial({color: green}));
    sphere2.position.x = 40;
    elementos["sphere2"] = sphere2;

    scene.add(sphere);
    scene.add(sphere2);
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

// Função para aumetar e diminuir o cubo com a rodinha do mouse
var onMouseWhell = function(e) {
    console.log(e.deltaY);

    // Função com condição ternária
    for(let el in elementos){
        elementos[el].scale.x += (e.deltaY > 0)?-0.1:0,1;
        elementos[el].scale.y += (e.deltaY > 0)?-0.1:0,1;
        elementos[el].scale.z += (e.deltaY > 0)?-0.1:0,1;
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