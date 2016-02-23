'use strict';

weddingApp.controller('ContactController',
    function IndexController($scope, $http) {

        $scope.pagecontent = {
            title: 'Contact',
            description: ' ',
            requiredmessage: 'Va rugam sa completati toate campurile de mai sus.'
        };

        $scope.user = {};

        $scope.user.interest = 2;

        $scope.selectChanged = function(){
            if ($scope.user.interest == 2) {
                return false;
            } else {
                return true;
            }
        };

        console.log($scope.user);

        $scope.sendUserData = function() {
            var user = $scope.user
            $http.post('../../contact.php', user).success(function(user, status, headers, config) {
                    console.log(status + ' - ' + user);
                }).error(function(user, status, headers, config) {
                    console.log('error');
                });

        }

    }
);