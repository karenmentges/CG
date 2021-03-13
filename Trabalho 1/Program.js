
var scene;      //Mundo Virual
var camera;     //Área de Visualização
var renderer;   //Responsável por renderizar

var elementos = [];

var velocidade1 = 0.5;
var velocidade2 = 0.5;
var velocidade3 = -0.5;
var velocidade4 = -0.5;

var criaIcosahedro = function() {
    const radius = 7;  
    const detail = 0;  

    const geometry = new THREE.IcosahedronGeometry(radius, detail);

    let pink   = new THREE.Color("rgb(200,33,81)");
    let green  = new THREE.Color("rgb(64,224,208)");
    
    let material1   = new THREE.MeshPhongMaterial({color: pink});
    let icosahedro1 = new THREE.Mesh(geometry, material1);
    icosahedro1.position.x = -40;
    icosahedro1.position.y = 35;
    elementos["icosahedro1"] = icosahedro1;

    let material2   = new THREE.MeshPhongMaterial({color: green});
    let icosahedro2 = new THREE.Mesh(geometry, material2);
    icosahedro2.position.x = 80;
    icosahedro2.position.y = 35;
    elementos["icosahedro2"] = icosahedro2;

    scene.add(icosahedro1);
    scene.add(icosahedro2);
}

var criaDodecahedron = function(){
    const radius = 7;  
    const detail = 0;  

    const geometry = new THREE.DodecahedronGeometry(radius, detail);

    let purple  = new THREE.Color("rgb(148,0,211)");
    let blue    = new THREE.Color("rgb(65,105,225)");
    
    let material3 = new THREE.MeshPhongMaterial({color: purple});
    let dodecahedron1  = new THREE.Mesh(geometry, material3);
    dodecahedron1.position.x = -40;
    dodecahedron1.position.y = -15;
    elementos["dodecahedron1"] = dodecahedron1;

    let material4 = new THREE.MeshPhongMaterial({color: blue});
    let dodecahedron2  = new THREE.Mesh(geometry, material4);
    dodecahedron2.position.x = 80;
    dodecahedron2.position.y = -15;
    elementos["dodecahedron2"] = dodecahedron2;

    scene.add(dodecahedron1);
    scene.add(dodecahedron2);
}


var init = function(){
    console.log("Teste");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.background = new THREE.Color(0xAAAAAA);

    const color = 0xFFFFFF;
    const intensity = 1;
    const light1 = new THREE.DirectionalLight(color, intensity);
    const light2 = new THREE.DirectionalLight(color, intensity);
    light1.position.set(-1, 2, 4);
    light2.position.set(1, -2, -4);
    scene.add(light1);    
    scene.add(light2);
  
    camera.position.x = 20;
    camera.position.y = 10;
    camera.position.z = 100; //Profundidade: (+)Aproximando e (-)Afastando

    criaIcosahedro();
    criaDodecahedron();

    animation();
    
};

var animation = function (){

    requestAnimationFrame(animation); //Adiciona o método na fila de renderização

    elementos["icosahedro1"].position.x -= velocidade1;
	if (elementos["icosahedro1"].position.x > 85){
        velocidade1 *= -1;
    }
    else if(elementos["icosahedro1"].position.x < -45){
        velocidade1 *= -1;
    }
    elementos["icosahedro1"].position.y -= velocidade2;
	if (elementos["icosahedro1"].position.y < -20){
        velocidade2 *= -1;
    }
    else if (elementos["icosahedro1"].position.y > 40){
        velocidade2 *= -1;
    }

	elementos["icosahedro2"].position.x -= velocidade3;
	if (elementos["icosahedro2"].position.x < -45){
        velocidade3 *= -1;
    }
    else if(elementos["icosahedro2"].position.x > 85){
        velocidade3 *= -1;
    }
    elementos["icosahedro2"].position.y -= velocidade4;
    if (elementos["icosahedro2"].position.y > 40){
        velocidade4 *= -1;
    }
	else if (elementos["icosahedro2"].position.y < -20){
        velocidade4 *= -1;
    }
    
		
    renderer.render(scene, camera);
}


window.onload = this.init