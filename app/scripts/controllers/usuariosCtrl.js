  angular.module('angularApp')
    .controller('UsuariosCtrl', function($scope, $rootScope, usuariosService, $routeParams, $window){
        $scope.usuarios = [];
        $scope.usuario ={};
        
        $scope.validacionLogin = function(){
       $rootScope.user = {};    

          if($scope.usuario.email0 == "user@email.com" && $scope.usuario.password0==1234){
            $rootScope.user.tipo = 0;
            $window.location.href = '/#/home';
          }else{
            if($scope.usuario.email0 == "admin@email.com" && $scope.usuario.password0==1234){
              $rootScope.user.tipo = 1;
            $window.location.href = '/#/home';
          }else{
                        alert("Login inválido");
          }
        }
        };

        $scope.logout = function(){
        $rootScope.user = {};          
        $window.location.href = '/#/login';
        };

        $scope.postUsuarios = function(){ 

                var fechaNac1 = new Date($scope.usuario.fechaNac).toISOString().slice(0,10);

                dataPost= {
                  apellido: $scope.usuario.apellido, 
                  direccion: $scope.usuario.direccion,
                  email: $scope.usuario.email,
                  fechaNac: fechaNac1,
                  nombre: $scope.usuario.nombre,
                  password: $scope.usuario.password,
                  telefono: $scope.usuario.telefono,
                  tipo: 0,
                  userIdComuna: $scope.usuario.userIdComuna
                }                
                  
            usuariosService.postUsuarios(dataPost)
                .success(function(data){
                    console.log(data);
                    alert("Usted se ha registrado con éxito");
                })
                .error(function(error){
                    $scope.status = 'Error al consultar por usuarios';
                });

                $scope.usuario ={};
           
        };
        $scope.putUsuarios = function(){

                var fechaNac1 = new Date($scope.usuario.fechaNac).toISOString().slice(0,10);
                idUser = 17;

                dataPut= {
                  apellido: $scope.usuario.apellido, 
                  direccion: $scope.usuario.direccion,
                  email: $scope.usuario.email,
                  fechaNac: fechaNac1,
                  nombre: $scope.usuario.nombre,
                  password: $scope.usuario.password2,
                  telefono: $scope.usuario.telefono,
                  tipo: 0,
                  userIdComuna: $scope.usuario.userIdComuna
                }                
                  
            usuariosService.putUsuarios(idUser,dataPut)
                .success(function(data){
                    console.log(data);
                    alert("Usted se ha editado con éxito");
                })
                .error(function(error){
                    $scope.status = 'Error al consultar por usuarios';
                });
           
        };
        $scope.putUsuarios2 = function(){             
                  
            usuariosService.putUsuarios2()
                .success(function(data){
                    console.log(data);
                    alert("Usted se ha editado con éxito");
                })
                .error(function(error){
                    $scope.status = 'Error al consultar por usuarios';
                });
           
        };
        function getUsuarios(){
            usuariosService.getUsuarios()
            .success(function(data){
                $scope.usuarios = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por usuarios';
            });
        }
        getUsuarios();
        function getIdUsuario(){
            usuariosService.getIdUsuario($routeParams.id)
            .success(function(data){
                $scope.usuario = data;
                console.log($scope.usuario.idUsuario);
            });
        }
        getIdUsuario();


    });