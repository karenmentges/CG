var criaMonstro = function(){
    let puppet = [];

    let tronco = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 2), new THREE.MeshBasicMaterial({color: 0x0000ff}));
    puppet["tronco"] = tronco;

    let cabeca = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({color: 0x0000ff}));
    puppet["cabeca"] = cabeca;
    tronco.add(cabeca);
    cabeca.position.y = tronco.position.y + 5;

    // Braço direito
    let ombroD =  new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0x0000ff}));
    puppet["ombroD"] = ombroD;
    tronco.add(ombroD);
    ombroD.position.x = tronco.position.x + 3;
    ombroD.position.y = tronco.position.y + 3;

    let pivotOmbroD = new THREE.Group();
    puppet["pivotOmbroD"] = pivotOmbroD;
    ombroD.add(pivotOmbroD);

    let braçoD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0x0000ff}));
    puppet["braçoD"] = braçoD;
    pivotOmbroD.add(braçoD);
    pivotOmbroD.position.y = tronco.position.y - 2,7;



    elementos["puppet"] = puppet;
    scene.add(tronco);
}

velocidadeOmbroDireitoC = -0.2;
velocidadeOmbroDireitoL = -0.2;
var animation = function (){
    if(key_space){ // movimento para frente
        if(elementos["puppet"]["pivotOmbroD"].position.x < -2.83 || elementos["puppet"]["pivotOmbroD"].position.x > 1.3){
            velocidadeOmbroDireitoC *= -1;
        }
        elementos["puppet"]["pivotOmbroD"].position.x += velocidadeOmbroDireitoC;
        console.log(elementos["puppet"]["pivotOmbroD"].position.x);
        
    }
    if(key_r){ // movimento para o lado
        if(elementos["puppet"]["pivotOmbroD"].position.x < 0 || elementos["puppet"]["pivotOmbroD"].position.x > 1.4){
            velocidadeOmbroDireitoL *= -1;
        }
        elementos["puppet"]["pivotOmbroD"].position.z += velocidadeOmbroDireitoL;
        console.log(elementos["puppet"]["pivotOmbroD"].position.x);

    }

    
}