
var scene;      //Mundo Virual
var camera;     //Área de Visualização
var renderer;   //Responsável por renderizar

var elementos = [];

var velocidade = 0.5;

var criaCubo = function(){
    let geometria = new THREE.BoxGeometry(10, 10, 10);

    let pink   = new THREE.Color("rgb(200,33,81)");
    let green  = new THREE.Color("rgb(64,224,208)");
    //let purple = new THREE.Color(148,0,211);
    //let colors = [pink, green, purple];


    let material = new THREE.MeshBasicMaterial({color: pink});
    let cubo = new THREE.Mesh(geometria, material); //Mesh(malha), junta a geometria e o material, criando uma malha de triângulos
    cubo.position.x = -20;
    elementos["cubo1"] = cubo;

    let material2 = new THREE.MeshBasicMaterial({color: green});
    let cubo2 = new THREE.Mesh(geometria, material2);
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
    
};

var animation = function (){

    requestAnimationFrame(animation); //Adiciona o método na fila de renderização

    elementos["cubo1"].position.x += 0.5;

	elementos["cubo2"].position.x -= velocidade;
	if (elementos["cubo2"].position.x < -30){
        velocidade *= -1;
    }
		
    renderer.render(scene, camera);
}


window.onload = this.init