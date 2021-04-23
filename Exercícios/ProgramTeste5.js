var elementos = [];

var objLoading = function(){
    loader = new THREE.OBJLoader();

    loader.load('assests/Monkey_Suzanne.obj', //arquivo que vamos buscar
                function(obj){
                    //atribui a cena, colore, reposiciona, rotaciona
                    elementos['suzzane'] = obj;

                    obj.position.y = 5.4
                    obj.position.z = 2;
                    
                    screen.add(obj);
                } //oque acontece quando terminar
                //o que acontece enquanto esta carregando
                //o que acontece se der merda)
}











