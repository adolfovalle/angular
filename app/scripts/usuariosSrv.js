angular.module('angularApp')
    .service('usuariosService', function($http){
        var urlBase = 'http://localhost:8080/COMUNIbackend/usuarios/';
        this.getUsuarios = function(){
            return $http.get(urlBase);
        };
        this.getIdUsuario = function(idUsuario){
            return $http.get(urlBase+idUsuario);
        };
        this.postUsuarios = function(JSON){
            return $http.post(urlBase,JSON);
        };
        this.putUsuarios = function(idUser,JSON){
            return $http.put(urlBase+idUser,JSON);
        };
        this.postUsuarios2 = function(){
            return $http.post(urlBase,{"apellido":"madman","direccion":"Privada Maridasda No. 882","email":"mail@mail.com","fechaNac":"1981-12-08","nombre":"Juanoso","password":"pass1","telefono":"+56(656)-6335404","tipo":0,"userId":9,"userIdComuna":4});
        };
        this.putUsuarios2 = function(){
            return $http.put(urlBase+1,{"apellido":"PUT","direccion":"Privada Maridasda No. 882","email":"mail@mail.com","fechaNac":"1981-12-08","nombre":"Juanoso","password":"pass1","telefono":"+56(656)-6335404","tipo":0,"userIdComuna":4});
        };
        
	});
