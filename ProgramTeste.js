
var scene;      //Mundo Virual
var camera;     //Área de Visualização
var renderer;   //Responsável por renderizar

var criaCubo = function(){
    let geometria = new THREE.BoxGeometry(10, 10, 10);
    
};

var init = function(){
    console.log("Teste");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 50; //Profundidade: (+)Aproximando e (-)Afastando


    renderer.render(scene, camera);
};

window.onload = this.init


