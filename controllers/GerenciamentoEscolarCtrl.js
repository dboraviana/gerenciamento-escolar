angular.module('CadastroAluno', ['br.cidades.estados', 'ngMask']);
angular.module("CadastroAluno").controller("CadastroAlunoCtrl", function ($scope, brCidadesEstados){
    $scope.app = "Cadastro de Aluno";
    $scope.alunos = [];

    $scope.cadastrar = function(aluno){
        console.log(aluno)
        $scope.alunos.push(angular.copy (aluno))
        delete $scope.aluno;
    }
    $scope.limpar = function(aluno){
        delete $scope.aluno;
    }
    $scope.sexo = [
    {nome: "Femino", codigo: "1"},
    {nome: "Masculino", codigo: "2"},
    {nome: "Não informar", codigo: "3"}
    ];

    $scope.estados = brCidadesEstados.estados;
 
     $scope.buscarCidadesPorSigla = function(sigla){
         $scope.cidades = brCidadesEstados.buscarCidadesPorSigla(sigla);
    }

    $scope.operadora = [
        {nome: "Claro", codigo: "1"},
        {nome:"Tim", codigo: "2"},
        {nome: "OI", codigo: "3"},
        {nome: "Vivo", codigo: "4"},
        {nome: "Outros", codigo: "5"}
    ];

    $scope.escolaridades = [
        {codigo: "1", nome: "Fundamental"},
        {codigo: "2", nome: "Médio Incompleto"},
        {codigo: "3", nome: "Médio Completo"},
        {codigo: "4", nome: "Superior Incompleto"},
        {codigo: "5", nome: "Superior Completo"}
    ]


    $scope.teste = function (escolaridades){
      console.log(escolaridades)
      $scope.escolaridades.push();
    }
});
