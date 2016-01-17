(function(){

    angular.module('angularApp', ['ngRoute',])
	
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/eventos.html',
            controller: 'EventosCtrl'
          })
        .when('/registro', {
            templateUrl: 'views/registro.html',
            controller: 'UsuariosCtrl'
          })
        .when('/eventos/:id', {
            templateUrl:'views/detailsEvento.html',
            controller:'EventosCtrl',
        })
        .when('/login', {
            templateUrl:'views/login.html',
            controller:'UsuariosCtrl',
        })
        .when('/editarperfil', {
            templateUrl:'views/editarperfil.html',
            controller:'UsuariosCtrl',
        })
        .when('/solicitud', {
            templateUrl:'views/solicitud.html',
            controller:'EventosCtrl',
        })
        .when('/crearevento', {
            templateUrl:'views/crearevento.html',
            controller:'EventosCtrl',
        })
        .when('/solicitudes', {
            templateUrl:'views/solicitudes.html',
            controller:'EventosCtrl',
        })
        .otherwise({
            redirectTo: '/login'
          });
    });

})();