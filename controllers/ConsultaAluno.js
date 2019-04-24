angular.module('ConsultarAluno', ['ngMask', 'ngMaterial', 'ngMessages']);
angular.module("ConsultarAluno").controller("ConsultarAlunoCtrl", function ($scope, $mdDialog){

    $scope.app="Consultar Aluno"
    $scope.alunos = [
        {nome:"Débora Viana", cpf:"70033574103", telefone:"61991032335", data: new Date()},
        {nome:"David Viana", cpf:"70033574103", telefone:"672525784", data: new Date()},
        {nome:"Adriano Fernandes", cpf:"64610764920", telefone:"979421697", data: new Date()},
        {nome:"Agnaldo dos Santos", cpf:"16394607215", telefone:"715521759", data: new Date()},
        {nome:"Ernanes da Silva", cpf:"00784164266", telefone:"518681811", data: new Date()}
    ];


    $scope.limpar = function(search){
        delete $scope.search;
    }

    $scope.excluir = function(ev, aluno){
        console.log("Excluir registro! ")
        console.log(ev)
        
        var confirm = $mdDialog.confirm()
        .title('Deseja excluir o registro ?')
        .targetEvent(ev)
        .ok('Confirmar')
        .cancel('Cancelar');
        $mdDialog.show(confirm).then(function() {
            console.log("Cancelado")
            //redirecionar para tela inicial
          }, function() {
            console.log("Não cancelado");
            
          });
    }

});