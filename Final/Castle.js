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

var wizardVelocity = 5;

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
	

// Carrega a entrada
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

			scene.add(obj);
			console.log("Carregou Arch");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);

// Carrega as paredes
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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

			scene.add(obj);
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
			elementos['Crate'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -220;
			obj.position.z = -250;

			obj.rotation.y = -2.2;

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			staticBounding.push(objBox);
			console.log("Carregou Crate");

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
			elementos['Crate'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -180;
			obj.position.z = -280;

			obj.rotation.y = -2.2;

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			staticBounding.push(objBox);
			console.log("Carregou Crate");

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
			elementos['Crate'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = -5.6;
			obj.position.x = -220;
			obj.position.z = -310;

			obj.rotation.y = -2.2;

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			staticBounding.push(objBox);
			console.log("Carregou Crate");

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
			elementos['Crate'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 25;
			obj.position.x = -205;
			obj.position.z = -280;

			obj.rotation.y = -2.2;

			scene.add(obj);
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			staticBounding.push(objBox);
			console.log("Carregou Crate");

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
			elementos['Sword'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 70;
			obj.position.x = -75;
			obj.position.z = 2;

			scene.add(obj);
			console.log("Carregou Sword");

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
			elementos['Sword'] = obj;

			obj.scale.y = 0.25;
			obj.scale.z = 0.25;
			obj.scale.x = 0.25;

			obj.position.y = 70;
			obj.position.x = 75;
			obj.position.z = 10;

			obj.rotation.y = -3.1;

			scene.add(obj);
			console.log("Carregou Sword");

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

			obj.position.y = 60;
			obj.position.x = -108;
			obj.position.z = 25;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = 108;
			obj.position.z = 25;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = -108;
			obj.position.z = -10;

			obj.rotation.y = 3.2;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = 108;
			obj.position.z = -10;

			obj.rotation.y = 3.2;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = -250;
			obj.position.z = -192;

			obj.rotation.y = 1.6;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = 240;
			obj.position.z = -192;

			obj.rotation.y = -1.6;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = -250;
			obj.position.z = -358;

			obj.rotation.y = 1.6;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = 240;
			obj.position.z = -358;

			obj.rotation.y = -1.6;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = -80;
			obj.position.z = -538;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = 80;
			obj.position.z = -538;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = 560;
			obj.position.z = -275;

			obj.rotation.y = -1.6;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = 550;
			obj.position.z = -935;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = 0;
			obj.position.z = -1010;

			scene.add(obj);
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

			obj.position.y = 60;
			obj.position.x = -60;
			obj.position.z = -900;

			obj.rotation.y = 1.6;

			scene.add(obj);
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


	loader.load(
		'assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("texture/Wood.jpg");
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
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object);
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
		'assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("texture/Wood.jpg");
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
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object);
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
		'assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("texture/Wood.jpg");
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
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object);
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
		'assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("texture/Wood.jpg");
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
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object);
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
		'assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("texture/Wood.jpg");
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
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object);
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
		'assets/tree.obj', //arquivo que vamos carregar
		function(object){
			
			object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshLambertMaterial();
							child.material.map = new THREE.TextureLoader().load("texture/Wood.jpg");
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
			object.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(object);
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
	
	
	///////////////////////////////////////////////////////////////////////////////////////////

	loaderFBX.load(
		'wizard/Wizard_Idle.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Wizard'] = obj;

			let animation;

			mixer = new THREE.AnimationMixer(obj);

			console.log(obj);

			animation = mixer.clipAction(obj.animations[0]);
			animationActions.push(animation);
			activeAction = animation;
			setAction(animation);


			loaderFBX.load(
						'wizard/Wizard_Jump.fbx', //arquivo que vamos carregar
						function(object){
							let animationAction = mixer.clipAction((object).animations[0]);
							animationActions.push(animationAction)        
							loaderFBX.load(
								'wizard/Wizard_Damage.fbx', //arquivo que vamos carregar
								function(object){
									let animationAction = mixer.clipAction((object).animations[0]);
									animationActions.push(animationAction)         
									activeAction = animationAction;
									setAction(animationAction);
									loaderFBX.load(
										'wizard/Wizard_Walking.fbx', //arquivo que vamos carregar
										function(object){
											let animationAction = mixer.clipAction((object).animations[0]);
											animationActions.push(animationAction)         
											activeAction = animationAction;
											setAction(animationAction);
											loaderFBX.load(
												'wizard/Wizard_Attack.fbx', //arquivo que vamos carregar
												function(object){
													let animationAction = mixer.clipAction((object).animations[0]);
													animationActions.push(animationAction)         
													activeAction = animationAction;
													setAction(animationAction);
													loaderFBX.load(
														'wizard/Wizard_Dead.fbx', //arquivo que vamos carregar
														function(object){
															let animationAction = mixer.clipAction((object).animations[0]);
															animationActions.push(animationAction)         
															activeAction = animationAction;
															setAction(animationAction);
														});
												});
										});
								});
						});

			
			// adiciona as animações a GUI
			// animationFolder.add(parametrosGUI, "idle");
			// animationFolder.add(parametrosGUI, "Jump");
			// animationFolder.add(parametrosGUI, "Damage");
			// animationFolder.add(parametrosGUI, "Walking");
			// animationFolder.add(parametrosGUI, "Attack");
			// animationFolder.add(parametrosGUI, "Dead");
			let cont = 0;
			
			obj.traverse( function (child){
					
					if (child instanceof THREE.Mesh){
						//child.material = new THREE.MeshStandardMaterial();
						child.material.map = new THREE.TextureLoader().load("wizard/UVWizard.png");
						
						child.material.shininess = 0;
						child.castShadow = true;
						child.receiveShadow = true;
						console.log("Aqui lol " + ++cont);
					}
				}
			);

			obj.scale.y = 0.03;
			obj.scale.z = 0.03;
			obj.scale.x = 0.03;

			obj.position.y = -2;

			char = new THREE.Group();
			char.add(camera);
			char.add(obj);
			
			obj.rotation.y-= Math.PI;

			charObj = obj;
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			charBounding = objBox;

			scene.add(char);
			console.log("Carregou Wizard");
			loadFinished = true;

		});

};
//troca a ação do nosso modelo
const setAction = function(toAction) {
    if (toAction != activeAction) {
        lastAction = activeAction;
        activeAction = toAction;
		if (toAction == animationActions[5]){ //se é a morte toca uma vez só
			activeAction.clampWhenFinished = true;
			activeAction.loop = THREE.LoopOnce;
		}else{
			activeAction.clampWhenFinished = false;
			activeAction.loop = THREE.LoopRepeat ;
		}
        lastAction.stop();
        activeAction.reset();
        activeAction.play();
    }
}

var ambientLightOn = function (){
	lights['ambient'] = new THREE.AmbientLight(0xffffff, 1);
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

var pointLightOn = function (){
	let point1 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point1'] = point1;
	point1.castShadow = true;
	point1.position.set(-235, 65, -192);
	scene.add(point1);

	let point2 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point2'] = point2;
	point2.castShadow = true;
	point2.position.set(225, 65, -192);
	scene.add(point2);

	let point3 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point3'] = point3;
	point3.castShadow = true;
	point3.position.set(-235, 65, -358);
	scene.add(point3);

	let point4 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point4'] = point4;
	point4.castShadow = true;
	point4.position.set(225, 65, -358);
	scene.add(point4);

	let point5 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point5'] = point5;
	point5.castShadow = true;
	point5.position.set(-108, 65, -25);
	scene.add(point5);

	let point6 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point6'] = point6;
	point6.castShadow = true;
	point6.position.set(108, 65, -25);
	scene.add(point6);

	let point7 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point7'] = point7;
	point7.castShadow = true;
	point7.position.set(-108, 65, 40);
	scene.add(point7);

	let point8 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point8'] = point8;
	point8.castShadow = true;
	point8.position.set(108, 65, 40);
	scene.add(point8);

	let point9 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point9'] = point9;
	point9.castShadow = true;
	point9.position.set(-80, 65, -523);
	scene.add(point9);

	let point10 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point10'] = point10;
	point10.castShadow = true;
	point10.position.set(80, 65, -523);
	scene.add(point10);

	let point11 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point11'] = point11;
	point11.castShadow = true;
	point11.position.set(545, 65, -275);
	scene.add(point11);

	let point12 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point12'] = point12;
	point12.castShadow = true;
	point12.position.set(550, 65, -920);
	scene.add(point12);

	let point13 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point13'] = point13;
	point13.castShadow = true;
	point13.position.set(0, 65, -995);
	scene.add(point13);

	let point14 = new THREE.PointLight(0xffa500, 1.5, 150);
	lights['point14'] = point14;
	point14.castShadow = true;
	point14.position.set(-45, 65, -900);
	scene.add(point14);
}

var godSaysLightsOn = function (){
	directionalLightOn();
	ambientLightOn();
	pointLightOn();
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
		
	camera.position.z = 100;
	camera.position.x = 0;
	camera.position.y = 10;

	objLoading();

	animation();

	
	//criar um piso.
	let textureLoad = new THREE.TextureLoader();
	let groundTexture = textureLoad.load("texture/grasslight-big.jpg"); //busca a imagem
	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; //quero que ela se repita
	groundTexture.encoding = THREE.sRGBEncoding; //padrão cores, sempre que existir será informado
	groundTexture.repeat.set(25,25); //número de vezes que ela vai se repetir dentro do nosso chão
	
	let materialGround = new THREE.MeshLambertMaterial({map: groundTexture});
	materialGround.normalMap = textureLoad.load("texture/grasslight-big-nm.jpg"); //busca a normal, que da noção básica de profundidade
	
	
	ground = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(5000,5000),
		materialGround
	);
	ground.receiveShadow = true;//chao recebe as sombras.
	ground.rotation.x = - Math.PI/2;
	ground.position.y-=7.5;
	scene.add(ground);
	godSaysLightsOn();

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	//scene.fog = new THREE.Fog(0xcce0ff, 100, 500);

	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);

};


var key_space = false;
var keys = [];

var soltouBotao = function(e){

	if (e.keyCode == 32){ //espaço
		setAction(animationActions[4]);
		wolfVelocity = 0.05;
	}
	if (e.keyCode == 38){ //down
		keys['down'] = false;
		setAction(animationActions[0]);
	}
	if (e.keyCode == 40){ // up
		keys['up'] = false;
		setAction(animationActions[0]);
		
	}
	if (e.keyCode == 87){ // w
		keys['w'] = false;		
	}
	if (e.keyCode == 83){ // s
		keys['s'] = false;
	}
	if (e.keyCode == 65){ // a
		keys['a'] = false;
	}
	if (e.keyCode == 68){ // d
		keys['d'] = false;
	}
}

var apertouButao =  function(e){
	console.log(e.keyCode);

	if (e.keyCode == 32){ // space
		setAction(animationActions[0]);
		wizardVelocity = 1;
	}
	if (e.keyCode == 38){ //down
		keys['down'] = true;
		setAction(animationActions[3]);
	}
	if (e.keyCode == 40){ // up
		setAction(animationActions[3]);
		keys['up'] = true;
		
	}
	if (e.keyCode == 37){ //left
		char.position.x -= 0.5;
	}
	if (e.keyCode == 39){ // right
		char.position.x += 0.5;
		
	}
	if (e.keyCode == 87){ // w
		keys['w'] = true;
		camera.rotation.x += 0.1;
	}
	if (e.keyCode == 83){ // s
		keys['s'] = true;
		camera.rotation.x -= 0.1;
	}
	if (e.keyCode == 65){ // a
		keys['a'] = true;
		char.rotation.y -= 0.1;
	}
	if (e.keyCode == 68){ // d
		keys['d'] = true;
		char.rotation.y += 0.1;
	}
}

var animation = function (){
	requestAnimationFrame(animation); 

	let delta = clock.getDelta();

	if (loadFinished){
		mixer.update(delta);

		if (keys['up'] == true){
			char.position.z += wizardVelocity;
		}else if(keys['down'] == true){
			char.position.z -= wizardVelocity;
		}
		charBounding.setFromObject(elementos['Wizard']);

		//teste de colisao
		staticBounding.forEach(function(item){
			if (item.intersectsBox(charBounding)){
				setAction(animationActions[5]);
			}
		});
	}
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init