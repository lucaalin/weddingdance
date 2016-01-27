'use strict';

weddingApp.controller('ContactController',
    function IndexController($scope, $http) {

        $scope.pagecontent = {
            title: 'Contact',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            requiredmessage: 'Va rugam sa completati toate campurile de mai sus.'
        };

        $scope.user = {};

        $scope.sendUserData = function() {
            window.alert('A intrat in functie');
            $http({
                method : 'POST',
                url : '/create',
                data : $scope.user
            });
            window.alert('Finish!');
        }

        // $scope.user = contactData.user;

    }
);