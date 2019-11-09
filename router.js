function route(handle, pathname){
    console.log("A punto de routear una peticion para: " + pathname);
    if (typeof handle[pathname] == 'function'){
        return handle[pathname]();
    } else{
        console.log("No se encontro manipulador para " + pathname);
        return "404 Not found";
    }
}

exports.route = route;