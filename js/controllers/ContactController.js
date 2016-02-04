'use strict';

weddingApp.controller('ContactController',
    function IndexController($scope, $http) {

        $scope.pagecontent = {
            title: 'Contact',
            description: ' ',
            requiredmessage: 'Va rugam sa completati toate campurile de mai sus.'
        };

        $scope.user = {};

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