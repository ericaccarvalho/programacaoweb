angular.module('app').controller('zumbisCtrl', function($scope, $rootScope) {
    $rootScope.$on('cep', function(event, data) {
        $scope.ocorrencia.bairro = data.cidade;
    });

    $scope.ocorrencias = [];

    $scope.adiciona = function(ocorrencia) {
        $scope.ocorrencias.push(angular.copy(ocorrencia));
    };
});