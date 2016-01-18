  angular.module('angularApp')
    .controller('EventosCtrl', function($scope, eventosService, $routeParams, $route){
        $scope.eventos = [];
        $scope.evento = {};
        $scope.comentarios = [];
        $scope.comentario = {};
        $scope.postComentarios= function(){ 

            // Transformacion a hora local
            var currentDate = new Date();
            var timezoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;
            date = new Date(currentDate - timezoneOffset);
            var hora = new Date(date).toISOString().replace('Z', '').replace('T', ' ');
            hora.substr(0, hora.length - 2);


             dataComentario= {
               comentarioEventoId: $scope.evento.eventId,
               comentarioUsuarioId: '17',
               fechaComentario: hora,
               textoComentario: $scope.comentario.texto
            }
                  
            eventosService.postComentarios(dataComentario)
                .success(function(data){
                    console.log(data);
                    alert("Comentario registrado con éxito");
                    $route.reload();
                })
                .error(function(error){
                    $scope.status = 'Error';
                });
                $scope.comentario = {};

        };
         $scope.postEventos3 = function(){ 

            eventosService.postEventosxd()
                .success(function(data){
                    console.log(data);
                    alert("Evento se ha registrado con éxito");
                })
                .error(function(error){
                    $scope.status = 'Error';
                });
           
        };
        $scope.postEventos0 = function(){ 

            // Transformacion a hora local
            var currentDate = new Date();
            var timezoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;
            var date1 = new Date($scope.evento.fecha1);
            date1 = new Date(date1.getTime() - timezoneOffset);
            var date2 = new Date($scope.evento.fecha2);
            date2 = new Date(date2.getTime() - timezoneOffset);

            var hora1 = new Date(date1).toISOString().replace('Z', '').replace('T', ' ');
            hora1.substr(0, hora1.length - 2);
            var hora2 = new Date(date2).toISOString().replace('Z', '').replace('T', ' ');
            hora2.substr(0, hora2.length - 2);

                dataPost= {
                    descripcion: $scope.evento.descripcion,
                    direccion: $scope.evento.direccion,
                    eventoComunaId: $scope.evento.comuna,
                    horaInicio: hora1,
                    horaTermino: hora2,
                    latitud: $scope.evento.latitud,
                    longitud: $scope.evento.longitud,
                    pathImagen: $scope.evento.foto,
                    titulo: $scope.evento.titulo,
                    estado: 0,
                    popularidad : 0
                    }  
                  
            eventosService.postEventos(dataPost)
                .success(function(data){
                    console.log(data);
                    alert("Evento se ha registrado con éxito");
                })
                .error(function(error){
                    $scope.status = 'Error';
                });

                $scope.evento = {};
           
        };
        $scope.postEventos1 = function(){ 

            // Transformacion a hora local
            var currentDate = new Date();
            var timezoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;
            var date1 = new Date($scope.evento.fecha1);
            date1 = new Date(date1.getTime() - timezoneOffset);
            var date2 = new Date($scope.evento.fecha2);
            date2 = new Date(date2.getTime() - timezoneOffset);

            var hora1 = new Date(date1).toISOString().replace('Z', '').replace('T', ' ');
            hora1.substr(0, hora1.length - 2);
            var hora2 = new Date(date2).toISOString().replace('Z', '').replace('T', ' ');
            hora2.substr(0, hora2.length - 2);


                dataPost= {
                    descripcion: $scope.evento.descripcion,
                    direccion: $scope.evento.direccion,
                    eventoComunaId: $scope.evento.comuna,
                    horaInicio: hora1,
                    horaTermino: hora2,
                    latitud: $scope.evento.latitud,
                    longitud: $scope.evento.longitud,
                    pathImagen: $scope.evento.foto,
                    titulo: $scope.evento.titulo,
                    estado: 1,
                    popularidad : 0
                    }
                  
            eventosService.postEventos(dataPost)
                .success(function(data){
                    console.log(data);
                    alert("Evento se ha registrado con éxito");
                })
                .error(function(error){
                    $scope.status = 'Error';
                });
                
                $scope.evento = {};

        };
        $scope.putEvento = function(){


            idEvento = $scope.evento.eventId;

                dataPut= {
                    descripcion: $scope.evento.descripcion,
                    direccion: $scope.evento.direccion,
                    eventoComunaId: $scope.evento.eventoComunaId,
                    horaInicio: $scope.evento.horaInicio,
                    horaTermino: $scope.evento.horaTermino,
                    latitud: $scope.evento.latitud,
                    longitud: $scope.evento.longitud,
                    pathImagen: $scope.evento.foto,
                    titulo: $scope.evento.titulo,
                    estado: 1,
                    popularidad: $scope.evento.popularidad
                    }             
                  
            eventosService.putEvento(idEvento,dataPut)
                .success(function(data){
                    console.log(data);
                    alert("Evento aprobado");
                })
                .error(function(error){
                    $scope.status = 'Error al consultar por evento';
                });
           
        };
        function getEventos(){
            eventosService.getEventos()
            .success(function(data){
                $scope.eventos = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por eventos';
            });
        }
        getEventos();
        function getIdEvento(){
            eventosService.getIdEvento($routeParams.id)
            .success(function(data){
                $scope.evento = data;
                console.log( $scope.evento.idEvento);
            });
        }
        getIdEvento();
        function getComentarios(){
            eventosService.getComentarios()
            .success(function(data){
                $scope.comentarios = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por comentarios';
            });
        }
        getComentarios();        
        function getIdComentario(){
            eventosService.getIdComentario($routeParams.id)
            .success(function(data){
                $scope.comentario = data;
                console.log( $scope.comentario.comentarioId);
            });
        }
        getIdComentario();
    });