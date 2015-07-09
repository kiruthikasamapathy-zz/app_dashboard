
angular.module('app').controller('ConstantController', function($scope, $http, ENV_CONFIG_FILE){
    $http.get(ENV_CONFIG_FILE).success(function (data){
        $scope.environments_config = data;
    });
});
