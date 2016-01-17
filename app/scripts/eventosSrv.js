angular.module('angularApp')
    .service('eventosService', function($http){
        var urlEventos = 'http://localhost:8080/COMUNIbackend/eventos/';
        var urlComentarios = 'http://localhost:8080/COMUNIbackend/comentarios/';
        this.getEventos = function(){
            return $http.get(urlEventos);
        };
        this.getIdEvento = function(idEvento){
            return $http.get(urlEventos+idEvento);
        };
        this.postEventos = function(JSON){
            return $http.post(urlEventos,JSON);
        };
        this.getComentarios = function(){
            return $http.get(urlComentarios);
        };
        this.getIdComentario = function(idComentario){
            return $http.get(urlComentarios+idComentario);
        };
        this.postComentarios = function(JSON){
            return $http.post(urlComentarios,JSON);
        };
        this.putEvento = function(idEvento,JSON){
            return $http.put(urlEventos+idEvento,JSON);
        };
		//this.postEventosxd = function(){
        //    return $http.post(urlEventos,{"descripcion": "ESTO ES POST EVENTOS 3","direccion": "asdasd","eventoComunaId": 23,"latitud": "-33.431210","longitud": "-70.608281","pathImagen": "img2.jpg","titulo": "Partido de leyendas a beneficio","estado": 0,"popularidad" : 0});
        //};
        

	});
