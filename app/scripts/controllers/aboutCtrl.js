(function(){
    angular.module('angularApp')
    .controller('AboutCtrl', function($scope){
        $scope.items = [
          'Bower',
          'Sass',
          'Gulp'
        ];
    });
})();
