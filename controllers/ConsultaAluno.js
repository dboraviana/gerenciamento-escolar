angular.module('ConsultarAluno', ['ngMask', 'ngMaterial', 'ngMessages']);
angular.module("ConsultarAluno").controller("ConsultarAlunoCtrl", function ($scope, $mdDialog){

    $scope.app="Consultar Aluno"
    $scope.alunos = [
        {id: 1, nome:"Débora Viana", cpf:"70033574103", telefone:"61991032335", data: new Date()},
        {id: 2,nome:"David Viana", cpf:"70033574103", telefone:"672525784", data: new Date()},
        {id: 3,nome:"Adriano Fernandes", cpf:"64610764920", telefone:"979421697", data: new Date()},
        {id: 4,nome:"Agnaldo dos Santos", cpf:"16394607215", telefone:"715521759", data: new Date()},
        {id: 5,nome:"Ernandes da Silva", cpf:"00784164266", telefone:"518681811", data: new Date()}
    ];


    $scope.limpar = function(search){
        delete $scope.search;
    }

    $scope.excluir = function(ev, aluno, alunos){
        var confirm = $mdDialog.confirm()
            .title('Deseja excluir o registro ?')
            .targetEvent(ev)
            .ok('Confirmar')
            .cancel('Cancelar');
                $mdDialog.show(confirm).then(function() {
                    
                    $scope.excluir = function(id){
                        angular.forEach($scope.alunos, function(aluno){
                                
                                console.log(aluno.id + "--" +aluno.nome)    
                                   
                            
                        });
                    }
                    
                
                 }, function() {
                    console.log("Não excluir o registro: " + aluno.nome);
            
                    });
                }

});