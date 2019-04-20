angular.module('ConsultarAluno', ['ngMask', 'ngMaterial', 'ngMessages']);
angular.module("ConsultarAluno").controller("ConsultarAlunoCtrl", function ($scope){

    $scope.app="Consultar Aluno"
    $scope.alunos = [
        {nome:"Débora Viana", cpf:"70033574103", telefone:"61991032335", data: new Date()}
    ];


    $scope.limpar = function(aluno){
        delete $scope.aluno;
    }
});