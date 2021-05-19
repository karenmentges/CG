var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo
var controls; //controle do mouser

var parametrosGUI = {};
var animationFolder;

var elementos = [];

var ground;
var geometriaA;

var lights =[];

var wolfVelocity = 0.5;

//variaveis para animação
var mixer;
var modelReady = false;
var animationActions = Array();
var activeAction;
var lastAction;
var loadFinished;
var clock = new THREE.Clock();


//Var para add a camera com o lobo
var char;

var charBounding;
var charHelper;

var staticBounding = [];

var objLoading = function(){
	loader = new THREE.OBJLoader();
	let loaderFBX = new THREE.FBXLoader();



///////////////////////////////////////// FLOOR ///////////////////////////////////////////


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = 50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = 100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = 150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = 200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = 0;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");
		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -50;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -100;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -150;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -400;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -450;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -500;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
		    obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -100;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -150;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -200;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -250;
			obj.position.z = -550;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 300;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 300;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 300;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 300;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 350;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 350;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 350;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 350;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 400;
			obj.position.z = -200;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 400;
			obj.position.z = -250;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 400;
			obj.position.z = -300;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 400;
			obj.position.z = -350;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 450;
			obj.position.z = -275;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 500;
			obj.position.z = -275;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -275;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -325;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -375;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -425;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -475;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -525;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -575;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -625;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -675;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -725;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -775;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -825;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -875;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 550;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 500;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 450;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 400;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 350;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 300;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 250;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 200;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 150;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 100;
			obj.position.z = -925;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 42;
			obj.position.x = 0;
			obj.position.z = -650;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 42;
			obj.position.x = 50;
			obj.position.z = -650;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 42;
			obj.position.x = -50;
			obj.position.z = -650;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 42;
			obj.position.x = 0;
			obj.position.z = -700;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 42;
			obj.position.x = 50;
			obj.position.z = -700;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 42;
			obj.position.x = -50;
			obj.position.z = -700;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 42;
			obj.position.x = 0;
			obj.position.z = -750;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 42;
			obj.position.x = 50;
			obj.position.z = -750;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 42;
			obj.position.x = -50;
			obj.position.z = -750;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -850;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -850;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -850;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -900;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -900;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -900;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -950;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -950;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -950;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 0;
			obj.position.z = -1000;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 50;
			obj.position.z = -1000;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Floor_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Floor'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -50;
			obj.position.z = -1000;

			scene.add(obj);
			console.log("Carregou Floor");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


///////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////// CASTLE //////////////////////////////////////////
	

	loaderFBX.load(
		'assets/Arch.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Arch'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 0;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Arch");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);

	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 75;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 75;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -75;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -75;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 143;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 143;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -143;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -143;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 193;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 193;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -193;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -193;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 243;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 243;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -243;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -243;
			obj.position.z = 12;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);

	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -25;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -25;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -75;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -75;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -125;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -125;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -175;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -175;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -225;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -225;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -275;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -275;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -325;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -325;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -375;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -375;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -425;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -425;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -475;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -475;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -263;
			obj.position.z = -525;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -263;
			obj.position.z = -525;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -225;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -225;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -175;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -175;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -125;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -125;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -100;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);

	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -100;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);

	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 225;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 225;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 175;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 175;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 125;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 125;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 100;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 100;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 263;
			obj.position.z = -525;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 263;
			obj.position.z = -525;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 263;
			obj.position.z = -475;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 263;
			obj.position.z = -475;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 263;
			obj.position.z = -425;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 263;
			obj.position.z = -425;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 263;
			obj.position.z = -375;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 263;
			obj.position.z = -375;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 263;
			obj.position.z = -175;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 263;
			obj.position.z = -175;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 263;
			obj.position.z = -125;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 263;
			obj.position.z = -125;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 263;
			obj.position.z = -75;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 263;
			obj.position.z = -75;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 263;
			obj.position.z = -25;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 263;
			obj.position.z = -25;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 295;
			obj.position.z = -363;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 295;
			obj.position.z = -363;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 345;
			obj.position.z = -363;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 345;
			obj.position.z = -363;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 395;
			obj.position.z = -363;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 395;
			obj.position.z = -363;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 295;
			obj.position.z = -187;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 295;
			obj.position.z = -187;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 345;
			obj.position.z = -187;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 345;
			obj.position.z = -187;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 395;
			obj.position.z = -187;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 395;
			obj.position.z = -187;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 413;
			obj.position.z = -322.5;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 413;
			obj.position.z = -322.5;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 413;
			obj.position.z = -227.5;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 413;
			obj.position.z = -227.5;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 435;
			obj.position.z = -255;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 435;
			obj.position.z = -255;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 450;
			obj.position.z = -255;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 450;
			obj.position.z = -255;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 500;
			obj.position.z = -255;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 500;
			obj.position.z = -255;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 550;
			obj.position.z = -255;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 550;
			obj.position.z = -255;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -280;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -280;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -330;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -330;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -380;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -380;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -430;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -430;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -480;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -480;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -530;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -530;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -580;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -580;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -630;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -630;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -680;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -680;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -730;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -730;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -780;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -780;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -830;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -830;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -880;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -880;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 570;
			obj.position.z = -925;

			obj.rotation.y = 4.755;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 570;
			obj.position.z = -925;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 550;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 550;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 500;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 500;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 450;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 450;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 400;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 400;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 350;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 350;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 300;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 300;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 250;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 250;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 200;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 200;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 150;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 150;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 100;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 100;
			obj.position.z = -945;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 435;
			obj.position.z = -295;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 435;
			obj.position.z = -295;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 450;
			obj.position.z = -295;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 450;
			obj.position.z = -295;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 500;
			obj.position.z = -295;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 500;
			obj.position.z = -295;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -315;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -315;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -365;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -365;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -415;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -415;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -465;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -465;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -515;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -515;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -565;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -565;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -615;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -615;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -665;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -665;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -715;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -715;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -765;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -765;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -815;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -815;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -865;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -865;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 531;
			obj.position.z = -875;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 531;
			obj.position.z = -875;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 510;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 510;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 460;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 460;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 410;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 410;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 360;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 360;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 310;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 310;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 260;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 260;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 210;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 210;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 160;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 160;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 150;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 150;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 100;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 100;
			obj.position.z = -905;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 77;
			obj.position.z = -590;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 77;
			obj.position.z = -590;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 77;
			obj.position.z = -640;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 77;
			obj.position.z = -640;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 77;
			obj.position.z = -690;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 77;
			obj.position.z = -690;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 77;
			obj.position.z = -740;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 77;
			obj.position.z = -740;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 77;
			obj.position.z = -790;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 77;
			obj.position.z = -790;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 77;
			obj.position.z = -840;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 77;
			obj.position.z = -840;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 77;
			obj.position.z = -885;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 77;
			obj.position.z = -885;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 77;
			obj.position.z = -965;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 77;
			obj.position.z = -965;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 77;
			obj.position.z = -1000;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 77;
			obj.position.z = -1000;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -590;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -590;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -640;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -640;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -690;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -690;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -740;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -740;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -790;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -790;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -840;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -840;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -890;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -890;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -940;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -940;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -990;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -990;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -77;
			obj.position.z = -1000;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -77;
			obj.position.z = -1000;

			obj.rotation.y = 4.75;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 0;
			obj.position.z = -1020;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 0;
			obj.position.z = -1020;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = 50;
			obj.position.z = -1020;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = 50;
			obj.position.z = -1020;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 22;
			obj.position.x = -50;
			obj.position.z = -1020;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Wall_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wall'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 72;
			obj.position.x = -50;
			obj.position.z = -1020;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Wall");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 108;
			obj.position.z = 8;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = -108;
			obj.position.z = 8;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 258;
			obj.position.z = 8;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = -258;
			obj.position.z = 8;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = -258;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = -80;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 80;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 258;
			obj.position.z = -558;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 258;
			obj.position.z = -358;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 410;
			obj.position.z = -358;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 258;
			obj.position.z = -192;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Column.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Column'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 410;
			obj.position.z = -192;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Column");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	loaderFBX.load(
		'assets/Stairs_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Stairs'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 20;
			obj.position.x = 0;
			obj.position.z = -600;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Stairs");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Stairs_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Stairs'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 20;
			obj.position.x = 50;
			obj.position.z = -600;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Stairs");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Stairs_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Stairs'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 20;
			obj.position.x = -50;
			obj.position.z = -600;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Stairs");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Stairs_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Stairs'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 20;
			obj.position.x = 0;
			obj.position.z = -800;

			obj.rotation.y = 9.43;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Stairs");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Stairs_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Stairs'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 20;
			obj.position.x = 50;
			obj.position.z = -800;

			obj.rotation.y = 9.43;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Stairs");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Stairs_Modular.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Stairs'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 20;
			obj.position.x = -50;
			obj.position.z = -800;

			obj.rotation.y = 9.43;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Stairs");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);

	
	///////////////////////////////////////////////////////////////////////////////////////////



	///////////////////////////////////// FURNITURE ///////////////////////////////////////////


	loaderFBX.load(
		'assets/Banner.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Banner'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 70;
			obj.position.z = 45;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Banner");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Banner.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Banner'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -70;
			obj.position.z = 45;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Banner");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Banner_wall.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Banner'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 85;
			obj.position.x = -180;
			obj.position.z = -5;

			obj.rotation.y = 3.15;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Banner");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Banner_wall.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Banner'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 85;
			obj.position.x = 180;
			obj.position.z = -5;

			obj.rotation.y = 3.15;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Banner");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Banner_wall.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Banner'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 85;
			obj.position.x = -180;
			obj.position.z = -545;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Banner");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Banner_wall.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Banner'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 85;
			obj.position.x = 180;
			obj.position.z = -545;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Banner");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	loaderFBX.load(
		'assets/Chest.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chest'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 370;
			obj.position.z = -320;

			obj.rotation.y = -1;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chest");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chest.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chest'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 370;
			obj.position.z = -220;

			obj.rotation.y = 1;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chest");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chest.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chest'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -35;
			obj.position.z = -865;

			obj.rotation.y = 2.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chest");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chest.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chest'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -45;
			obj.position.z = -925;

			obj.rotation.y = 1.55;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chest");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chest.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chest'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 35;
			obj.position.z = -975;

			obj.rotation.y = -1;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chest");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chest_Gold.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chest'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -30;
			obj.position.z = -975;

			obj.rotation.y = 1;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chest");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chest_Gold.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chest'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 30;
			obj.position.z = -865;

			obj.rotation.y = -2.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chest");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	


	loaderFBX.load(
		'assets/Table_Big.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Table'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 180;
			obj.position.z = -100;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Table");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Skull.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Skull'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 15;
			obj.position.x = 180;
			obj.position.z = -100;

			obj.rotation.y = 7.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Skull");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chair.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chair'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 180;
			obj.position.z = -40;

			obj.rotation.y = -2.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chair");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chair.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chair'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 215;
			obj.position.z = -85;

			obj.rotation.y = 4.7;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chair");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chair.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chair'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 215;
			obj.position.z = -115;

			obj.rotation.y = 4.7;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chair");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Chair.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Chair'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = 180;
			obj.position.z = -160;

			obj.rotation.y = 5.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Chair");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	loaderFBX.load(
		'assets/Statue_Horse.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Statue'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = -80;
			obj.position.z = -600;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Statue");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Statue_Horse.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Statue'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -3.6;
			obj.position.x = 80;
			obj.position.z = -600;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Statue");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	loaderFBX.load(
		'assets/Barrel.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Barrel'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -210;
			obj.position.z = -30;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Barrel");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Barrel.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Barrel'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -235;
			obj.position.z = -50;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Barrel");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Barrel.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Barrel'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -70;
			obj.position.z = -30;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Barrel");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Cobweb.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Cobweb'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -75;
			obj.position.z = -45;

			obj.rotation.y = 3.7;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Cobweb");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	


	loaderFBX.load(
		'assets/Spikes.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Spikes'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 45;
			obj.position.x = 0;
			obj.position.z = -650;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Spikes");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Spikes.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Spikes'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 45;
			obj.position.x = 50;
			obj.position.z = -650;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Spikes");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Spikes.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Spikes'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 45;
			obj.position.x = -50;
			obj.position.z = -650;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Spikes");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Spikes.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Spikes'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 45;
			obj.position.x = 0;
			obj.position.z = -700;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Spikes");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Spikes.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Spikes'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 45;
			obj.position.x = 50;
			obj.position.z = -700;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Spikes");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Spikes.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Spikes'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 45;
			obj.position.x = -50;
			obj.position.z = -700;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Spikes");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Spikes.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Spikes'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 45;
			obj.position.x = 0;
			obj.position.z = -750;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Spikes");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Spikes.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Spikes'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 45;
			obj.position.x = 50;
			obj.position.z = -750;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Spikes");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Spikes.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Spikes'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 45;
			obj.position.x = -50;
			obj.position.z = -750;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Spikes");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	loaderFBX.load(
		'assets/Crate.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Torch'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -220;
			obj.position.z = -250;

			obj.rotation.y = -2.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Torch");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Crate.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Torch'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -180;
			obj.position.z = -280;

			obj.rotation.y = -2.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Torch");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Crate.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Torch'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -220;
			obj.position.z = -310;

			obj.rotation.y = -2.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Torch");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Crate.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Torch'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 25;
			obj.position.x = -205;
			obj.position.z = -280;

			obj.rotation.y = -2.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Torch");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	loaderFBX.load(
		'assets/Sword_WallMount.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Torch'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 70;
			obj.position.x = -75;
			obj.position.z = 2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Torch");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	loaderFBX.load(
		'assets/Sword_WallMount.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Torch'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 70;
			obj.position.x = 75;
			obj.position.z = 10;

			obj.rotation.y = -3.1;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Torch");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	


	loaderFBX.load(
		'assets/Torch.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Torch'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -10.6;
			obj.position.x = 0;
			obj.position.z = -250;

			obj.rotation.y = -2.2;

			scene.add(new THREE.BoxHelper(obj, 0xffffff));
			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Torch");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	
	



	///////////////////////////////////////////////////////////////////////////////////////////


	//////////////////////////////////// ENVOIROMENT //////////////////////////////////////////


	//Load do Wolf
	loaderFBX.load(
		'../assets/wolf/Wolf.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['wolf'] = obj;

			let animation;

			mixer = new THREE.AnimationMixer(obj);
			animation = mixer.clipAction(obj.animations[0]);
			animationActions.push(animation);

			animation = mixer.clipAction(obj.animations[1]);
			animationActions.push(animation);

			animation = mixer.clipAction(obj.animations[2]);
			animationActions.push(animation);

			animation = mixer.clipAction(obj.animations[3]);
			animationActions.push(animation);

			animation = mixer.clipAction(obj.animations[4]);
			animationActions.push(animation);

			animation = mixer.clipAction(obj.animations[5]);
			animationActions.push(animation);

			activeAction = animation;

			//adiciona as animações a GUI
			animationFolder.add(parametrosGUI, "idle");
			animationFolder.add(parametrosGUI, "sit");
			animationFolder.add(parametrosGUI, "run");
			animationFolder.add(parametrosGUI, "walk");
			animationFolder.add(parametrosGUI, "creep");
			animationFolder.add(parametrosGUI, "seiNao");

			
			obj.traverse( function (child){
					
					if (child instanceof THREE.Mesh){
						//child.material = new THREE.MeshStandardMaterial();
						child.material.map = new THREE.TextureLoader().load("../assets/wolf/Wolf_Body.jpg");
						
						child.material.shininess = 0;
						child.castShadow = true;
						child.receiveShadow = true;
						console.log("Aqui lol");
					}
				}
			);

			 obj.scale.y = 0.1;
			 obj.scale.z = 0.1;
			 obj.scale.x = 0.1;

			obj.position.y = 50;
			obj.position.x = 0;
			obj.position.z = -800;

			char = new THREE.Group();
			char.add(camera);
			char.add(obj);
			
			obj.rotation.y-= Math.PI;
			charHelper =  new THREE.BoxHelper(obj, 0xff0000);
			scene.add(charHelper);

			charObj = obj;

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			// scene.add(objBox);
			charBounding = objBox;


			scene.add(char);
			console.log("Carregou Wolf");
			loadFinished = true;

		});


	loader.load(
		'../assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("../assets/texturas/Wood.jpg");
							child.material.shininess = 0;
							child.castShadow = true;
							child.receiveShadow = true;
						}
					});

			object.scale.x = 50;
			object.scale.y = 50;
			object.scale.z = 50;

			object.position.z = 100;
			object.position.x = 100;
			object.position.y = -7;

			object.castShadow = true;
			scene.add(new THREE.BoxHelper(object, 0xffffff));
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object.children[0]);
			staticBounding.push(objBox);

			scene.add(object);    
		},//metodo, tudo deu certo
		function(andamento) {
			console.log((andamento.loaded / andamento.total *100) + "% pronto!");
		},//metodo executa enquanto carrega
		function (error){
			console.log("Deu caca: " + error);
		} //metodo deu merda
	);
	loader.load(
		'../assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("../assets/texturas/Wood.jpg");
							child.material.shininess = 0;
							child.castShadow = true;
							child.receiveShadow = true;
						}
					});

			object.scale.x = 50;
			object.scale.y = 50;
			object.scale.z = 50;

			object.position.z = 100;
			object.position.x = -100;
			object.position.y = -7;

			object.castShadow = true;
			scene.add(new THREE.BoxHelper(object, 0xffffff));
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object.children[0]);
			staticBounding.push(objBox);

			scene.add(object);    
		},//metodo, tudo deu certo
		function(andamento) {
			console.log((andamento.loaded / andamento.total *100) + "% pronto!");
		},//metodo executa enquanto carrega
		function (error){
			console.log("Deu caca: " + error);
		} //metodo deu merda
	);
	loader.load(
		'../assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("../assets/texturas/Wood.jpg");
							child.material.shininess = 0;
							child.castShadow = true;
							child.receiveShadow = true;
						}
					});

			object.scale.x = 50;
			object.scale.y = 50;
			object.scale.z = 50;

			object.position.z = 100;
			object.position.x = 200;
			object.position.y = -7;

			object.castShadow = true;
			scene.add(new THREE.BoxHelper(object, 0xffffff));
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object.children[0]);
			staticBounding.push(objBox);

			scene.add(object);    
		},//metodo, tudo deu certo
		function(andamento) {
			console.log((andamento.loaded / andamento.total *100) + "% pronto!");
		},//metodo executa enquanto carrega
		function (error){
			console.log("Deu caca: " + error);
		} //metodo deu merda
	);
	loader.load(
		'../assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("../assets/texturas/Wood.jpg");
							child.material.shininess = 0;
							child.castShadow = true;
							child.receiveShadow = true;
						}
					});

			object.scale.x = 50;
			object.scale.y = 50;
			object.scale.z = 50;

			object.position.z = 100;
			object.position.x = -200;
			object.position.y = -7;

			object.castShadow = true;
			scene.add(new THREE.BoxHelper(object, 0xffffff));
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object.children[0]);
			staticBounding.push(objBox);

			scene.add(object);    
		},//metodo, tudo deu certo
		function(andamento) {
			console.log((andamento.loaded / andamento.total *100) + "% pronto!");
		},//metodo executa enquanto carrega
		function (error){
			console.log("Deu caca: " + error);
		} //metodo deu merda
	);
	loader.load(
		'../assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("../assets/texturas/Wood.jpg");
							child.material.shininess = 0;
							child.castShadow = true;
							child.receiveShadow = true;
						}
					});

			object.scale.x = 50;
			object.scale.y = 50;
			object.scale.z = 50;

			object.position.z = 150;
			object.position.x = 150;
			object.position.y = -7;

			object.castShadow = true;
			scene.add(new THREE.BoxHelper(object, 0xffffff));
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object.children[0]);
			staticBounding.push(objBox);

			scene.add(object);    
		},//metodo, tudo deu certo
		function(andamento) {
			console.log((andamento.loaded / andamento.total *100) + "% pronto!");
		},//metodo executa enquanto carrega
		function (error){
			console.log("Deu caca: " + error);
		} //metodo deu merda
	);
	loader.load(
		'../assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("../assets/texturas/Wood.jpg");
							child.material.shininess = 0;
							child.castShadow = true;
							child.receiveShadow = true;
						}
					});

			object.scale.x = 50;
			object.scale.y = 50;
			object.scale.z = 50;

			object.position.z = 150;
			object.position.x = -150;
			object.position.y = -7;

			object.castShadow = true;
			scene.add(new THREE.BoxHelper(object, 0xffffff));
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object.children[0]);
			staticBounding.push(objBox);

			scene.add(object);    
		},//metodo, tudo deu certo
		function(andamento) {
			console.log((andamento.loaded / andamento.total *100) + "% pronto!");
		},//metodo executa enquanto carrega
		function (error){
			console.log("Deu caca: " + error);
		} //metodo deu merda
	);



};
//troca a ação do nosso modelo
const setAction = function(toAction) {
    if (toAction != activeAction) {
        lastAction = activeAction;
        activeAction = toAction;
        lastAction.stop();
        activeAction.reset();
        activeAction.play();
    }
}

var ambientLightOn = function (){
	lights['ambient'] = new THREE.AmbientLight(0xffffff, 2.5);
	scene.add(lights['ambient']);
}

var directionalLightOn = function () {
	let light = new THREE.DirectionalLight(0xffffff, 0.3);
	light.castShadow = true;
	light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    light.shadow.camera.left = 1000;
    light.shadow.camera.bottom = 1000;
    light.shadow.camera.right = -1000
    light.shadow.camera.top = -1000;

	light.position.y = 200;
	light.position.x = 100;
	light.target = ground;

	scene.add(light);
	scene.add(light.target)

	lights['directional'] = light;
}

var spotLightOn = function(){
	let spot = new THREE.SpotLight(0xffffff, 0);
	spot.angle = 0.3;
	spot.castShadow = true;

	spot.position.z = 40;
	spot.position.y = 15;

	spot.shadow.distance = 20;
	spot.shadow.penumbra = 30;
	spot.shadow.angle = 25;
	
	spot.target.position.set(0,5,0);

	lights['spot'] = spot;
	scene.add(spot);
}

var pointLightOn = function (){
	let point = new THREE.PointLight(0xffffff, 3, 200);
	lights['point'] = point;
	point.castShadow = true;
	point.position.y=10;
	point.position.z = 10;

	scene.add(point);
}

var godSaysLightsOn = function (){
	directionalLightOn();
	//spotLightOn();
	//pointLightOn();
	ambientLightOn();
}


var init = function (){
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xcce0ff);
	
	
//	Camera em perspectiva
	camera = new THREE.PerspectiveCamera(
						50, // view angle
						window.innerWidth/window.innerHeight, //aspect ratio
						1, //near
						5000 //far
					);

	
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.shadowMap.enabled = true;
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
		
	camera.position.z = 300;
	camera.position.x = 0;
	camera.position.y = 10;

	objLoading();

	animation();

	
	//criar um piso.
	let textureLoad = new THREE.TextureLoader();
	let groundTexture = textureLoad.load("../assets/texturas/terrain/grasslight-big.jpg"); //busca a imagem
	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; //quero que ela se repita
	groundTexture.encoding = THREE.sRGBEncoding; //padrão cores, sempre que existir será informado
	groundTexture.repeat.set(25,25); //número de vezes que ela vai se repetir dentro do nosso chão
	
	let materialGround = new THREE.MeshLambertMaterial({map: groundTexture});
	materialGround.normalMap = textureLoad.load("../assets/texturas/terrain/grasslight-big-nm.jpg"); //busca a normal, que da noção básica de profundidade
	
	
	ground = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(5000,5000),
		materialGround
	);
	ground.receiveShadow = true;//chao recebe as sombras.
	ground.rotation.x = - Math.PI/2;
	ground.position.y-=7.5;
	scene.add(ground);
	godSaysLightsOn();

	//camera.add(lights["spot"]);

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	//scene.fog = new THREE.Fog(0xcce0ff, 100, 500);

	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);

};



var key_r = false;
var key_space = false;
var key_q = false;
var keys = [];

var soltouBotao = function(e){

	if (e.keyCode == 82){ //r
		key_r = false;
	}
	if (e.keyCode == 32){ //espaço
		key_space = false;
	}
	if (e.keyCode == 81){ //espaço
		setAction(animationActions[1]);
		wolfVelocity= 0.05;
	}
	if (e.keyCode == 38){ //douwn
		keys['down'] = false;
		setAction(animationActions[4]);
		//elementos["puppet"]["tronco"].position.z += 1;
	}
	if (e.keyCode == 40){ // UP
		keys['up'] = false;
		setAction(animationActions[4]);
		
	}
}


var apertouButao =  function(e){
	console.log(e.keyCode);

	if (e.keyCode == 82){ //r
		elementos['cerberus'].rotation.x+=0.1;
		key_r = true;
	}
	if (e.keyCode == 32){ // space
		setAction(animationActions[0]);
		wolfVelocity= 0.2;
	}

	if (e.keyCode == 81){ // q
		key_q = true;		
	}

	if (e.keyCode == 38){ //douwn
		keys['down'] = true;
		setAction(animationActions[1]);
		//elementos["puppet"]["tronco"].position.z += 1;
	}
	if (e.keyCode == 40){ // UP
		setAction(animationActions[1]);
		keys['up'] = true;
		
	}
	if (e.keyCode == 37){ //left
		char.position.x-=0.1;
	}
	if (e.keyCode == 39){ // right
		char.position.x+=0.1;
		
	}
}

var count =0; 
var velocidadeOmbroDireitoC = -0.01;
var velocidadeOmbroDireitoL = -0.01;
var pulando = false;
var velocidadePulo = 0.5;
var altura = -1;
var animation = function (){
	requestAnimationFrame(animation); 

	let delta = clock.getDelta();

	if (loadFinished){
		mixer.update(delta);

		if (keys['up'] == true){
			char.position.z+=wolfVelocity;
		}else if(keys['down'] == true){
			char.position.z-=wolfVelocity;
		}
		charHelper.update();
		charBounding.setFromObject(elementos['wolf'].children[0]);

		//teste de colisao
		staticBounding.forEach(function(item){
			if (item.intersectsBox(charBounding)){
				setAction(animationActions[3]);
				activeAction.clampWhenFinished = true;
				activeAction.loop = THREE.LoopOnce;

				// let cube = elementos['wolf'].children[0];

				//  for (var vertexIndex = 0; vertexIndex < elementos['wolf'].children[0].geometry.vertices.length; vertexIndex++) {
				// 		var localVertex = cube.geometry.vertices[vertexIndex].clone();
				// 		var globalVertex = localVertex.applyMatrix4(cube.matrix);
				// 		var directionVector = globalVertex.sub(cube.position);
	
				// 		var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
				// 		var collisionResults = ray.intersectObjects(elementos);
				// 		if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()) {
				// 			console.log(collisionResults[0].object.name);
				// 			console.log("CHupa");
				// 			collisionResults[0].object.material.transparent = true;
				// 			collisionResults[0].object.material.opacity = 0.4;
				// 		}
				// 	}
			}
		});
	}
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init