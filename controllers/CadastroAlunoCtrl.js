angular.module('CadastroAluno', ['br.cidades.estados', 'ngMask', 'ngMaterial', 'ngMessages']);
angular.module("CadastroAluno").controller("CadastroAlunoCtrl", function ($scope, brCidadesEstados, $mdDialog){
    $scope.app = "Cadastro de Aluno";
    $scope.alunos = [
        {nome:"Débora Viana", cpf:"70033574103", telefone:"61991032335", data: new Date()}
    ];

    $scope.cadastrar = function(aluno){
        console.log(aluno)
        $scope.alunos.push(angular.copy (aluno))
        delete $scope.aluno;
        $scope.alunoForm.$setUntouched();
    }
    $scope.limpar = function(aluno){
        delete $scope.aluno;
        $scope.alunoForm.$setUntouched();
    }

    $scope.cancelar = function (alunoForm){
        
        if(alunoForm.$invalid){
            confirm('Botão clicado!');
            console.log("Voltanto para tela inicial")
        }
    }

    $scope.cancelar = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Deseja cancelar a operação ?')
              .targetEvent(ev)
              .ok('Confirmar')
              .cancel('Cancelar');
    
        $mdDialog.show(confirm).then(function() {
          console.log("Cancelado")
          //redirecionar para tela inicial
        }, function() {
          console.log("Não cancelado");

        
        });
      };

     

    $scope.sexo = [
    {nome: "Femino", codigo: "1"},
    {nome: "Masculino", codigo: "2"}
    ];

    $scope.tipo = [
      {nome: "Fixo", codigo: "1"},
      {nome: "Celular", codigo: "2"},
      {nome: "Fax", codigo: "3"}
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
    ];

    $scope.estadoCivil = [
        {codigo: "1", nome: "Solteiro (a)"},
        {codigo: "2", nome: "Casado (a)"},
        {codigo: "3", nome: "Divorciado (a)"},
        {codigo: "4", nome: "Não declarado"}
    ];

    $scope.profissoes = [
        {codigo: "1", nome: "Analista de testes"},
        {codigo: "2", nome: "Analista de Infra"},
        {codigo: "3", nome: "Analista de sistemas"},
        {codigo: "4", nome: "Programador Java"},
        {codigo: "5", nome: "Técnico de suporte"},
        {codigo: "6", nome: "Outros"}
    ]
    
  
    
    $scope.checarStatus = function(estadoCivil){
        $scope.alunos.push 
        console.log("Cliquei no botao: " + estadoCivil.nome)
    }
    
        $scope.btns = [{
          name: "btn1",
          title: "Sim",
          status: true
        }, {
          name: "btn2",
          title: "Não consta",
          status: false
        }, {
          name: "btn3",
          title: "Não",
          status: false
        }];
        $scope.user = {
          name: 'John Doe',
          email: '',
          phone: '',
          address: 'Mountain View, CA',
          donation: 19.99
        };
        

});
