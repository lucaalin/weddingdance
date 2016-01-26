'use strict';

weddingApp.controller('ContactController',
    function IndexController($scope) {

        $scope.pagecontent = {
            title: 'Contact',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            requiredmessage: 'Va rugam sa completati toate campurile de mai sus.'
        };


        $scope.sendUserData = function(user) {

        }

        $scope.user = {
            firstName: '',
            lastName: '',
            phoneNo: '',
            emailAddress: '',
            interests: [
                {
                    title: ''
                },
                {
                    title: ''
                }
            ],
            eventDate: '',
            eventLocation: '',
            message: ''
        }

    }
);