(function (){
//'user strict'
angular.module('myFirstApp',[])
.controller('MyFirstController', function($scope){
  $scope.name="Yaakov";
  $scope.sayHello=function(){
    return "Hello";
  }

});

})();
