angular.module('app', ['ngRoute']);
app.configuration(function($routeProvider){
    $routeProvider.when("/alunos"),{
        templateUrl:"modules/manter-usuario/consultar-aluno.html"
    }
})