var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

var parametrosGUI = {};

var elementos = [];

var velocidade = 0.07;

var ground;
var geometriaA;


var objLoading = function(){
	loader = new THREE.OBJLoader();

	loader.load(
		'../assets/triceratops.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['tri'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material.color.setHex("0xbe6262");
					}
				}
			);

			obj.scale.y = 2;
			obj.scale.z = 2;
			obj.scale.x = 2;

			obj.position.y = -6;
			obj.position.z = 2;

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
						child.material.color.setHex("0xbe62be");
					}
				}
			);

			 obj.scale.y = 0.02;
			 obj.scale.z = 0.02;
			 obj.scale.x = 0.02;

			obj.position.y = -5;
			obj.position.x = -20;
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

	scene.add(new THREE.AmbientLight(0xffffff));

}


var criaMonstro = function (){
	let puppet=[];

	let red = 	new THREE.Color(1,0,0);
	let green = new THREE.Color(0,1,0);
	let blue = 	new THREE.Color(0,0,1);
	let cores = [red, green, blue];
	let materials = [
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: green}),
		new THREE.MeshBasicMaterial({color: blue})
	];

	let tronco = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 2), materials);
	puppet["tronco"] = tronco;

	let cabeca = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({color: blue}));
	puppet["cabeca"] = cabeca;
	tronco.add(cabeca);
	cabeca.position.y=tronco.position.y+6;

	//bracoDireito
	let ombroD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["ombroD"] = ombroD;
	tronco.add(ombroD);
	ombroD.position.y= tronco.position.y+3;
	ombroD.position.x= tronco.position.y+3;
	
	let pivotOmbroD = new THREE.Group();
	puppet["pivotOmbroD"] = pivotOmbroD;
	ombroD.add(pivotOmbroD);
	
	let bracoD = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["bracoD"] = bracoD;
	pivotOmbroD.add(bracoD)
	bracoD.position.y-=2.7;


	let ombroE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["ombroE"] = ombroE;
	tronco.add(ombroE);
	ombroE.position.y= tronco.position.y+3;
	ombroE.position.x= tronco.position.x-3;	
	let pivotOmbroE = new THREE.Group();
	puppet["pivotOmbroE"] = pivotOmbroE;
	ombroE.add(pivotOmbroE);
	let bracoE = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["bracoE"] = bracoE;
	pivotOmbroE.add(bracoE)
	bracoE.position.y-=2.7;


	let pernaE = new THREE.Mesh(new THREE.BoxGeometry(1, 6, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["pernaE"] = pernaE;
	tronco.add(pernaE)
	pernaE.position.y-=6.7;
	pernaE.position.x-=1.5;

	let pernaB = new THREE.Mesh(new THREE.BoxGeometry(1, 6, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["pernaB"] = pernaB;
	tronco.add(pernaB)
	pernaB.position.y-=6.7;
	pernaB.position.x+=1.5;





	elementos["puppet"] = puppet;
	scene.add(tronco);

};

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
	let sColor = colorFolder.addColor(parametrosGUI, 'skyColor').name("SkyColor");
	sColor.onChange(function (parametro){
			scene.background= new THREE.Color(parametro);
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
	scene.background = new THREE.Color(0x00BFFF)
	
	
//	Camera em perspectiva
	camera = new THREE.PerspectiveCamera(
						50, // view angle
						window.innerWidth/window.innerHeight, //aspect ratio
						1, //near
						300 //far
					);

	//Projeção paralela.
	// camera = new THREE.OrthographicCamera(
	// 	window.innerWidth/2,
	// 	-window.innerWidth/2,
	// 	window.innerHeight/2,
	// 	-window.innerHeight/2,
	// 	0.11,
	// 	90
	// );

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
	ground = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(1000,1000),
		new THREE.MeshBasicMaterial({color: 0x006400})
	);
	ground.rotation.x = - Math.PI/2;
	ground.position.y-=7.5;
	scene.add(ground);



	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);

	//metodos do mouser
	document.addEventListener('mousewheel', onMouseWheel);
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mousedown', onMouseClick);
	document.addEventListener('mouseup', onMouseUp);

	
};

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

		//  let angulosQuaternion = new THREE.Quaternion().setFromEuler(
		//  	new THREE.Euler (	paraRadianos(diferencaMovimento.y)*0.5,
		//  					    paraRadianos(diferencaMovimento.x)*0.5,
		//  						0,
		//  						'XYZ')
		//  );
		//  elementos["puppet"]["tronco"].quaternion.multiplyQuaternions(angulosQuaternion, elementos["puppet"]["tronco"].quaternion);

		//camera.rotation.x += paraRadianos(diferencaMovimento.y)*0.1;
		camera.rotation.y += paraRadianos(diferencaMovimento.x)*0.1;


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

	if (key_space){ //movimento frente
		if (elementos["puppet"]["pivotOmbroD"].rotation.x < -2.83 || elementos["puppet"]["pivotOmbroD"].rotation.x > 1.3)
			velocidadeOmbroDireitoC*=-1;

		elementos["puppet"]["pivotOmbroD"].rotation.x += velocidadeOmbroDireitoC;
	}
	if (key_r){
		if (elementos["puppet"]["pivotOmbroD"].rotation.z < 0 || elementos["puppet"]["pivotOmbroD"].rotation.z > 1.4)
			velocidadeOmbroDireitoL*=-1;

		elementos["puppet"]["pivotOmbroD"].rotation.z += velocidadeOmbroDireitoL;
	}
	if (key_q){
		elementos["puppet"]["tronco"].rotation.y += 0.01;
	}

	if (pulando && ++count >= 30 ){
		
		if (altura == -1) altura = elementos['puppet']['tronco'].position.y;
		if (elementos['puppet']['tronco'].position.y >= altura && elementos['puppet']['tronco'].position.y <= altura+3){
			//console.log("-> "+ elementos['puppet']['tronco'].position.y);
			elementos['puppet']['tronco'].position.y+=velocidadePulo;
			if (elementos['puppet']['tronco'].position.y <= altura){
				elementos['puppet']['tronco'].position.y = altura;
				pulando = false;
			}
		} else{
			elementos['puppet']['tronco'].position.y-=velocidadePulo; 	
			velocidadePulo *=-1;
		}
		count =0;
	}

	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init