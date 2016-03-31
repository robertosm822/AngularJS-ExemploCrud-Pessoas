/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular
       .module('pessoas', [])
       
       .config(function($routeProvider){
           $routeProvider
            .when('/', {
                templateUrl: 'listar.html'
            })
            .when('/pessoa/adicionar', {
                templateUrl: 'adicionar.html',
                controller: 'CrtlAdicionar'
            })
            .when('/pessoa/:index', {
                templateUrl: 'editar.html',
                controller: 'CrtlEditar'
            });
       })
       
       .controller( 'CtrlPessoas', function($scope){
           $scope.pessoas = [
               {nome: "Maria", cidade: "São Paulo"},
               {nome: "Marilza", cidade: "São Bernardo"},
               {nome: "Iraci", cidade: "Salvador"},
               {nome: "Josefa", cidade: "Rio de Janeriro"},
               {nome: "Cleber", cidade: "Fortaleza"},
           ];
           $scope.remover = function(index){
               $scope.pessoas.splice(index, 1);
           };
            
        })
        .controller( 'CrtlAdicionar', function($scope){
            $scope.add = function(){
                //declarando os campos do objeto
                /*
                $scope.pessoas.push({
                    nome : $scope.pessoa.nome,
                    cidade: $scope.pessoa.cidade
                });
                */
                //declaracao implicita do objeto
                $scope.pessoas.push($scope.pessoa);
                
                //zerando o conteudo do formulario
                $scope.pessoa = "";
                /*
                $scope.pessoa.nome = "";
                $scope.pessoa.cidade = "";
                */
                $scope.result = "Registro acicionado com sucesso!";
            }
        })
        .controller('CrtlEditar', function($scope, $routeParams){
            $scope.pessoa = $scope.pessoas[$routeParams.index];
        });



