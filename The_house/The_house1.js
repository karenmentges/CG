var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

var parametrosGUI = {};

var elementos = [];

var ground;


var objLoading = function(){

	// Carregando Cachorro
	let loaderFBX1 = new THREE.FBXLoader();
	loaderFBX1.load(
		'assets/Cachorro.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['cachorro'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material.color.setHex("0xD69A3A");
					}
				}
			);

			obj.scale.x = 0.025;
			obj.scale.y = 0.025;
			obj.scale.z = 0.025;
			
			obj.position.x = 0;
			obj.position.y = -5;
			obj.position.z = 15;

			scene.add(obj);
			console.log("Carregou Cachorro");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);

    // Carregando Lareira
	loader1 = new THREE.OBJLoader();
	loader1.load(
		'assets/Lareira.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['lareira'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material.color.setHex("0x808080");
					}
				}
			);

			obj.scale.x = 8;
			obj.scale.y = 8;
			obj.scale.z = 8;
			
			obj.position.x = -24;
			obj.position.y = -5;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Lareira");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	// Carregando Poltrona 1
	let loaderFBX2 = new THREE.FBXLoader();
	loaderFBX2.load(
		'assets/Poltrona.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['poltrona1'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material.color.setHex("0x626563");
					}
				}
			);

			obj.scale.x = 0.2;
			obj.scale.y = 0.2;
			obj.scale.z = 0.2;

			obj.position.x = -40;
			obj.position.y = -5;
			obj.position.z += 20;

			obj.rotation.y += 0.9;

			scene.add(obj);
			console.log("Carregou Poltrona 1");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	// Carregando Bide
	let loaderFBX3 = new THREE.FBXLoader();
	loaderFBX3.load(
		'assets/Bide.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['bide'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material.color.setHex("0x1f4861");
					}
				}
			);

			obj.scale.x = 0.2;
			obj.scale.y = 0.2;
			obj.scale.z = 0.2;

			obj.position.x = -50;
			obj.position.y = -5;
			obj.position.z += 50;

			scene.add(obj);
			console.log("Carregou Bide");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	// Carregando Poltrona 2
	let loaderFBX4 = new THREE.FBXLoader();
	loaderFBX4.load(
		'assets/Poltrona.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['poltrona2'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material.color.setHex("0x626563");
					}
				}
			);

			obj.scale.x = 0.2;
			obj.scale.y = 0.2;
			obj.scale.z = 0.2;

			obj.position.x = -40;
			obj.position.y = -5;
			obj.position.z += 80;

			obj.rotation.y += 2.2;

			scene.add(obj);
			console.log("Carregou Poltrona 2");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	// Carregando Sofa
	let loaderFBX5 = new THREE.FBXLoader();
	loaderFBX5.load(
		'assets/Sofa.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['sofa'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshPhongMaterial({color: 0x1f4861});
					}
				}
			);
			
			obj.scale.x = 0.18;
			obj.scale.y = 0.18;
			obj.scale.z = 0.18;

			obj.position.x = 50;
			obj.position.y = -5;
			obj.position.z += 50;

			obj.rotation.x += 1.55;

			scene.add(obj);
			console.log("Carregou Sofa");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	

	// Carregando Lustre
	let loaderFBX6 = new THREE.FBXLoader();
	loaderFBX6.load(
		'assets/Lustre.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['lustre'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshPhongMaterial({color: 0x08004d});
					}
				}
			);

			obj.scale.x = 0.3;
			obj.scale.y = 0.3;
			obj.scale.z = 0.3;
			
			obj.position.x = 0;
			obj.position.y = 30;
			obj.position.z += 50;

			scene.add(obj);
			console.log("Carregou Lustre");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	// Carregando Ratos
	let loaderFBX7 = new THREE.FBXLoader();
	loaderFBX7.load(
		'assets/Ratos.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['ratos'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshPhongMaterial({color: 0x682700});
					}
				}
			);

			obj.scale.x = 1;
			obj.scale.y = 1;
			obj.scale.z = 1;
			
			obj.position.x = -5;
			obj.position.y = 36;
			obj.position.z += 49;
			
			obj.rotation.y += 3.1;

			scene.add(obj);
			console.log("Carregou Ratos");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	// Carregando Gato 1
	let loaderFBX8 = new THREE.FBXLoader();
	loaderFBX8.load(
		'assets/Gato1.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['gato1'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshPhongMaterial({color: 0x3d3d3d});
					}
				}
			);

			obj.scale.x = 0.01;
			obj.scale.y = 0.01;
			obj.scale.z = 0.01;
			
			obj.position.x = -50;
			obj.position.y = -0.5;
			obj.position.z += 50.5;
			
			obj.rotation.y -= 1.5;

			scene.add(obj);
			console.log("Carregou Gato 1");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	// Carregando Gato 2
	loader2 = new THREE.OBJLoader();
	loader2.load(
		'assets/Gato2.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['gato2'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material.color.setHex("0xa35000");
					}
				}
			);

			obj.scale.x = 0.15;
			obj.scale.y = 0.15;
			obj.scale.z = 0.15;

			obj.position.x = 45;
			obj.position.y = 8;
			obj.position.z = 40;

			obj.rotation.y -= 1.35;

			scene.add(obj);
			console.log("Carregou Gato 2");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	// Carregando Gato 3
	loader3 = new THREE.OBJLoader();
	loader3.load(
		'assets/Gato3.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['gato3'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material.color.setHex("0xadadad");
					}
				}
			);

			obj.scale.x = 0.15;
			obj.scale.y = 0.15;
			obj.scale.z = 0.15;
			
			obj.position.x = 47;
			obj.position.y = 5.5;
			obj.position.z = 60;

			obj.rotation.y -= 2.5;

			scene.add(obj);
			console.log("Carregou Gato 3");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	// Carregando Gato 4
	loader4 = new THREE.OBJLoader();
	loader4.load(
		'assets/Gato4.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['gato4'] = obj;

			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshPhongMaterial({color: 0x212121});
					}
				}
			);

			obj.scale.x = 0.2;
			obj.scale.y = 0.2;
			obj.scale.z = 0.2;
			
			obj.position.x = 0;
			obj.position.y = -5;
			obj.position.z = 80;

			obj.rotation.x -= 1.5;
			obj.rotation.z += 3.15;

			scene.add(obj);
			console.log("Carregou Gato 4");

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

var createGui = function (){
	const gui = new dat.GUI();

	parametrosGUI = {
		scalarPuppet: 1,
		positionX: 0,
		positionY: -6,
		positionZ: 0,

		skyColor : "#000000",
		groundColor: "#ffffff",

		geometrias: "",
		modelGui: ""
	};

	let fazScala = gui.add(parametrosGUI, 'scalarPuppet').min(0.001).max(3).step(0.000001).name("Scale");
	fazScala.onChange(function (parametro){
			elementos[parametrosGUI.modelGui].scale.x = parametro;
			elementos[parametrosGUI.modelGui].scale.y = parametro;
			elementos[parametrosGUI.modelGui].scale.z = parametro;
		}
	);

	let opcoes = ['Cachorro', 'Gato 1', 'Gato 2', 'Gato 3', 'Gato 4', 'Ratos'];
	let comboChange = gui.add(parametrosGUI, 'geometrias').options(opcoes).name("Objects");
	comboChange.onChange(function(parametro){
			if (parametro == 'Cachorro'){
				camera.lookAt(elementos["cachorro"].position);
				parametrosGUI.modelGui = "cachorro";
			} else if (parametro == 'Gato 1'){
				camera.lookAt(elementos["gato1"].position);
				parametrosGUI.modelGui = "gato1";
			} else if (parametro == 'Gato 2'){
				camera.lookAt(elementos["gato2"].position);
				parametrosGUI.modelGui = "gato2";
			} else if (parametro == 'Gato 3'){
				camera.lookAt(elementos["gato3"].position);
				parametrosGUI.modelGui = "gato3";
			} else if (parametro == 'Gato 4'){
				camera.lookAt(elementos["gato4"].position);
				parametrosGUI.modelGui = "gato4";
			} else if (parametro == 'Ratos'){
				camera.lookAt(elementos["ratos"].position);
				parametrosGUI.modelGui = "ratos";
			} 
		}
	);
	let folderPosition = gui.addFolder("Position");

	let positionX = folderPosition.add(parametrosGUI, 'positionX').min(-100).max(100).step(0.1).name("Position X");
	positionX.onChange(function (parametro){
		elementos[parametrosGUI.modelGui].position.x = parametro;
		}
	);
	let positionY = folderPosition.add(parametrosGUI, 'positionY').min(-10).max(50).step(0.1).name("Position Y");
	positionY.onChange(function (parametro){
			elementos[parametrosGUI.modelGui].position.y = parametro;
		}
	);
	let positionZ = folderPosition.add(parametrosGUI, 'positionZ').min(-100).max(100).step(0.1).name("Position Z");
	positionZ.onChange(function (parametro){
		elementos[parametrosGUI.modelGui].position.z = parametro;
		}
	);

	let colorFolder = gui.addFolder('Coloros');
	let sColor = colorFolder.addColor(parametrosGUI, 'skyColor').name("Sky");
	sColor.onChange(function (parametro){
			scene.background= new THREE.Color(parametro);
		}
	);
	let gColor = colorFolder.addColor(parametrosGUI, 'groundColor').name("Ground");
	gColor.onChange(function (parametro){
			ground.material.color.setHex(parametro.replace("#", "0x"));
		}
	);

	gui.open();

}


var createMaterial = function() {
    var texture = new THREE.TextureLoader().load("texture/ny.png");
    var material = new THREE.MeshBasicMaterial();

    material.map = texture;

    return material;

};


var init = function (){
	
	scene = new THREE.Scene();
	scene.background = new THREE.CubeTextureLoader()
	.setPath( 'texture/' )
	.load( [
		'px.png',
		'nx.png',
		'py.png',
		'ny.png',
		'pz.png',
		'nz.png'
	] );
	
//	Camera em perspectiva
	camera = new THREE.PerspectiveCamera(
						50, // view angle
						window.innerWidth/window.innerHeight, //aspect ratio
						1, //near
						300 //far
					    );
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
		
	camera.position.z = 50;
	camera.position.x = 0;
	camera.position.y = 1.7;
	
	godSaysLightsOn();

	createGui();	

	objLoading();

	animation();


	//criar um piso.
	ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000,1000), createMaterial());

	ground.rotation.x = - Math.PI/2;
	ground.position.y-=7.5;
	scene.add(ground);

	//metodos do mouser
	//document.addEventListener('mousemove', onMouseMove);
	//document.addEventListener('mousedown', onMouseClick);
	//document.addEventListener('mouseup', onMouseUp);
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
		camera.rotation.x += paraRadianos(diferencaMovimento.y)*0.1;
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

var animation = function (){
	requestAnimationFrame(animation); //adiciona o método na fila de renderização
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init