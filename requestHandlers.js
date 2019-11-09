function iniciar(){
    console.log("Manipulador de peticion 'iniciar' ha sido llamado.");
    return"Hola subir";
}


function subir(){
    console.log("Manipulador de peticion 'subir' ha sido llamado.");
    return"Hola subir";
}



exports.subir = subir;

exports.iniciar = iniciar;