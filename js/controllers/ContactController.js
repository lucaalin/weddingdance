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

        $scope.sendUserData = function() {
            $http({
                method : 'POST',
                url : '/create',
                data : $scope.user
            });
            window.alert('Mesajul dvs. a fost trimis cu succes!');
        }

        // $scope.user = contactData.user;

    }
);