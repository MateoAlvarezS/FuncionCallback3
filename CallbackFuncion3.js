(function(){
    'use strict';

    var callback3 = {
        //Callback con nombre aleatorio
        nombre_aleatorio: function(callback) {
            var names = [
                "Mateo",
                "Juanes",
                "Stiven"]
            // Devuelve los nombres
            callback(names[callback]);
        }
    };
    
    // Se llama la funcion
    callback3.nombre_aleatorio(2, function(name){
        logResult("nombre_aleatorio", name);
    });
})();