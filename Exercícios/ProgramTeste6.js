var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo
var controls; //controle do mouser

var parametrosGUI = {};

var elementos = [];

var velocidade = 0.07;

var ground;
var geometriaA;


var objLoading = function(){
	loader = new THREE.OBJLoader();

	loader.load(
		'../assets/ninja/ninjaHead_Low.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['ninja'] = obj;

			let texLoader = new THREE.TextureLoader().setPath("../assets/ninja/");


			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						let material = new THREE.MeshStandardMaterial();
						material.map = texLoader.load("ao.jpg");
						material.normalMap = texLoader.load("normal.png");
						material.displacementMap = texLoader.load("displacement.jpg");
						material.displacementScale = 2.436143;
						material.displacementBias = -0.428408;

						child.material = material;
					}
				}
			);

			obj.scale.y = 0.3;
			obj.scale.z = 0.3;
			obj.scale.x = 0.3;

			obj.position.y = -48;
			obj.position.z = 2;
			obj.position.x = -15;

			//obj.rotation.x-=1.35;

			scene.add(obj);
			console.log("Carregou!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	//CERBERUS
	loader.load(
		'../assets/cerberus/Cerberus.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['cerberus'] = obj;

			let texLoader = new THREE.TextureLoader().setPath("../assets/cerberus/");


			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						let material = new THREE.MeshStandardMaterial();
						let materialBase = texLoader.load("Cerberus_A.jpg");
						material.encoding = THREE.sRGBEncoding;
						material.map = materialBase;

						material.normalMap = texLoader.load("Cerberus_N.jpg");
						material.normalMap = texLoader.load("Cerberus_N.jpg");
						material.roughnessMap = texLoader.load("Cerberus_R.jpg");
						material.roughnessMap.wrapS = THREE.RepeatWrapping;

						material.metalnessMap = texLoader.load("Cerberus_M.jpg");
						material.metalnessMap.wrapS = THREE.RepeatWrapping;

						//aterial.displacementMap = texLoader.load("displacement.jpg");
						//material.displacementScale = 2.436143;
						//material.displacementBias = -0.428408;

						child.material = material;
					}
				}
			);

			obj.scale.y = 6;
			obj.scale.z = 6;
			obj.scale.x = 6;

			obj.position.y = 0;
			obj.position.z = 2;
			obj.position.x = 5;

			//obj.rotation.x-=1.35;

			scene.add(obj);
			console.log("Carregou!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);




	//carregando Ovelha
	let loaderFBX = new THREE.FBXLoader();
	loaderFBX.load(
		'../assets/Sheep.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['ove'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshStandardMaterial({
							map: new THREE.TextureLoader().load("../assets/texturas/UVSheep.png")}
						);
					}
				}
			);

			 obj.scale.y = 0.02;
			 obj.scale.z = 0.02;
			 obj.scale.x = 0.02;

			obj.position.y = -7.6;
			obj.position.x = -10;
			obj.position.z = 0;

			//obj.rotation.x-=1.35;

			scene.add(obj);
			console.log("Carregou Ovelha");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


};

var godSaysLightsOn = function (){
	let spot = new THREE.SpotLight(0xffffff);
	spot.position.set(100,100,100);
	scene.add(spot);

	scene.add(new THREE.AmbientLight(0x666666));
	//scene.add( new THREE.HemisphereLight( 0x443333, 0x222233, 4 ) );
}


var createGui = function (){
	const gui = new dat.GUI();

	parametrosGUI = {
		scalarPuppet: 1,
		positionX: 0,
		positionY: -6,
		positionZ: 0,

		skyColor : "#000000",
		groundColor: "#006400",

		geometrias: "",
		modelGui: ""
	};

	let fazScala = gui.add(parametrosGUI, 'scalarPuppet').min(0.1).max(2).step(0.1).name("Scale");
	fazScala.onChange(function (parametro){
			elementos[parametrosGUI.modelGui].scale.x = parametro;
			elementos[parametrosGUI.modelGui].scale.y = parametro;
			elementos[parametrosGUI.modelGui].scale.z = parametro;
		}
	);

	let opcoes = ['Ovelha','Triceratopis'];
	let comboChange = gui.add(parametrosGUI, 'geometrias').options(opcoes).name("Objetos");
	comboChange.onChange(function(parametro){
			if (parametro == 'Ovelha'){
				camera.lookAt(elementos["ove"].position);
				parametrosGUI.modelGui = "ove";
			}else if (parametro == 'Triceratopis'){
				camera.lookAt(elementos["tri"].position);
				parametrosGUI.modelGui = "tri";
			} 
		}
	);
	let folderPosition = gui.addFolder("Position");

	let positionX = folderPosition.add(parametrosGUI, 'positionX').min(-6).max(6).step(0.1).name("Position X");
	positionX.onChange(function (parametro){
		elementos[parametrosGUI.modelGui].position.x = parametro;
		}
	);
	let positionY = folderPosition.add(parametrosGUI, 'positionY').min(-10).max(10).step(0.1).name("Position Y");
	positionY.onChange(function (parametro){
			elementos[parametrosGUI.modelGui].position.y = parametro;
		}
	);
	let positionZ = folderPosition.add(parametrosGUI, 'positionZ').min(-6).max(6).step(0.1).name("Position Z");
	positionZ.onChange(function (parametro){
		elementos[parametrosGUI.modelGui].position.z = parametro;
		}
	);

	let colorFolder = gui.addFolder('Coloros');
	let sColor = colorFolder.addColor(parametrosGUI, 'skyColor').name("Dollie's Color");
	sColor.onChange(function (parametro){
			elementos["ove"].traverse( function (child){
				if (child.isMesh){
					child.material.color = new THREE.Color(parametro);
				}
			}
		);  
		}
	);
	let gColor = colorFolder.addColor(parametrosGUI, 'groundColor').name("Ground");
	gColor.onChange(function (parametro){
			ground.material.color.setHex(parametro.replace("#", "0x"));
		}
	);


	//gui.add(parametrosGUI, 'b').name("Variavel2");

	//scene.add(gui);
	gui.open();

}

var init = function (){
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xcce0ff);
	
	
//	Camera em perspectiva
	camera = new THREE.PerspectiveCamera(
						50, // view angle
						window.innerWidth/window.innerHeight, //aspect ratio
						1, //near
						500 //far
					);

	

	// geometriaA = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), new THREE.MeshBasicMaterial({ color: 0xff0000}));
	// geometriaA.position.x = -8;
	// scene.add(geometriaA);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
		
	camera.position.z = 50;
	camera.position.x = 0;
	camera.position.y = 1.7;
	
	godSaysLightsOn();

	createGui();

	//criaMonstro();	

	objLoading();

	animation();


	//criar um piso.
	let textureLoad = new THREE.TextureLoader();
	let groundTexture = textureLoad.load("../assets/texturas/terrain/grasslight-big.jpg"); //busca a imagem
	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; //quero que ela se repita
	groundTexture.encoding = THREE.sRGBEncoding; //padrão cores, sempre que existir será informado
	groundTexture.repeat.set(25,25); //número de vezes que ela vai se repetir dentro do nosso chão
	
	let materialGround = new THREE.MeshStandardMaterial({map: groundTexture});
	materialGround.normalMap = textureLoad.load("../assets/texturas/terrain/grasslight-big-nm.jpg"); //busca a normal, que da noção básica de profundidade


	ground = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(1000,1000),
		materialGround
	);
	ground.rotation.x = - Math.PI/2;
	ground.position.y-=7.5;
	scene.add(ground);

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	scene.fog = new THREE.Fog(0xcce0ff, 200, 500);


	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);

};



var key_r = false;
var key_space = false;
var key_q = false;

var soltouBotao = function(e){

	if (e.keyCode == 82){ //r
		key_r = false;
	}
	if (e.keyCode == 32){ //espaço
		key_space = false;
	}
	if (e.keyCode == 81){ //espaço
		key_q = false;
	}
}


var apertouButao =  function(e){
	console.log(e.keyCode);

	if (e.keyCode == 82){ //r
		elementos['cerberus'].rotation.x+=0.1;
		key_r = true;
	}
	if (e.keyCode == 32){ // space
		key_space = true;
		pulando = true;
	}

	if (e.keyCode == 81){ // q
		key_q = true;		
	}

	if (e.keyCode == 38){ //douwn
		camera.position.z-=0.5;
		//elementos["puppet"]["tronco"].position.z += 1;
	}
	if (e.keyCode == 40){ // UP
		//elementos["puppet"]["tronco"].position.z -= 1;
		camera.position.z+=0.5;
	}
}

var count =0; 
var velocidadeOmbroDireitoC = -0.01;
var velocidadeOmbroDireitoL = -0.01;
var pulando = false;
var velocidadePulo = 0.5;
var altura = -1;
var animation = function (){
	requestAnimationFrame(animation); //adiciona o método na fila de renderização
	//controls.update();
	
	
	//if (++count >= 30){
	//	let rotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.01,0,0.01, 'XYZ'));
	//	elementos["cubo1"].quaternion.multiplyQuaternions(rotation, elementos["cubo1"].quaternion);

	// 	elementos["cubo2"].rotation.x += 0.01;
	// 	elementos["cubo2"].rotation.z += 0.01;
	// //	count = 0;
	


	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init